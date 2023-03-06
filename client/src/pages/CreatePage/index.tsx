import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import VehicleForm from '../../components/VehicleForm';

import { api } from '../../services/api';

import { useForm, FieldValues } from 'react-hook-form';

import { ICreateVehicleDto } from '../../services/dto/create-vehicle.dto';

export const CreatePage = () => {
    const navigate = useNavigate();

    const { handleSubmit } = useForm();

    const initialValues = {
        name: '',
        image: '',
        brand: '',
        year: 1980,
        sold: false,
        description: '',
    };

    // const initialValues = {
    //   name: "",
    //   image:
    //     "https://cdn.autopapo.com.br/box/uploads/2021/12/16011639/chevrolet-vectra-cd-cinza-de-frente-732x488.jpg",
    //   brand: "Chevrolet",
    //   sold: false,
    //   year: 1998,
    //   description: "asdfghjkadadaddad",
    // };

    const onSubmit = async (values: ICreateVehicleDto) => {
        try {
            await api.post('/vehicle', {
                name: values.name,
                image: values.image,
                brand: values.brand,
                year: values.year,
                description: values.description,
                sold: values.sold,
            });

            navigate('../home');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container
            sx={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                padding: '1vw',
                gap: 5,
            }}
        >
            <Header />
            <VehicleForm
                defaultValues={initialValues}
                title="register a new vehicle"
                onSubmit={onSubmit}
                onCancel={() => navigate(-1)}
                flag={false}
            />
        </Container>
    );
};
