import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import SmallCard from "../../components/Card/SmallCard";

const mock = [
  {
    address: "a1234",
    name: "nft 1",
    price: 10,
    owner: "1234",
    isSelling: false,
    isAuctioning: true,
  },
  {
    address: "a5466",
    name: "nft 2",
    price: 10,
    owner: "1222",
    isSelling: false,
    isAuctioning: true,
  },
  {
    address: "a1246",
    name: "nft 3",
    price: 10,
    owner: "1233",
    isSelling: false,
    isAuctioning: true,
  },
  {
    address: "a7634",
    name: "nft 4",
    price: 10,
    owner: "1234",
    isSelling: false,
    isAuctioning: true,
  },
  {
    address: "a1233",
    name: "nft 5",
    price: 10,
    owner: "1232",
    isSelling: false,
    isAuctioning: true,
  },
  {
    address: "a1244",
    name: "nft 6",
    price: 10,
    owner: "1231",
    isSelling: false,
    isAuctioning: true,
  },
  {
    address: "a1238",
    name: "nft 7",
    price: 10,
    owner: "1230",
    isSelling: false,
    isAuctioning: true,
  },
  {
    address: "a1232",
    name: "nft 8",
    price: 10,
    owner: "1239",
    isSelling: false,
    isAuctioning: true,
  },
];

const Auction = (params) => {
  return (
    <Container>
      <Stack direction="column">
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Auctionplace
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "10px",
            }}
          >
            {mock.map((card, key) => (
              <Grid key={card.adress} item xs={6} md={4} mb={2}>
                <SmallCard
                  address={card.address}
                  name={card.name}
                  price={card.price}
                  owner={card.owner}
                  isSelling={card.isSelling}
                  isAuctioning={card.isAuctioning}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default Auction;
