import { Box, Container, Typography, styled } from "@mui/material";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import RenderTable from "../../components/Table/RenderTable";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { showShortAddress } from "../../lib/utils/common";
import Link from "next/link";

const TransactionHistory = (props) => {
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
        headerName: "Hash",
        field: "hash",
        width: 150,
        renderCell: ({ row }) => (
          <Link
            className="MuiDataGrid-cellContent hover:underline"
            href={`https://testnet.bscscan.com/tx/${row.hash}`}
          >
            {showShortAddress(row.hash)}
          </Link>
        ),
      },
      {
        headerName: "Create at",
        field: "createdAt",
        valueGetter: ({ row }) => new Date(row.createdAt).toLocaleString(),
        // editable: true,
        flex: 1,
        minWidth: 100,
      },
      {
        headerName: "From address",
        field: "from",
        renderCell: ({ row }) => (
          <Link
            className="MuiDataGrid-cellContent hover:underline"
            href={`https://testnet.bscscan.com/address/${row.from}`}
          >
            {showShortAddress(row.from)}
          </Link>
        ),
        flex: 1,
        minWidth: 120,
      },
      {
        headerName: "To address",
        field: "to",
        renderCell: ({ row }) => (
          <Link
            className="MuiDataGrid-cellContent hover:underline"
            href={`https://testnet.bscscan.com/address/${row.to}`}
          >
            {showShortAddress(row.from)}
          </Link>
        ),
        flex: 1,
        minWidth: 120,
      },
      {
        headerName: "Value",
        field: "value",
        valueGetter: ({ row }) => row.value || "(Trống)",
        flex: 1,
        minWidth: 120,
      },
      {
        headerName: "Content",
        field: "content",
        width: 250,
        valueGetter: ({ row }) => row.content || "(Trống)",
      },
    ],
    []
  );

  const getData = useCallback(async () => {
    const { data, total } = await new Promise(async (resolve, reject) => {
      await axios
        .post(
          "api/transactions/getOwnTransaction",
          { owner: userAddress },
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
  }, [userAddress]);

  return (
    <Container>
      {isAuthenticated && (
        <Box>
          <Typography variant="h4" className="mb-4">
            Transaction history
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

// export async function getServerSideProps(context) {
//   const response = await axios.post(
//     "api/transactions/getOwnTransaction",
//     {},
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   return {
//     props: {
//       // Return the native balance formatted in ether via the .ether getter
//       transactions:
//         /*JSON.stringify(transactionHistories.result)*/ response.data,
//     },
//   };
// }
export default TransactionHistory;
