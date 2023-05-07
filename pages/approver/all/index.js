import { Box, Container, Typography, styled, Button } from "@mui/material";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import RenderTable from "../../../components/Table/RenderTable";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { showShortAddress } from "../../../lib/utils/common";
import Link from "next/link";
import ImageCustom from "../../../components/Image/ImageCustom";

const WaitingNFT = (props) => {
  // const { transactions } = props;
  const { userAddress, isAuthenticated } = useContext(AuthContext);

  const [search, setSearch] = useState({ page: 0 });

  const params = useMemo(
    () => ({ page: search.page, page_size: 10 }),
    [search]
  );

  const columns = useMemo(
    () => [
      {
        headerName: "Token ID",
        field: "tokenId",
        width: 150,
        // renderCell: ({ row }) => (
        //   <Link
        //     className="MuiDataGrid-cellContent hover:underline"
        //     href={`https://testnet.bscscan.com/tx/${row.hash}`}
        //   >
        //     {showShortAddress(row.hash)}
        //   </Link>
        // ),
      },
      {
        headerName: "Name",
        field: "name",
        // valueGetter: ({ row }) => new Date(row.createdAt).toLocaleString(),
        // editable: true,
        flex: 1,
        minWidth: 100,
      },
      {
        headerName: "Ảnh nền",
        field: "backgroundUrl",
        width: 210,
        renderCell: ({ row }) => (
          <ImageCustom
            sx={{
              aspectRatio: "16/9",
              p: 1,
              width: "100%",
              objectFit: "cover",
            }}
            src={row.image}
          />
        ),
      },
      {
        headerName: "Price",
        field: "price",
        // valueGetter: ({ row }) => new Date(row.createdAt).toLocaleString(),
        // editable: true,
        flex: 1,
        minWidth: 80,
      },
      {
        headerName: "Owner",
        field: "owner",
        renderCell: ({ row }) => (
          <Link
            className="MuiDataGrid-cellContent hover:underline"
            href={`https://testnet.bscscan.com/address/${row.owner}`}
          >
            {showShortAddress(row.owner)}
          </Link>
        ),
        flex: 1,
        minWidth: 100,
      },
      {
        headerName: "Action",
        field: "action",
        width: 250,
        renderCell: (params) => {
          <Box>
            <Button variant="outlined">Approve</Button>
          </Box>;
        },
      },
    ],
    []
  );

  const getData = useCallback(async () => {
    const { data, total } = await new Promise(async (resolve, reject) => {
      await axios
        .post(
          "http://localhost:3000/api/assets/getUnapprovedAsset",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error));
    });
    console.log({ data: data, totalRows: total });
    return { data: data, totalRows: total };
  }, []);

  return (
    <Container>
      {isAuthenticated && (
        <Box>
          <Typography variant="h4" className="mb-4">
            Waiting for approve
          </Typography>
          <Box sx={{ height: 700, backgroundColor: "#3e3e3e" }} display="flex">
            <RenderTable
              params={params}
              columns={columns}
              rowIdField="_id"
              rowHeight={100}
              rowsPerPageOptions={[10, 25, 50]}
              getData={getData}
            />
          </Box>
        </Box>
      )}
      {!isAuthenticated && <Box>Please connect wallet</Box>}
    </Container>
  );
};

export default WaitingNFT;
