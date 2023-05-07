import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
  Paper,
  CardMedia,
} from "@mui/material";
import {} from "@mui/icons-material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Mock from "../../assets/mock/rotate-punk1.gif";
import TokenESDC from "../../assets/ESDC.jpg";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { MarketplaceContext } from "../../context/MarketplaceContext";
import { AuthContext } from "../../context/AuthContext";
import ListNFTDialog from "../Dialog/ListNFTDialog";
import DelistNFTDialog from "../Dialog/DelistNFTDialog";
import BuyNFTDialog from "../Dialog/BuyNFTDialog";

const CustomButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "inherit",
  borderRadius: 50,
  border: "solid 3px #fff",
  fontWeight: 500,
  "&:hover": {
    color: "#141414",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    border: "solid 3px #fff",
    fontWeight: 600,
  },
}));

const SmallCard = (props) => {
  const {
    address,
    name,
    tokenId,
    price,
    owner,
    description,
    src,
    collection,
    metadata,
    isSelling,
    isAuctioning,
    auctionTime,
    path,
  } = props;
  const { userAddress } = useContext(AuthContext);

  // For list modal
  const [openList, setOpenList] = useState(false);
  const handleClickOpenList = () => {
    setOpenList(true);
  };

  const handleCloseList = () => {
    setOpenList(false);
  };
  // For delist modal
  const [openDelist, setOpenDelist] = useState(false);
  const handleClickOpenDelist = () => {
    setOpenDelist(true);
  };

  const handleCloseDelist = () => {
    setOpenDelist(false);
  };

  // For buy modal
  const [openBuy, setOpenBuy] = useState(false);
  const handleClickOpenBuy = () => {
    setOpenBuy(true);
  };

  const handleCloseBuy = () => {
    setOpenBuy(false);
  };
  return (
    <Card
      elevation={4}
      sx={{ maxWidth: 325, borderRadius: 4, backgroundColor: "#202020" }}
      className="group cursor-pointer transition-all duration-300  hover:scale-110 hover:shadow-md overflow-hidden"
    >
      <CardMedia
        sx={{
          maxHeight: "250px",
          // height: "100%",
          objectFit: "cover",
        }}
        component="img"
        height="300"
        image={src}
        alt={"NFT card: " + name}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" fontWeight={600} color="#ffffff">
          {name}
        </Typography>
        <Typography variant="h6" color="#ffffff">
          #{tokenId || "0000"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignSelf: "end",
            border: "solid 2px #ffffff",
            borderRadius: 50,
            padding: "5px 24px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            {price}
          </Typography>
          <Image
            alt="ESDC token"
            src={TokenESDC}
            height={20}
            className="ml-4"
          />
        </Box>
      </CardContent>
      {isSelling && (
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {userAddress === owner ? (
            <CustomButton
              fullWidth
              size="medium"
              onClick={handleClickOpenDelist}
            >
              Delist
            </CustomButton>
          ) : (
            <CustomButton fullWidth size="medium" onClick={handleClickOpenBuy}>
              Buy NFT
            </CustomButton>
          )}
        </CardActions>
      )}
      {isAuctioning && (
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ margin: "10px 5px" }}>
            <Typography variant="h6" color="#ffffff">
              00:00:00
            </Typography>
          </Box>
          {userAddress === owner ? (
            <CustomButton fullWidth size="medium">
              Cancel auction
            </CustomButton>
          ) : (
            <CustomButton fullWidth size="medium">
              Place a bid
            </CustomButton>
          )}
        </CardActions>
      )}
      {!isAuctioning && !isSelling && (
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {userAddress === owner && (
            <Stack width="100%" spacing={1}>
              <CustomButton
                fullWidth
                size="medium"
                onClick={handleClickOpenList}
              >
                List
              </CustomButton>
              <CustomButton
                fullWidth
                size="medium"
                onClick={() => {
                  console.log("Auction");
                }}
              >
                Auction
              </CustomButton>
            </Stack>
          )}
        </CardActions>
      )}

      <ListNFTDialog
        params={{
          tokenId: tokenId,
          nftName: name,
          image: src,
          description: description,
          collection: collection,
          metadata: metadata,
          openList,
          handleCloseList,
        }}
      />

      <DelistNFTDialog
        params={{
          tokenId: tokenId,
          nftName: name,
          image: src,
          description: description,
          collection: collection,
          metadata: metadata,
          openDelist,
          handleCloseDelist,
        }}
      />

      <BuyNFTDialog
        params={{
          tokenId: tokenId,
          nftName: name,
          image: src,
          price: price,
          description: description,
          collection: collection,
          metadata: metadata,
          openBuy,
          handleCloseBuy,
        }}
      />
    </Card>
  );
};

export default SmallCard;
