import { Box } from "@mui/material";
import { BackButton } from "../../components/BackButton";

import { List } from "../../components/List";

import "../../index.css";

export const Listing = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        padding: "1vw",
      }}
    >
      <Box
        sx={{
          mb: "10px",
        }}
      >
        <BackButton toGo="/" />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "98%",
        }}
      >
        <List />
      </Box>
    </Box>
  );
};
