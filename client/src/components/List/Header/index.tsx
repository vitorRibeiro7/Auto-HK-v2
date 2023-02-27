import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

import { useEffect, useState } from "react";

export const ListHeader = ({ search }: any) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    search(inputValue);
  }, [inputValue]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          padding: "1vw",
          borderRadius: "10px 10px 0px 0px",
          borderBottom: "2px solid #e7e7e7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "auto",
            gridTemplateRows: "1fr",
            columnGap: "20px",
          }}
        >
          <TextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            label="What are you looking for?"
            variant="standard"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};
