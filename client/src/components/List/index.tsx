import { Vehicle } from "../../@types/vehicle";
import { ListHeader } from "./Header";

import { api } from "../../services/api";

import { useState, useEffect } from "react";

import { Grid, Paper, Typography, Box } from "@mui/material";

import { Cards } from "./Cards";

export const List = () => {
  const [vehicleOject, setVehicleObject] = useState<Vehicle[]>([]);
  const [listLoadingFlag, setListLoadingFlag] = useState(true);
  const [currentSearch, setCurrentSearch] = useState("");

  const getVehicles = async (nameOrBrand: string) => {
    try {
      setListLoadingFlag(true);
      const { data } = await api.get(`/vehicle/find?q=${nameOrBrand}`);
      console.log(data);
      setVehicleObject(data);
      setListLoadingFlag(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (toSearch: string) => {
    setCurrentSearch(toSearch);
  };

  useEffect(() => {
    getVehicles(currentSearch);
  }, [currentSearch]);

  return (
    <Box
      sx={{
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "5px 5px 20px #dedede,  -5px -5px 20px #ffffff",
      }}
    >
      <ListHeader search={handleSearch} />
      <Box
        sx={{
          width: "auto",
          height: "98%",
          minHeight: "80vh",
          padding: "1vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="overline"
            style={{
              marginBottom: "15px",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 300,
            }}
          >
            Vehicles found: {vehicleOject.length}{" "}
          </Typography>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}
          >
            {vehicleOject.map((vehicle, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Cards key={vehicle.id} vehicle={vehicle} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
