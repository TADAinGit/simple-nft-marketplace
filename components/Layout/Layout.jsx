import React, { useEffect } from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "../Header/Header2";
import Sidebar from "../Sidebar/Sidebar2";
import { getSession } from "next-auth/react";

const drawerWidth = 280;
// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Layout = ({ children, session }) => {
  /**  Data attributes **/
  //   const { balance, buyTokens, getBalance } = useContext(MarketplaceContext);

  /** Action **/
  useEffect(() => {
    if (session) {
      console.log(session);
    }
  }, [session]);

  return (
    <Box display="flex">
      {/* Header */}
      <Header drawerWidth={drawerWidth} />
      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ p: 3, width: "100%" }}>
        <Toolbar />
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export async function getServerSideProps(context) {
  await getSession(context).then((s) => {
    console.log(s);
    return {
      props: { session: s },
    };
  });

  // redirect if not authenticated
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/signin",
  //       permanent: false,
  //     },
  //   };
  // }

  // return {
  //   props: { user: session.user },
  // };
}

export default Layout;
