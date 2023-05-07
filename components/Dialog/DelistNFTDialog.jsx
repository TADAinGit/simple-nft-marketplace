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

const DelistNFTDialog = ({ params }) => {
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
    openDelist,
    handleCloseDelist,
  } = params;

  const onClickList = useCallback(async () => {
    try {
      if (!web3Provider) {
        console.log("Missing web3 provider.");
        return;
      }
      //   const nftContract = new NftContract(web3Provider);
      const marketContract = new MarketContract(web3Provider);
      //   await nftContract.approve(marketContract._contractAddress, tokenId);
      const tx = await marketContract.unListNft(tokenId);
      console.log(tx);
      await axios.post(
        "api/transactions/addTransaction",
        {
          transaction: tx,
          content: `Delist NFT: Token ID (#${tokenId})`,
          value: `${0} ESDC`,
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
        update: { price: 0, isSelling: false },
      });
    } catch (error) {
      console.log(error);
    }
    handleCloseDelist();
  }, [tokenId, userAddress, web3Provider]);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openDelist}
      onClose={handleCloseDelist}
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
        {`Delist NFT: #${tokenId} - ${nftName}`}
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
        </Grid>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={onClickList}>Confirm</Button>
        <Button
          onClick={() => {
            handleCloseDelist();
          }}
          autoFocus
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DelistNFTDialog;
