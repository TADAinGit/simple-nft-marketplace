import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SmallCard from "../../components/Card/SmallCard";
import { MarketplaceContext } from "../../context/MarketplaceContext";

const mock = [
  {
    address: "a1234",
    name: "nft 1",
    price: 10,
    owner: "1234",
    isSelling: true,
    isAuctioning: false,
  },
  {
    address: "a5466",
    name: "nft 2",
    price: 10,
    owner: "1222",
    isSelling: true,
    isAuctioning: false,
  },
  {
    address: "a1246",
    name: "nft 3",
    price: 10,
    owner: "1233",
    isSelling: true,
    isAuctioning: false,
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
    owner: "1232",
    isSelling: true,
    isAuctioning: false,
  },
  {
    address: "a1244",
    name: "nft 6",
    price: 10,
    owner: "1231",
    isSelling: true,
    isAuctioning: false,
  },
  {
    address: "a1238",
    name: "nft 7",
    price: 10,
    owner: "1230",
    isSelling: true,
    isAuctioning: false,
  },
  {
    address: "a1232",
    name: "nft 8",
    price: 10,
    owner: "1239",
    isSelling: true,
    isAuctioning: false,
  },
];

const Market = (params) => {
  const { sellingAssets } = useContext(MarketplaceContext);

  return (
    <Container>
      <Stack direction="column">
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Marketplace
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "10px",
            }}
          >
            {sellingAssets.map((card, key) => (
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
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default Market;
