import { Box, Container } from '@mui/material';
import { BackButton } from '../../components/BackButton';

import Header from '../../components/Header';

import { List } from '../../components/List';

import '../../index.css';

export const ListPage = () => {
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
                <BackButton toGo="/" />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: '98%',
                }}
            >
                <List />
            </Box>
        </Container>
    );
};
