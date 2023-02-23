import {  Box  } from "@mui/material";

import { List } from "../../components/List";

import { api } from "../../services/api";

import { useState, useEffect } from "react";

import { Vehicle } from "../../@types/vehicle";

import "../../index.css";

export const Listing = () => {

    const [vehicleOject, setVehicleObject] = useState<Vehicle[]>([]);

    const getVehicles = async () => {
        try {
          const { data } = await api.get("/vehicle");
          console.log(data);
          setVehicleObject(data);
        } catch (error) {
          console.log(error);
        }
    };
  
    useEffect(() => {
        getVehicles();
    }, []);


    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            padding: "2vw",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center"
        }}>
            <List vehicleDetails={vehicleOject}/>
        </Box>
    );
};   