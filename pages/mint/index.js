import {
  Box,
  Button,
  Container,
  Divider,
  FilledInput,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Snackbar,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { AddCircleRounded, Delete, DeleteRounded } from "@mui/icons-material";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import ImageInput from "../../components/Input/ImageInput";
import { MarketplaceContext } from "../../context/MarketplaceContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import ESDC_NFT from "../../lib/constant/abis/ESDC_NFT.json";
import NftContract from "../../lib/contract/NftContractESDC";
import TokenContractESDC from "../../lib/contract/TokenContractESDC";

const CustomButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "#181818 !important",
  borderRadius: 50,
  border: "solid 3px #ffffff",
  fontWeight: 500,
  "&:hover": {
    color: "#141414",
    backgroundColor: "#ffffff !important",
    borderRadius: 50,
    border: "solid 3px #ffffff",
    fontWeight: 600,
  },
}));

const inputStyle = { backgroundColor: "#fefefe", borderRadius: 1 };

const Mint = ({}) => {
  const { isAuthenticated, userAddress, web3Provider } =
    useContext(AuthContext);
  const {
    getOwnCollections,
    setOwnedCollection,
    ownedCollections,
    addNewCollection,
    addNewAsset,
    ownAssets,
  } = useContext(MarketplaceContext);

  const [background, setBackground] = useState(null);
  const [collection, setCollection] = useState("");
  const [tempCollection, setTempCollection] = useState("");
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");
  const [metadata, setMetadata] = useState([]);
  const [feature, setFeature] = useState("");
  // const [uri, setUri] = useState("");
  const [assetData, setAssetData] = useState({});

  /* Snackbar */
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
    setSnackBarMessage();
  };

  const onClickAddFeature = (featureData) => {
    setMetadata([...metadata, JSON.parse(`{"trait_type":"${featureData}"}`)]);
    setFeature("");
  };

  const handleChangeCollection = (event) => {
    setCollection(event.target.value);
  };

  const onClickClearItem = (removeIndex) => {
    console.log(removeIndex);
    setMetadata((oldArray) => {
      return oldArray.filter((value, i) => i !== removeIndex);
    });
  };

  const onFeatureChange = (i) => (e) => {
    setMetadata(
      [...metadata].map((o, index) => {
        if (index === i) {
          return {
            ...o,
            value: e.target.value,
          };
        } else return o;
      })
    );
  };

  const onClickAddCollection = () => {
    addNewCollection(tempCollection, "");
    setOwnedCollection([
      ...ownedCollections,
      { _id: ownedCollections.length + 1, name: tempCollection },
    ]);
  };
  const storeAssetData = async () => {
    // console.log(background);
    const dataImage = {
      path: `ESDC/${nftName}.jpg`,
      content: await toBase64(background),
    };

    const { data } = await axios.post(
      "api/mint/uploadIPFS",
      { data: dataImage },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const nft_metadata = {
      name: nftName,
      description: nftDescription,
      collection: collection,
      image: data.data[0].path,
      attributes: metadata,
    };

    // console.log(nft_metadata);
    // setAssetData(nft_metadata);

    await addNewAsset(
      ownAssets.length + 1,
      nft_metadata.name,
      nft_metadata.description,
      nft_metadata.collection,
      nft_metadata.image,
      userAddress,
      nft_metadata.attributes
    );

    const fullMetadata = {
      path: `ESDC/${nftName}.json`,
      content: nft_metadata,
    };

    console.log(fullMetadata);

    const path = await axios.post(
      "api/mint/uploadIPFS",
      { data: fullMetadata },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return path.data.data[0].path;
  };

  const onClickMint = useCallback(async () => {
    if (!web3Provider) {
      console.log("Missing web3 provider");
      return;
    }
    const esdcNftContract = new NftContract(web3Provider);
    const esdcTokenContract = new TokenContractESDC(web3Provider);

    const path = await storeAssetData();
    console.log(path);

    await esdcTokenContract.approve(
      esdcNftContract._contractAddress,
      100000000000000000000
    );

    await esdcNftContract
      .mintNFT(path)
      .then(async (res) => {
        console.log(res);

        await axios.post(
          "api/transactions/addTransaction",
          { transaction: res, content: "Minting NFT", value: "100 ESDC" },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      })
      .finally(() => {
        setSnackBarMessage("Complete! Please wait for approving.");
        setOpenSnackBar(true);

        setBackground(null);
        setNftName("");
        setNftDescription("");
        setMetadata([]);
        setCollection("");
      });
  }, [web3Provider, storeAssetData, userAddress]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  useEffect(() => {
    if (isAuthenticated) {
      getOwnCollections();
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <Stack direction="column" spacing={2}>
        <Paper
          sx={{
            padding: "18px 20px",
            backgroundColor: "#444444",
            borderRadius: "10px",
            color: "#fefefe",
          }}
        >
          <Grid container>
            <Grid
              item
              md={4}
              sm={12}
              paddingX={"12px"}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={700}
                // align="center"
                onClick={(e) => {
                  console.log(metadata);
                  console.log(background);
                }}
              >
                Mint NFT
              </Typography>
            </Grid>
            <Grid container item md={8} sm={12} spacing={2} mb={2}>
              <Grid item md={6} sm={12}>
                <Box>
                  <InputLabel htmlFor="add-feature">
                    <Typography variant="caption" color="#fefefe">
                      Add collection
                    </Typography>
                  </InputLabel>
                  <FilledInput
                    id="add-feature"
                    size="small"
                    label="Name"
                    variant="filled"
                    fullWidth
                    value={tempCollection}
                    onChange={(e) => {
                      setTempCollection(e.target.value);
                    }}
                    sx={{
                      backgroundColor: "#fefefe",
                      borderRadius: 1,
                      "&:hover": {
                        backgroundColor: "#fefefe",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "#fefefe",
                      },
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        |
                        <Tooltip title="Add new collection">
                          <IconButton
                            onClick={() => {
                              if (tempCollection) {
                                onClickAddCollection();
                                setTempCollection("");
                              }
                            }}
                            edge="end"
                          >
                            <AddCircleRounded sx={{ color: "#1DD05D" }} />
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    }
                  />
                </Box>
              </Grid>
              <Grid item md={6} sm={12}>
                <Box>
                  <InputLabel htmlFor="add-collection">
                    <Typography variant="caption" color="#fefefe">
                      Add feature
                    </Typography>
                  </InputLabel>
                  <FilledInput
                    id="add-collection"
                    size="small"
                    label="Name"
                    fullWidth
                    variant="filled"
                    value={feature}
                    onChange={(e) => {
                      setFeature(e.target.value);
                    }}
                    sx={{
                      backgroundColor: "#fefefe",
                      borderRadius: 1,
                      "&:hover": {
                        backgroundColor: "#fefefe",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "#fefefe",
                      },
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        |
                        <Tooltip title="Add new feature">
                          <IconButton
                            onClick={() => {
                              if (feature) {
                                onClickAddFeature(feature);
                              }
                            }}
                            edge="end"
                          >
                            <AddCircleRounded sx={{ color: "#1DD05D" }} />
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    }
                  />
                </Box>
              </Grid>
            </Grid>

            {/* <Stack direction="row" spacing={2}></Stack> */}
          </Grid>

          <Grid container spacing={1}>
            <Grid item md={4} sm={12} paddingX={"12px"}>
              <ImageInput
                background={background}
                setBackground={setBackground}
              />
              {/* <CustomButton
                fullWidth
                sx={{
                  marginTop: "10px",
                }}
                onClick={() => {
                  onClickMint();
                }}
              >
                Mint
              </CustomButton> */}

              <CustomButton
                fullWidth
                sx={{
                  marginTop: "10px",
                }}
                onClick={() => {
                  onClickMint();
                }}
              >
                {/* {isLoading ? "Minting..." : "Mint"} */}Mint
              </CustomButton>
            </Grid>

            <Grid container item md={8} sm={12} spacing={2}>
              <Grid item md={6} sm={12}>
                <TextField
                  id="select-collection"
                  select
                  size="small"
                  label="Collections"
                  variant="filled"
                  value={collection}
                  onChange={handleChangeCollection}
                  fullWidth
                  sx={inputStyle}
                >
                  {ownedCollections.map((option) => (
                    <MenuItem
                      key={option._id}
                      value={option.name}
                      onClick={() => {
                        setCollection(option.value);
                      }}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} sm={12}>
                <TextField
                  size="small"
                  label="Name"
                  variant="filled"
                  value={nftName}
                  onChange={(e) => setNftName(e.target.value)}
                  fullWidth
                  required
                  sx={inputStyle}
                />
              </Grid>
              <Grid item md={12} sm={12} mb={1}>
                <TextField
                  size="small"
                  label="Description"
                  variant="filled"
                  value={nftDescription}
                  onChange={(e) => setNftDescription(e.target.value)}
                  fullWidth
                  multiline
                  rows={metadata.length <= 4 ? 10 : 6}
                  sx={inputStyle}
                />
              </Grid>
              {metadata.map(
                (ft, i) =>
                  ft && (
                    <Grid item md={6} sm={12} key={i}>
                      <InputLabel htmlFor={"f-" + ft.trait_type}>
                        <Typography variant="subtitle2" color="#fefefe">
                          {ft.trait_type}
                        </Typography>
                      </InputLabel>
                      <FilledInput
                        name={"f-" + ft.trait_type}
                        size="small"
                        label={ft.trait_type}
                        variant="filled"
                        value={ft.value}
                        onChange={onFeatureChange(i)}
                        fullWidth
                        sx={{
                          backgroundColor: "#fefefe",
                          borderRadius: 1,
                          "&:hover": {
                            backgroundColor: "#fefefe",
                          },
                          "&.Mui-focused": {
                            backgroundColor: "#fefefe",
                          },
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            |
                            <Tooltip title="Add new feature">
                              <IconButton
                                onClick={() => {
                                  console.log("clear item");
                                  onClickClearItem(i);
                                }}
                                edge="end"
                              >
                                <DeleteRounded sx={{ color: "#DF2323" }} />
                              </IconButton>
                            </Tooltip>
                          </InputAdornment>
                        }
                      />
                    </Grid>
                  )
              )}
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            padding: "18px 20px",
            backgroundColor: "#444444",
            borderRadius: "10px",
            color: "#fefefe",
          }}
        >
          <Typography>
            Lưu ý:
            <br /> Phí giao dịch là 100 ESDC cho một NFT.
            <br /> Nếu được duyệt, NFT sẽ được gửi vào bộ sưu tập của bạn. Ngược
            lại sàn sẽ hoàn lại cho bạn 97% phí giao dịch.
          </Typography>
        </Paper>
      </Stack>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={10000}
        onClose={handleCloseSnackBar}
        message={snackBarMessage}
      />
    </Container>
  );
};

export default Mint;
