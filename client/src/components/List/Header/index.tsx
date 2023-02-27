import { Box, TextField, Typography, Button, Divider } from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useEffect, useState } from "react";

export const ListHeader = ({ search }: any) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    search(inputValue);
  }, [inputValue]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        padding: "1vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          style={{
            background: "linear-gradient(to right, #007fff, rgb(0, 89, 178))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 900,
          }}
        >
          Auto HK
        </Typography>
        <Box>
          <Button
            variant="contained"
            size="large"
            endIcon={<AddCircleOutlineIcon />}
            style={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 500,
              width: "auto",
              background:
                "linear-gradient(to right, rgb(0, 127, 255), rgb(0, 89, 178))",
            }}
          >
            Add new
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Divider>
          <Typography
            variant="subtitle2"
            style={{
              fontWeight: "400",
              opacity: "0.4",
            }}
          >
            or
          </Typography>
        </Divider>
      </Box>
      <Typography
        variant="overline"
        style={{
          fontWeight: "400",
          opacity: "0.8",
        }}
      >
        find yours vehicles:
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          alignItems: "end",
          gridTemplateColumns: "auto",
          columnGap: "20px",
        }}
      >
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          label="Name or Brand"
          variant="filled"
          focused
        />
      </Box>
    </Box>
  );
};
