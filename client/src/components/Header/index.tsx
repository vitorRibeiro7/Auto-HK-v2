import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "8px",
        margin: "auto",
        padding: "10px 50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#ffffff",
        boxShadow: "5px 5px 20px #dedede,  -5px -5px 20px #ffffff",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          background: "linear-gradient(to right, #007fff, rgb(0, 89, 178))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 900,
        }}
      >
        AutoHK
      </Typography>
      <GitHubIcon
        fontSize="large"
        sx={{
          color: "#007fff",
          cursor: "pointer",
        }}
      />
    </Box>
  );
};

export default Header;
