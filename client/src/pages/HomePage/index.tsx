import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useNavigate } from 'react-router-dom';

import Image from '../../assets/images/homeBackground.svg';

import CountUp from 'react-countup';

import '../../index.css';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';

export const HomePage = () => {
    const navigate = useNavigate();

    const [count, setCount] = useState(0);

    const getCount = async () => {
        try {
            const { data } = await api.get('/vehicle/count');
            setCount(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCount();
    }, []);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '4vw',
                backgroundImage: `url(${Image})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '50vw',
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            background: 'linear-gradient(to right, #007fff, rgb(0, 89, 178))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Plus Jakarta Sans',
                            fontWeight: 900,
                        }}
                    >
                        AutoHK
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#f7f7f7',
                            fontFamily: 'Plus Jakarta Sans',
                            fontWeight: 300,
                        }}
                    >
                        is the best car system from this localhost :v
                    </Typography>
                    <Box></Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        padding: '5px',
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIosIcon />}
                        sx={{
                            fontFamily: 'Plus Jakarta Sans',
                            fontWeight: 500,
                            width: 'auto',
                            background:
                                'linear-gradient(to right, rgb(0, 127, 255), rgb(0, 89, 178))',
                        }}
                        onClick={() => navigate('/home')}
                    >
                        lets try on
                    </Button>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '1.5vw',
                            mr: '3vw',
                            ml: '3vw',
                        }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                color: '#f7f7f7',
                                fontFamily: 'Plus Jakarta Sans',
                                fontWeight: 300,
                                textAlign: 'end',
                            }}
                        >
                            Count:
                        </Typography>
                        <Typography
                            variant="overline"
                            sx={{
                                color: '#f7f7f7',
                                fontFamily: 'Plus Jakarta Sans',
                                fontWeight: 300,
                                textAlign: 'end',
                            }}
                        >
                            <CountUp start={0} end={count} duration={1.3} />
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
