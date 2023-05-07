import { Box, Grid, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useContext } from "react";
import SmallCard from "../components/Card/SmallCard";
import { MarketplaceContext } from "../context/MarketplaceContext";

const styles = {
  container: `h-full w-full flex bg-[#141414]`,
};

const Home = () => {
  const { sellingAssets } = useContext(MarketplaceContext);
  return (
    <Container>
      <Stack direction="column">
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Welcome to ESDC Marketplace
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
                  // isAuctioning={card.isAuctioning}
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
export default Home;
