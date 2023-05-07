import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MarketplaceContext } from "../../context/MarketplaceContext";
import { useRouter } from "next/router";
import SmallCard from "../../components/Card/SmallCard";
import { AuthContext } from "../../context/AuthContext";
import ListNFTDialog from "../../components/Dialog/ListNFTDialog";

const defaultPath = "/my-collections/";

const mock = [
  {
    address: "a1234",
    name: "nft 1",
    price: 10,
    owner: "1234",
    isSelling: false,
    isAuctioning: false,
  },
  {
    address: "a5466",
    name: "nft 2",
    price: 10,
    owner: "1234",
    isSelling: false,
    isAuctioning: true,
  },
  {
    address: "a1246",
    name: "nft 3",
    price: 10,
    owner: "1234",
    isSelling: false,
    isAuctioning: true,
  },
  {
    address: "a7634",
    name: "nft 4",
    price: 10,
    owner: "1234",
    isSelling: true,
    isAuctioning: false,
  },
  {
    address: "a1233",
    name: "nft 5",
    price: 10,
    owner: "1234",
    isSelling: false,
    isAuctioning: true,
  },
  {
    address: "a1244",
    name: "nft 6",
    price: 10,
    owner: "1234",
    isSelling: true,
    isAuctioning: false,
  },
  {
    address: "a1238",
    name: "nft 7",
    price: 10,
    owner: "1234",
    isSelling: true,
    isAuctioning: false,
  },
  {
    address: "a1232",
    name: "nft 8",
    price: 10,
    owner: "1234",
    isSelling: true,
    isAuctioning: false,
  },
];

const BadgeTitle = (props) => {
  const { title } = props;
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "10px",
      }}
    >
      <Paper
        sx={{
          border: "solid 2px white",
          borderRadius: 50,
          padding: "6px 18px",
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold">
          {title}
        </Typography>
      </Paper>
    </Box>
  );
};

const MyNFT = (params) => {
  const { isAuthenticated, userAddress, connectWallet, setRouteId } =
    useContext(AuthContext);
  const { balance, ownAssets } = useContext(MarketplaceContext);

  return (
    <Container>
      {isAuthenticated && (
        <Stack direction="column">
          <Typography variant="h4" fontWeight={700}>
            My NFT collections
          </Typography>
          <Divider
            sx={{ backgroundColor: "#ffffff", margin: "10px 0px", height: 2 }}
          />

          <BadgeTitle title={"Storage"} />
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "5px",
            }}
          >
            {ownAssets
              .filter((card) => !card.isAuctioning && !card.isSelling)
              .map((card, key) => (
                <Grid key={card._id} item xs={6} md={4} mb={2}>
                  <SmallCard
                    // key={card.address}
                    address={card.address}
                    name={card.name}
                    price={card.price}
                    owner={card.owner}
                    src={card.image}
                    description={card.description}
                    collection={card.collectionName}
                    metadata={card.metadata}
                    isSelling={card.isSelling}
                    isAuctioning={card.isAuctioning}
                    tokenId={card.tokenId}
                    // path={defaultPath + card.address}
                  />
                </Grid>
              ))}
          </Grid>

          <BadgeTitle title={"Listing"} />
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "5px",
            }}
          >
            {ownAssets
              .filter((card) => card.isSelling)
              .map((card, key) => (
                <Grid key={card._id} item xs={6} md={4} mb={2}>
                  <SmallCard
                    // key={card.address}
                    address={card.address}
                    name={card.name}
                    price={card.price}
                    owner={card.owner}
                    src={card.image}
                    description={card.description}
                    collection={card.collectionName}
                    metadata={card.metadata}
                    isSelling={card.isSelling}
                    isAuctioning={card.isAuctioning}
                    tokenId={card.tokenId}
                    // path={defaultPath + card.address}
                  />
                </Grid>
              ))}
          </Grid>

          {/* <BadgeTitle title={"Auctioning"} />
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "5px",
            }}
          >
            {mock
              .filter((card) => card.isAuctioning)
              .map((card, key) => (
                <Grid key={card.adress} item xs={6} md={4} mb={2}>
                  <SmallCard
                    address={card.address}
                    name={card.name}
                    price={card.price}
                    owner={card.owner}
                    isSelling={card.isSelling}
                    isAuctioning={card.isAuctioning}
                    path={defaultPath + card.address}
                  />
                </Grid>
              ))}
          </Grid> */}
        </Stack>
      )}
      {!isAuthenticated && <Box>Please connect wallet</Box>}
    </Container>
  );
};

export default MyNFT;
