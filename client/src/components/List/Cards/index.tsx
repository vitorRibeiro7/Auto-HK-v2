import { Typography, Card, CardMedia, Box } from "@mui/material";
import { Vehicle } from "../../../@types/vehicle";

interface CardProps {
  vehicle: Vehicle;
}

export const Cards = ({ vehicle }: CardProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        minWidth: "200px",
        minHeight: "100px",
        height: "100%",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onClick={() => console.log(vehicle)}
    >
      <CardMedia
        sx={{ height: "180px" }}
        image="https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwY2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        title="some car image"
      />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="subtitle2"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 300,
              }}
            >
              {vehicle.brand}
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 900,
              }}
            >
              {vehicle.name}
            </Typography>
            <Typography
              variant="overline"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 300,
              }}
            >
              {vehicle.year}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 400,
                color: vehicle.sold ? "red" : "green",
              }}
            >
              {vehicle.sold ? "Sold" : "Available"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
