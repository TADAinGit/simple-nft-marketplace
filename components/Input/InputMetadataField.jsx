import { styled, TextField } from "@mui/material";

const InputField = styled(TextField)({
  backgroundColor: "white",
  borderWidth: "3px",
  borderRadius: 5,
  "& .MuiInputLabel-root": {
    color: "#141414",
  },
  "& .MuiFormLabel-filled": {
    display: "none",
  },
  "&:hover .MuiInputLabel-root": {
    color: "#141414",
    fontWeight: "bold",
    display: "block",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#141414",
    fontWeight: "bold",
    display: "block",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      borderWidth: "0px",

      // color: "#141414",
      fontWeight: "bold",
    },
    "&:hover fieldset": {
      borderColor: "#141414",
      color: "#141414",
      borderWidth: "3px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#141414",
      borderWidth: "3px",
    },
    "&.Mui-focused .MuiOutlinedInput-input": {
      color: "#1DD05D",
      fontWeight: "bold",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "#1DD05D",
    fontWeight: "bold",
    "&:hover": {
      color: "#1DD05D",
      fontWeight: "bold",
    },
  },
});
