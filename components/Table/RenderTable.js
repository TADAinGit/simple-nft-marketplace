import { Alert, Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";

function RenderTable(props) {
  const {
    width,
    height,
    onSelection,
    params,
    rowIdField,
    getData,
    columns,
    paginationMode = "client",
    rowsPerPageOptions = [15, 25, 50],
    ...others
  } = props;
  const [selected, setSelected] = useState([]);
  const [searchParams, setSearchParams] = useState(params);
  const [totalRows, setTotalRows] = useState(0);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setSearchParams(params);
  }, [params]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data, totalRows } = await getData(searchParams);
        setTotalRows(totalRows);
        setRows(data);
        setError("");
      } catch (error) {
        setTotalRows(0);
        setRows([]);
        setError(
          error.response?.data?.message ||
            error.response?.data ||
            error.message ||
            error
        );
      }
    };
    fetch();
  }, [getData, searchParams]);

  useEffect(() => {
    onSelection && onSelection(selected);
  }, [onSelection, selected]);

  return (
    <Box width={width} flexGrow={1} height={height}>
      <DataGrid
        {...others}
        columns={columns || []}
        rows={rows}
        {...(onSelection && {
          checkboxSelection: true,
          selectionModel: selected,
          onSelectionModelChange: (selectRange) =>
            setSelected([...selectRange]),
        })}
        sx={{
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outlineOffset: -2,
            },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#fefefe",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-cellContent": {
            color: "#E7E7E7",
          },
          "& .MuiTablePagination-toolbar": {
            color: "#E7E7E7",
          },
        }}
        page={searchParams.page}
        onPageChange={(value) => {
          setSearchParams({ ...searchParams, page: value });
        }}
        components={{
          NoRowsOverlay: () => (
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            >
              {error ? (
                <Alert severity="error"> {error}</Alert>
              ) : (
                <Alert severity="warning">
                  Không có dữ liệu - Vui lòng thử lại sau!!
                </Alert>
              )}
            </Stack>
          ),
        }}
        componentsProps={{
          baseSelect: { sx: { "& .MuiInput-input": { height: 40 } } },
          baseTextField: { sx: { "& .MuiInput-input": { height: 40 } } },
        }}
        paginationMode={paginationMode}
        pageSize={searchParams.page_size}
        onPageSizeChange={(page_size) =>
          setSearchParams({ ...searchParams, page_size: page_size })
        }
        rowsPerPageOptions={rowsPerPageOptions}
        rowCount={totalRows}
        getRowId={(row) => {
          if (row[rowIdField]) return row[rowIdField];
          return row.id ? row.id : row[Object.keys(row)[0]];
        }}
      />
    </Box>
  );
}

RenderTable.propTypes = {
  width: PropTypes.any,
  height: PropTypes.any,
  onSelection: PropTypes.func,
  params: PropTypes.shape({
    page: PropTypes.number.isRequired,
    page_size: PropTypes.number.isRequired,
  }),
  paginationMode: PropTypes.oneOf(["server", "client"]),
  rowIdField: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  rowsPerPageOptions: PropTypes.array,
};

export default RenderTable;
