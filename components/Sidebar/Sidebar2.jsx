import React, { useContext, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  Divider,
  List,
  Toolbar,
  Tooltip,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Paper,
  Stack,
  Snackbar,
  TextField,
} from "@mui/material";
import {
  Collections,
  Palette,
  LocalGroceryStore,
  Gavel,
  Home,
  ReceiptLong,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import ImageAvt from "../../assets/amongus.png";
import ImageMetamask from "../../assets/metamask.png";
import ImageFacebook from "../../assets/facebook.png";
import ImageDiscord from "../../assets/discord.png";
import ImageMoralis from "../../assets/moralis.jpg";
import { showShortAddress } from "../../lib/utils/common";
import { useRouter } from "next/router";
import Link from "next/link";
import { MarketplaceContext } from "../../context/MarketplaceContext";
import { AuthContext } from "../../context/AuthContext";

const InputField = styled(TextField)({
  backgroundColor: "white",
  borderWidth: "3px",
  borderRadius: 5,
  "& .MuiInputLabel-root": {
    color: "#141414",
  },
  "& .MuiFormLabel-filled": {
    display: "none",
  },
  "&:hover .MuiInputLabel-root": {
    color: "#141414",
    fontWeight: "bold",
    display: "block",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#141414",
    fontWeight: "bold",
    display: "block",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderWidth: "0px",

      // color: "#141414",
      fontWeight: "bold",
    },
    "&:hover fieldset": {
      borderColor: "#141414",
      color: "#141414",
      borderWidth: "3px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#141414",
      borderWidth: "3px",
    },
    "&.Mui-focused .MuiOutlinedInput-input": {
      color: "#1DD05D",
      fontWeight: "bold",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "#1DD05D",
    fontWeight: "bold",
    "&:hover": {
      color: "#1DD05D",
      fontWeight: "bold",
    },
  },
  // marginBottom: "6px",
});

const CustomButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "#1DD05D",
  borderRadius: 50,
  border: "solid 3px #fff",
  "&:hover": {
    color: "#1DD05D",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    border: "solid 3px #fff",
  },
}));

/*const routes = [
  {
    id: 1,
    name: "Home",
    icon: <Home />,
    path: "/",
  },
  {
    id: 2,
    name: "My collections",
    icon: <Collections />,
    path: "/my-collections",
  },
  {
    id: 3,
    name: "Mint NFT",
    icon: <Palette />,
    path: "/mint",
  },
  {
    id: 4,
    name: "Market",
    icon: <LocalGroceryStore />,
    path: "/market",
  },
  {
    id: 5,
    name: "Auction",
    icon: <Gavel />,
    path: "/auction",
  },
  {
    id: 6,
    name: "Transaction history",
    icon: <ReceiptLong />,
    path: "/transaction-history",
  },
];*/

