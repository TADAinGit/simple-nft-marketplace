import { useCallback, useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useMediaQuery,
  Divider,
  CardMedia,
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import MarketContract from "../../lib/contract/MarketplaceContractESDC";
import { AuthContext } from "../../context/AuthContext";
import NftContract from "../../lib/contract/NftContractESDC";
import axios from "axios";

const ListNFTDialog = ({ params }) => {
  const [price, setPrice] = useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { web3Provider, userAddress } = useContext(AuthContext);

  const {
    tokenId,
    nftName,
    image,
    description,
    collection,
    metadata,
    openList,
    handleCloseList,
  } = params;

  const onClickList = useCallback(async () => {
    if (price === 0) {
      console.log("Price must be set");
      return;
    }
    try {
      if (!web3Provider) {
        console.log("Missing web3 provider.");
        return;
      }
      const nftContract = new NftContract(web3Provider);
      const marketContract = new MarketContract(web3Provider);
      await nftContract.approve(marketContract._contractAddress, tokenId);
      const tx = await marketContract.listNft(tokenId, price);
      console.log(tx);
      await axios.post(
        "api/transactions/addTransaction",
        {
          transaction: tx,
          content: `List NFT: Token ID (#${tokenId})`,
          value: `${price} ESDC`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    try {
      await axios.post("api/assets/updateAsset", {
        owner: userAddress,
        tokenId,
        update: { price: price, isSelling: true },
      });
    } catch (error) {
      console.log(error);
    }
    setPrice(0);
    handleCloseList();
  }, [price, tokenId, userAddress, web3Provider]);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openList}
      onClose={handleCloseList}
      aria-labelledby="responsive-dialog-title"
      sx={{
        "& .MuiDialog-container .MuiPaper-root ": {
          backgroundColor: "#333333",
          minWidth: "650px",

          "& .MuiDialogTitle-root": {
            color: "#fefefe",
          },
        },
      }}
    >
      <DialogTitle id="responsive-dialog-title">
        {`List NFT: #${tokenId} - ${nftName}`}
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <CardMedia
              component="img"
              image={image}
              alt={`NFT: ${nftName}`}
              sx={{
                // maxWidth: "200px",
                borderRadius: "5px",
              }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography color="#EEEEEE" variant="subtitle1">
              Token ID: {tokenId}
            </Typography>
            <Typography color="#EEEEEE" variant="subtitle1">
              Name: {nftName}
            </Typography>
            <Typography color="#EEEEEE" variant="subtitle1">
              Description: {description}
            </Typography>
            <Typography color="#EEEEEE" variant="subtitle1">
              Collection: {collection}
            </Typography>
            <Typography color="#EEEEEE" variant="subtitle1">
              Metadata: <br />
              {metadata
                ? metadata.map((data, i) => (
                    <Typography variant="caption" key={i}>
                      {data.trait_type}: {data.value}
                    </Typography>
                  ))
                : "(Empty)"}
            </Typography>
          </Grid>
          <Grid item md={12} sm={12}>
            <TextField
              size="small"
              label="Price"
              variant="filled"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="number"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">ESDC</InputAdornment>
                ),
              }}
              sx={{ backgroundColor: "#fefefe", borderRadius: 1 }}
            />
          </Grid>
        </Grid>
        {/* <Image alt={`NFT: ${nftName}`} src={image} width={200} height={100} /> */}
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={onClickList}>Confirm</Button>
        <Button
          onClick={() => {
            setPrice(0);
            handleCloseList();
          }}
          autoFocus
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListNFTDialog;
