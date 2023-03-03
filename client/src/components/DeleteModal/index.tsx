import { Box, Typography, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  id: number | string;
}

const DeleteModal = ({ open, onClose, id }: ModalProps) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await api.delete(`vehicle/${id}`);
      navigate("../home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#f7f7f7",
          zIndex: 100,
          width: "400px",
          height: "auto",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          borderRadius: "12px",
        }}
      >
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Are you sure you want to delete?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button variant="contained" onClick={handleDelete}>
            Confirm
          </Button>
          <Button variant="contained" color="error" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
