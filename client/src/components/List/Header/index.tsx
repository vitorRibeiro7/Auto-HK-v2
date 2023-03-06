import { Box, TextField, Typography, Button, Divider } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useEffect, useState } from 'react';

export const ListHeader = ({ search }: any) => {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        search(inputValue);
    }, [inputValue]);

    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                padding: '1vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button
                    variant="contained"
                    size="large"
                    endIcon={<AddCircleOutlineIcon />}
                    sx={{
                        width: '100%',
                        fontFamily: 'Plus Jakarta Sans',
                        fontWeight: 500,
                        background: 'linear-gradient(to right, rgb(0, 127, 255), rgb(0, 89, 178))',
                    }}
                    onClick={() => navigate('../create')}
                >
                    Add new
                </Button>
            </Box>
            <Box
                sx={{
                    width: '100%',
                }}
            >
                <Divider>
                    <Typography
                        variant="overline"
                        sx={{
                            fontWeight: '400',
                            opacity: '0.5',
                        }}
                    >
                        or
                    </Typography>
                </Divider>
            </Box>
            <Typography
                variant="overline"
                sx={{
                    fontWeight: '400',
                    opacity: '0.8',
                }}
            >
                find your vehicles:
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    alignItems: 'end',
                    gridTemplateColumns: 'auto',
                    columnGap: '20px',
                }}
            >
                <TextField
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label="Name or Brand"
                    variant="filled"
                />
            </Box>
        </Box>
    );
};
