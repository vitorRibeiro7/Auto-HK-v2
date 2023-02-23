import { Vehicle } from "../../@types/vehicle";

import { Grid, Paper } from "@mui/material";

import { Cards } from "./Cards";

interface listProps {
    vehicleDetails: Vehicle[]
}

export const List = ({vehicleDetails}: listProps) =>{
   
    return(
        <Paper sx={{
            width: "95vw",
            height: "98%",
            padding: "1vw",
        }} elevation={3}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}>
            {vehicleDetails.map((vehicle, index) => (
                <Grid item xs={6} sm={6} md={4} lg={3} key={index} >
                    <Cards key={vehicle.id} vehicle={vehicle}/>
                </Grid>
                ))}
            </Grid>
        </Paper>
    );
};