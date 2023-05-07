import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

const imageMimeType = /image\/(png|jpg|jpeg|gif)/i;

const CustomButton = styled(Button)(({ theme }) => ({
  color: "#141414",
  backgroundColor: "#ffffff !important",
  borderRadius: 0,
  borderRadius: "5px",
  fontWeight: 500,
  "&:hover": {
    color: "#1985FF",
  },
}));

const ImageInput = ({ background, setBackground }) => {
  // const theme = useTheme();
  const bgRef = useRef(null);

  const [fileDataURL, setFileDataURL] = useState(background);
  const [file, setFile] = useState(null);

  const changeBgHandler = (e) => {
    const file = e.target.files[0];
    if (!file?.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    // console.log(file);
    setFile(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    let uploadTask;
    if (file) {
      setBackground("");
      // show file in background
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);

      // upload file
      // uploadTask = new Upload("course-bg", file, (res) => {
      setBackground(file);
      //   setFileDataURL(res);
      // });
      // uploadTask.start();
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
      uploadTask?.stop();
    };
  }, [file, setBackground]);

  useEffect(() => {
    if (!background) {
      setFileDataURL();
    } else {
      setFileDataURL(background);
    }
  }, [background]);

  return (
    <Stack justifyContent="center" alignItems="center">
      <Paper
        sx={{
          width: "300px",
          height: "300px",
          position: "relative",
          bgcolor: "gray",
          borderRadius: "10px",
          ...(fileDataURL && { backgroundImage: `url(${fileDataURL})` }),
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <input
          type="file"
          hidden
          ref={bgRef}
          accept=".png, .jpg, .jpeg, .gif"
          onChange={changeBgHandler}
          onClick={(e) => {
            e.target.value = null;
          }}
        />

        <CustomButton
          className="hover:shadow-lg"
          sx={{ margin: "5px" }}
          onClick={() => bgRef.current.click()}
        >
          <Typography variant="subtitle2">{file ? "Change" : "Add"}</Typography>
        </CustomButton>
        {(file || background) && (
          <CustomButton
            className="hover:shadow-lg"
            onClick={() => {
              setFile();
              setBackground("");
            }}
          >
            <Delete color="error" />
          </CustomButton>
        )}
      </Paper>
    </Stack>
  );
};

export default ImageInput;