const Sidebar = (props) => {
  /**  Data attributes **/
  //   const { balance, buyTokens, getBalance } = useContext(MarketplaceContext);
  // const username = "TADA";
  //   const isAuthenticated = true;
  const { drawerWidth } = props;
  const { push } = useRouter();

  const {
    isAuthenticated,
    userAddress,
    connectWallet,
    routeId,
    setRouteId,
    username,
    changeUsername,
    routes,
  } = useContext(AuthContext);
  const { balance } = useContext(MarketplaceContext);

  /** Actions **/

  /* List item route */
  // const [selectedRoute, setSelectedRoute] = React.useState(routeId);

  const handleSelectRoute = (event, index) => {
    setRouteId(index);
  };
  /* Snackbar */
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [snackBarMessage, setSnackBarMessage] = React.useState("");
  const [usernameTemp, setUsernameTemp] = React.useState("");

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
    setSnackBarMessage();
  };

  useEffect(() => {
    if (isAuthenticated && userAddress) {
      console.log({ isAuthenticated, userAddress });
    }
  }, [isAuthenticated, userAddress]);
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#070707",
          color: "#fff",
          borderRight: "2px solid #ffffff",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar sx={{ alignSelf: "center" }}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1DD05D",
            border: "#fff 3px solid",
            borderRadius: "12px",
            margin: "10px 5px",
            padding: "10px 15px",
          }}
        >
          <Stack spacing={1} alignItems="center" justifyContent="center">
            {!isAuthenticated ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  color="#fff"
                  mb={1}
                  variant="subtitle2"
                  fontWeight={600}
                >
                  Welcome to ESDC
                </Typography>
                <CustomButton
                  variant="outlined"
                  onClick={(e) => {
                    connectWallet();
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={600}>
                    Connect wallet
                  </Typography>
                </CustomButton>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={ImageAvt} alt="avatar" layout="fill" />
                {username ? (
                  <Typography variant="subtitle1" color={"#fff"}>
                    Hi {username}
                  </Typography>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      marginTop: "5px",
                    }}
                  >
                    <InputField
                      label="Set username"
                      size="small"
                      onChange={(e) => setUsernameTemp(e.target.value)}
                    />
                    <Button
                      size="small"
                      sx={{ position: "fixed" }}
                      onClick={() => {
                        if (usernameTemp) {
                          changeUsername(usernameTemp);
                        } else {
                          setSnackBarMessage("Please enter your Username");
                          setOpenSnackBar(true);
                        }
                      }}
                    >
                      Set
                    </Button>
                  </Box>
                )}

                <Box display="flex" flexDirection="row">
                  <Typography
                    fontSize={16}
                    fontWeight={700}
                    variant="subtitle2"
                    color="#fff"
                    mr={1}
                  >
                    Address:{" "}
                  </Typography>
                  {userAddress && (
                    <Tooltip
                      title="Copy address"
                      onClick={(e) => {
                        navigator.clipboard
                          .writeText(userAddress || "")
                          .then(() => {
                            setSnackBarMessage("Copied address to clipboard");
                          })
                          .finally(() => {
                            setOpenSnackBar(true);
                          });
                      }}
                    >
                      <Typography
                        fontSize={15}
                        variant="subtitle2"
                        color="#fff"
                        sx={{
                          cursor: "pointer",
                          "&:hover": {
                            fontWeight: 700,
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {showShortAddress(userAddress)}
                      </Typography>
                    </Tooltip>
                  )}
                </Box>
              </Box>
            )}
          </Stack>
        </Paper>
      </Toolbar>
      <Divider
        variant="middle"
        sx={{ backgroundColor: "#ffffff", height: 2, borderRadius: 50 }}
      />
      <List
        sx={{
          padding: "5px 10px",
        }}
      >
        {routes.map((route, index) => (
          <ListItem
            sx={{
              ".Mui-selected": {
                color: "#1DD05D",
                border: "solid 2px #1DD05D",
                borderRadius: 20,
                fontWeight: 700,
              },
              margin: "10px 0",
            }}
            key={route.name}
            disablePadding
          >
            <ListItemButton
              selected={routeId === route.id}
              onClick={(e) => {
                handleSelectRoute(e, route.id);
                push(route.path);
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                {route.icon}
              </ListItemIcon>
              <Typography variant="subtitle1">{route.name}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          overflow: "hidden",
          backgroundColor: "#181818",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: drawerWidth - 2,
        }}
      >
        <Box
          sx={{
            padding: "14px 28px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href={"https://moralis.io/"}>
            <Image alt="Moralis logo" src={ImageMoralis} height={24} />
          </Link>
          <Image alt="Discord logo" src={ImageDiscord} height={22} />
          <Link href={"https://metamask.io/"}>
            <Image alt="Metamask logo" src={ImageMetamask} height={24} />
          </Link>
          <Link href={"https://www.facebook.com/TADA.be.DEV"}>
            <Image alt="Facebook logo" src={ImageFacebook} height={24} />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="#6E6E6E" variant="caption">
            ESDC: TADA© 2022-2023{" "}
          </Typography>
        </Box>
      </Box>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={1000}
        onClose={handleCloseSnackBar}
        message={snackBarMessage}
      />
    </Drawer>
  );
};

export default Sidebar;
