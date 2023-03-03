import { Box, Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import Header from "../../components/Header";
import { BackButton } from "../../components/BackButton";

import { Vehicle } from "../../@types/vehicle";
import { CarWrapper } from "../../components/CarWrapper";

const CarViewPage = () => {
  const [car, setCar] = useState<Vehicle>();

  const { id } = useParams();

  const handleGetCarById = async () => {
    try {
      const { data } = await api.get(`/vehicle/${id}`);
      let [dataObj] = data;
      setCar(dataObj);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetCarById();
  }, []);

  return (
    <Container
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        padding: "1vw",
      }}
    >
      <Header />
      <Box
        sx={{
          mb: "10px",
        }}
      >
        <BackButton toGo={"/home"} />
      </Box>
      <Box>
        <CarWrapper vehicle={car} />
      </Box>
    </Container>
  );
};

export default CarViewPage;
