import { Vehicle } from "../../@types/vehicle";

import { Grid, Paper, Typography, Box } from "@mui/material";

import { Cards } from "./Cards";

interface listProps {
    vehicleDetails: Vehicle[],
    loading: boolean
}

export const List = ({vehicleDetails, loading}: listProps) =>{
   
    return(
        <Paper sx={{
            width: "auto",
            height: "98%",
            minHeight: "80vh",
            padding: "1vw",
        }} elevation={3}>
            {
                !loading ? 
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <Typography variant="overline" style={{
                        marginBottom: "15px",
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 300
                    }}>Vehicles found: {vehicleDetails.length} </Typography>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}>
                    {vehicleDetails.map((vehicle, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                        <Cards key={vehicle.id} vehicle={vehicle}/>
                    </Grid>
                    ))}
                    </Grid>
                </Box>
            : "Carregando dados."
            }
        </Paper>
    );
};