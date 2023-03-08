import { Box, Typography, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useQuery } from 'react-query'; // Importa o useQuery

import Header from '../../components/Header';
import { BackButton } from '../../components/BackButton';

import { Vehicle } from '../../@types/vehicle';
import { CarWrapper } from '../../components/CarWrapper';

export const CarViewPage = () => {
    const [car, setCar] = useState<Vehicle>();
    const { id } = useParams();

    const { isLoading, error, data } = useQuery('car', async () => {
        // Envolve a chamada da API com useQuery
        const { data } = await api.get(`/vehicle/${id}`);
        let [dataObj] = data;
        return dataObj;
    });

    useEffect(() => {
        if (data) {
            setCar(data);
        }
    }, [data]);

    return (
        <Container
            sx={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                padding: '1vw',
            }}
        >
            <Header />
            <Box
                sx={{
                    mb: '10px',
                }}
            >
                <BackButton toGo={'/home'} />
            </Box>
            <Box>
                <CarWrapper vehicle={car} loading={isLoading} error={error} />
            </Box>
        </Container>
    );
};
