import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import VehicleForm from "../../components/VehicleForm";

import { api } from "../../services/api";

interface valuesType {
  name: string;
  brand: string;
  image: string;
  year: number;
  description: string;
  sold: boolean;
}

export const CreatePage = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    image: "",
    brand: "",
    sold: false,
    year: 1998,
    description: "",
  };

  const handleCreate = async (values: valuesType) => {
    console.log(values);

    try {
      await api.post("/vehicle", {
        name: values.name,
        image: values.image,
        brand: values.brand,
        year: values.year,
        description: values.description,
        sold: values.sold,
      });

      navigate("../home");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(data: valuesType) {
    console.log(data);
    handleCreate(data);
  }

  return (
    <Container
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        padding: "1vw",
        gap: 5,
      }}
    >
      <Header />
      <VehicleForm
        initialValues={initialValues}
        title="register a new vehicle"
        onSubmit={handleSubmit}
        onCancel={() => navigate("../home")}
        flag={false}
      />
    </Container>
  );
};
