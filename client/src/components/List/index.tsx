import { Vehicle } from "../../@types/vehicle";
import { ListHeader } from "./Header";

import { api } from "../../services/api";

import { useState, useEffect } from "react";

import { Grid, Typography, Box, Divider } from "@mui/material";

import { Cards } from "./Cards";

import { LinearProgress } from "@mui/material";

export const List = () => {
  const [vehicleOject, setVehicleObject] = useState<Vehicle[]>([]);
  const [currentSearch, setCurrentSearch] = useState("");

  const getVehicles = async (nameOrBrand: string) => {
    try {
      const { data } = await api.get(`/vehicle/find?q=${nameOrBrand}`);
      console.log(data);
      setVehicleObject(data);
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
        border: "1px solid #dddddd",
      }}
    >
      <ListHeader search={handleSearch} />
      <Box
        sx={{
          width: "auto",
          height: "98%",
          minHeight: "40vh",
          padding: "1vw",
        }}
      >
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: vehicleOject.length > 0 ? "auto" : "300px",
            alignItems: vehicleOject.length > 0 ? "none" : "center",
            justifyContent: vehicleOject.length > 0 ? "none" : "center",
          }}
        >
          {vehicleOject.length > 0 ? (
            <>
              <Typography
                variant="overline"
                sx={{
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
            </>
          ) : (
            <Box sx={{ width: "70%" }}>
              <LinearProgress />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
