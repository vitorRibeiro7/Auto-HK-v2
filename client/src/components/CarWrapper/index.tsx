import { Typography, Card, CardMedia, Box, Button, cardActionAreaClasses } from '@mui/material';
import { Vehicle } from '../../@types/vehicle';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useNavigate } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import DeleteModal from '../DeleteModal';

import { useState } from 'react';

interface CardProps {
    vehicle: Vehicle;
}

export const CarWrapper = ({ vehicle, loading, error }: any) => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card
            sx={{
                width: '100%',
                height: '450px',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'row',
                border: '1px solid #dddddd',
                alignItems: !error ? (!loading ? 'none' : 'center') : 'center',
                justifyContent: !error ? (!loading ? 'none' : 'center') : 'center',
            }}
        >
            <DeleteModal open={open} onClose={handleClose} id={vehicle?.id} />

            {!error ? (
                !loading ? (
                    <>
                        <CardMedia
                            sx={{ width: '50%' }}
                            image={vehicle?.image}
                            title={`image of ${vehicle?.name}`}
                        />
                        <Box
                            sx={{
                                width: '50%',
                                height: 'auto',
                                display: 'flex',
                                padding: '10px',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontWeight: 300,
                                        }}
                                    >
                                        {vehicle?.brand}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontWeight: 900,
                                        }}
                                    >
                                        {vehicle?.name}
                                    </Typography>
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontWeight: 300,
                                        }}
                                    >
                                        {vehicle?.year}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {vehicle?.description}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontWeight: 400,
                                            color: vehicle?.sold ? 'red' : 'green',
                                        }}
                                    >
                                        {vehicle?.sold ? 'Sold' : 'Available'}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 2,
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            startIcon={<EditIcon />}
                                            onClick={() => navigate(`../../edit/${vehicle?.id}`)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            startIcon={<DeleteIcon />}
                                            onClick={handleOpen}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </>
                ) : (
                    <Box sx={{ width: '70%' }}>
                        <LinearProgress />
                    </Box>
                )
            ) : (
                <Box sx={{ width: '70%' }}>
                    <Typography
                        variant="subtitle1"
                        color="#868686"
                        align="center"
                        sx={{
                            fontFamily: 'Plus Jakarta Sans',
                            fontWeight: 400,
                        }}
                    >
                        Error fetching information about this vehicle
                    </Typography>
                </Box>
            )}
        </Card>
    );
};
