import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BackButton = ({ toGo }: any) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(toGo)} startIcon={<ArrowBackIcon />}>
      <Typography variant="button">return</Typography>
    </Button>
  );
};
