import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const MarketplaceContext = createContext();

export const MarketplaceProvider = ({ children }) => {
  const { session, isAuthenticated, userAddress, profileId } =
    useContext(AuthContext);
  const [balance, setBalance] = useState("");
  const [balanceESDC, setBalanceESDC] = useState("");
  const [ownedCollections, setOwnedCollection] = useState([]);

  const [ownAssets, setOwnAssets] = useState([]);
  const [sellingAssets, setSellingAssets] = useState([]);
  /** Actions **/
  const getBalance = async () => {
    console.log("Passing address ", userAddress);
    try {
      await axios
        .post(
          "/api/balance",
          { address: userAddress },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setBalance(response?.data?.balance || "Empty");
          setBalanceESDC(response?.data?.balanceESDC.value || "Empty");
        });
      // console.log(data.balance);
    } catch (error) {
      throw error;
    }
  };

  const getOwnCollections = async () => {
    // const user = JSON.parse(localStorage.getItem("user"));
    try {
      await axios
        .post(
          "/api/collections/getCollection",
          { profileId: profileId },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          // console.log(response);
          setOwnedCollection(response && response.data.collections);
          // return response?.data?.collections;
        });
    } catch (error) {
      throw error;
    }
  };

  const addNewCollection = async (name, description) => {
    // const user = JSON.parse(localStorage.getItem("user"));
    try {
      await axios
        .post(
          "/api/collections/addCollection",
          { name: name, description: description, profileId: profileId },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          return response.data;
        });
    } catch (error) {
      throw error;
    }
  };

  const addNewAsset = async (
    tokenId,
    name,
    description,
    collection,
    image,
    owner,
    metadata
  ) => {
    try {
      await axios
        .post(
          "/api/assets/addAsset",
          { tokenId, name, description, collection, image, owner, metadata },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          return response.data;
        });
    } catch (error) {
      throw error;
    }
  };

  const getOwnAssets = useCallback(async () => {
    try {
      await axios
        .post(
          "/api/assets/getOwnAsset",
          { owner: userAddress },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setOwnAssets(response && response.data.assets);
          // return response?.data?.collections;
        });
    } catch (error) {
      throw error;
    }
  }, [userAddress]);

  const getSellingAssets = useCallback(async () => {
    try {
      await axios
        .post(
          "/api/assets/getSellingAsset",
          { owner: userAddress },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setSellingAssets(response && response.data.assets);
          // return response?.data?.collections;
        });
    } catch (error) {
      throw error;
    }
  }, [userAddress]);

  /* */
  useEffect(() => {
    if (userAddress && isAuthenticated) {
      console.log("Marketplace context confirm authenticated");
      getBalance();
      getOwnAssets();
      getSellingAssets();
    }
  }, [isAuthenticated, userAddress]);

  return (
    <MarketplaceContext.Provider
      value={{
        balance,
        balanceESDC,
        getBalance,
        ownedCollections,
        setOwnedCollection,
        addNewCollection,
        getOwnCollections,
        addNewAsset,
        ownAssets,
        sellingAssets,
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};
