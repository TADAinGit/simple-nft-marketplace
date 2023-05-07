import { Box } from "@mui/material";
import { forwardRef } from "react";

const ImageCustom = forwardRef((props, ref) => (
  <Box ref={ref} component="img" {...props} />
));

export default ImageCustom;
