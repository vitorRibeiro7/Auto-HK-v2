import { Box } from "@mui/material";
import DrawerMUI from "../../components/DrawerMUI";

import { List } from "../../components/List";
import { ListHeader } from "../../components/List/Header";

import { api } from "../../services/api";

import { useState, useEffect } from "react";

import { Vehicle } from "../../@types/vehicle";

import "../../index.css";

export const Listing = () => {
  const [vehicleOject, setVehicleObject] = useState<Vehicle[]>([]);
  const [listLoadingFlag, setListLoadingFlag] = useState(true);

  const getVehicles = async () => {
    try {
      setListLoadingFlag(true);
      const { data } = await api.get("/vehicle");
      console.log(data);
      setVehicleObject(data);
      setListLoadingFlag(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <DrawerMUI />
      <Box
        sx={{
          width: "100%",
          height: "98%",
          padding: "1vw",
        }}
      >
        <ListHeader />
        <List vehicleDetails={vehicleOject} loading={listLoadingFlag} />
      </Box>
    </Box>
  );
};
