import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BackButton = ({ toGo }: any) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(toGo)}
      startIcon={<ArrowBackIcon />}
      sx={{
        marginTop: "10px",
        color: "#7c7c7c",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 500,
        }}
      >
        RETURN
      </Typography>
    </Button>
  );
};
