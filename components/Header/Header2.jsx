import React, { useContext, useEffect } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  Container,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import Image from "next/image";
import Logo from "../../assets/Logo.png";
import TokenBNB from "../../assets/bnb_token.png";
import TokenESDC from "../../assets/ESDC.jpg";
import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { MarketplaceContext } from "../../context/MarketplaceContext";
import { AuthContext } from "../../context/AuthContext";

const pages = ["Products", "Pricing", "Blog"];

const Header = (props) => {
  /**  Data attributes **/
  const { push } = useRouter();
  const { drawerWidth } = props;
  //   const balance = 1000;
  //   const isAuthenticated = true;
  const { isAuthenticated, userAddress, connectWallet, disconnectWallet } =
    useContext(AuthContext);
  const { balance, balanceESDC } = useContext(MarketplaceContext);

  /** Actions **/
  const settings = [
    {
      name: "Profile",
      method: () => {
        push("/profile");
        handleCloseUserMenu();
      },
    },
    {
      name: "Sign out",
      method: () => {
        disconnectWallet();
        handleCloseUserMenu();
      },
    },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "#070707",
        paddingY: "10px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={(e) => {
              push("/");
            }}
          >
            <Image src={Logo} alt="App-logo" height={80} className="mr-2" />
            <Typography
              variant="h4"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ESDC
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))} */}
          </Box>

          {isAuthenticated && (
            <Box sx={{ marginRight: 2 }}>
              <Paper
                sx={{
                  backgroundColor: "inherit",
                  border: "solid 2px #1DD05D",
                  borderRadius: 50,
                  padding: "6px 12px",
                  color: "#1DD05D",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                BNB: {balance}{" "}
                <Image
                  alt="balance icon"
                  src={TokenBNB}
                  height={20}
                  width={20}
                  className="ml-2 border-amber-400 border-2 rounded-full"
                />
              </Paper>
            </Box>
          )}

          {isAuthenticated && (
            <Box sx={{ marginRight: 2 }}>
              <Paper
                sx={{
                  backgroundColor: "inherit",
                  border: "solid 2px #1DD05D",
                  borderRadius: 50,
                  padding: "6px 12px",
                  color: "#1DD05D",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                ESDC: {balanceESDC}{" "}
                <Image
                  alt="balance icon"
                  src={TokenESDC}
                  height={20}
                  width={20}
                  className="ml-2 border-[#fff] border-0"
                />
              </Paper>
            </Box>
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="TADA">
                  <AccountCircle />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!isAuthenticated ? (
                <MenuItem
                  key={1}
                  onClick={() => {
                    connectWallet();
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">Connect wallet</Typography>
                </MenuItem>
              ) : (
                settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={setting.method}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
