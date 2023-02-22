import {  Box, Typography, Button } from "@mui/material";

import Image from "../../assets/images/homeBackground.svg";

import { Header } from "../../components/Header";

import "../../index.css";

export const Listing = () => {


    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            padding: "4vw",
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center"
        }}>
            <Header/>
        </Box>
    );
};   