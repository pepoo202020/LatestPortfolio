import { TextField } from "@mui/material";
import React from "react";

const CateNew = ({ categoryName, onChange, label }) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      fullWidth
      variant="outlined"
      name="categoryName"
      value={categoryName}
      onChange={onChange}
    />
  );
};

export default CateNew;
