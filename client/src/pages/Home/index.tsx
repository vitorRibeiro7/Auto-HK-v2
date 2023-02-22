import {  Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "../../index.css";

export const Home = () => {

    return (
        <Box sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "4vw"
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}>
              <Typography variant="h3" style={{ 
                background:
                "linear-gradient(to right, rgb(0, 127, 255), rgb(0, 89, 178))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 800,
              }}>
              Car Control 
              </Typography>
              <Typography
                style={{
                  color: "#151515",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 500,
              }}>
                 is the best car system from this localhost :v
              </Typography>
            </Box>
            <Box>
              <Button variant="contained" size="large" endIcon={<ArrowForwardIosIcon/>} style={{
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 500,
                width: "auto"
              }}>
                Get started
              </Button>
            </Box>
          </Box>
        </Box>
    );
};   