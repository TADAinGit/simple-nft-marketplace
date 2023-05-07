import React, { createContext, useState, useEffect } from "react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { signIn, getSession, signOut } from "next-auth/react";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { ethers } from "ethers";
import axios from "axios";
import { adminRoute, userRoute, approverRoute } from "../lib/constant/routes";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected, address } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAddress, setUserAddress] = useState(""); // Account address
  const [username, setUsername] = useState("");
  const [profileId, setProfileId] = useState("");
  const [session, setSession] = useState();
  const [routeId, setRouteId] = useState(1);
  const [role, setRole] = useState("");

  const [web3Provider, setWeb3Provider] = useState();
  const [routes, setRoutes] = useState(userRoute);

  /** Actions **/
  const connectWallet = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const userData = { address: account, chain: chain.id, network: "evm" };
    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const message = data.message;
    const signature = await signMessageAsync({ message });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    console.log(address);
    setWeb3Provider(provider);

    await signIn("credentials", {
      message,
      signature,
      redirect: false,
      // callbackUrl: "/",
    });

    await getSession(this).then((s) => {
      setSession(s);
      localStorage.setItem("user", JSON.stringify(s.user));
    });
  };

  const disconnectWallet = async () => {
    if (isConnected) {
      await disconnectAsync();
    }
    if (localStorage.getItem("user")) {
      localStorage.clear();
    }
    signOut({ redirect: "/" });
  };

  const changeUsername = async (usernameData) => {
    try {
      if (isAuthenticated) {
        await axios
          .post(
            "/api/auth/updateUsername",
            { address: address, username: usernameData },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log("Set username response: " + response);
            setUsername(usernameData);
          });
      }
    } catch (error) {
      throw error;
    }
  };

  //   const getBalance = async (address) => {
  //     console.log("Passing address ", address);
  //     try {
  //       await axios
  //         .post(
  //           "/api/balance",
  //           { address },
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         )
  //         .then((response) => {
  //           setBalance(response?.data?.balance || "Empty");
  //           setBalanceESDC(response?.data?.balanceESDC.value || "Empty");
  //         });
  //       // console.log(data.balance);
  //     } catch (error) {
  //       throw error;
  //     }
  //   };

  /* */
  useEffect(() => {
    if (userAddress && isAuthenticated) {
      console.log("Authenticated");
    }
  }, [isAuthenticated, userAddress]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      // console.log(user);
      // setSession(user);
      // getBalance(user.address);
      setProfileId(user.profileId);
      setRole(user.role);
      setUsername(user.username);
      setUserAddress(user.address);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setWeb3Provider(provider);

      switch (user.role) {
        case "admin":
          setRoutes(adminRoute);
          break;
        case "approver":
          setRoutes(approverRoute);
          break;
        default:
          setRoutes(userRoute);
          break;
      }

      setIsAuthenticated(true);
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        web3Provider,
        isAuthenticated,
        userAddress,
        username,
        role,
        routeId,
        profileId,
        routes,
        changeUsername,
        setRouteId,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
