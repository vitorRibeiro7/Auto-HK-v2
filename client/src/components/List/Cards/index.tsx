import { Typography, Card, CardMedia, Box } from "@mui/material";
import { Vehicle } from "../../../@types/vehicle";


interface CardProps {
  vehicle: Vehicle
}

export const Cards = ({vehicle}: CardProps) => {

  return (
    <Card sx={{
      width: "100%",
      minWidth: "200px",
      height: "100%",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
    }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960"
        title="green iguana"
      />
      <Box sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: "10px"
      }}>
        <Box sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column"
        }}>
          <Box>
            <Typography variant="h6" style={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 900,
            }}>
              {vehicle.name}
              </Typography>
            <Typography variant="subtitle1"style={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 400,
            }}>
              {vehicle.description}
            </Typography>
            <Typography variant="overline"style={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 300,
            }}>
              {vehicle.year}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2"style={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 400,
              color: vehicle.sold ? "red" : "green",
            }}>
              {vehicle.sold ? "Vendido" : "Disponivel"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};