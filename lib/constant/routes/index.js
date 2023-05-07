import {
  Collections,
  Palette,
  LocalGroceryStore,
  Gavel,
  Home,
  ReceiptLong,
} from "@mui/icons-material";

export const userRoute = [
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
];
export const adminRoute = [
  {
    id: 1,
    name: "All NFT",
    icon: <Home />,
    path: "/admin/all",
  },
  {
    id: 2,
    name: "Selling NFTs",
    icon: <Home />,
    path: "/admin/selling",
  },
  {
    id: 3,
    name: "Auctioning NFTs",
    icon: <Home />,
    path: "/admin/auctioning",
  },
  {
    id: 4,
    name: "Waiting NFTs",
    icon: <Home />,
    path: "/admin/waiting",
  },
  {
    id: 5,
    name: "Transactions",
    icon: <Home />,
    path: "/admin/transactions",
  },
  {
    id: 6,
    name: "Users",
    icon: <Home />,
    path: "/admin/users",
  },
  {
    id: 7,
    name: "Approvers",
    icon: <Home />,
    path: "/admin/approvers",
  },
];
export const approverRoute = [
  {
    id: 1,
    name: "All NFT",
    icon: <Home />,
    path: "/approver/all",
  },
  {
    id: 2,
    name: "Selling NFTs",
    icon: <Home />,
    path: "/approver/selling",
  },
  {
    id: 3,
    name: "Auctioning NFTs",
    icon: <Home />,
    path: "/approver/auctioning",
  },
  {
    id: 4,
    name: "Waiting NFTs",
    icon: <Home />,
    path: "/approver/waiting",
  },
];
const Routes = {
  userRoute,
  adminRoute,
  approverRoute,
};

export default Routes;
