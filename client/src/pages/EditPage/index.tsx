import { Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import VehicleForm from "../../components/VehicleForm";

import { api } from "../../services/api";

import { Vehicle } from "../../@types/vehicle";

import { ICreateVehicleDto } from "../../services/dto/create-vehicle.dto";
import { useState, useEffect } from "react";

export const EditPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [car, setCar] = useState<Vehicle>();
  const [loading, setLoading] = useState(true);

  const handleGetValues = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/vehicle/${id}`);
      let [dataObj] = data;
      setCar(dataObj);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    handleGetValues();
  }, [loading]);

  const initialValues = {
    name: car?.name,
    image: car?.image,
    brand: car?.brand,
    year: car?.year,
    sold: car?.sold,
    description: car?.description,
  };

  const onSubmit = async (values: ICreateVehicleDto) => {
    try {
      await api.patch(`/vehicle/${car?.id}`, {
        name: values.name,
        image: values.image,
        brand: values.brand,
        year: values.year,
        description: values.description,
        sold: values.sold,
      });

      navigate(`../carView/${car?.id}`);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        padding: "1vw",
        gap: 5,
      }}
    >
      <Header />
      {!loading ? (
        <VehicleForm
          defaultValues={initialValues}
          title="edit vehicle"
          onSubmit={onSubmit}
          onCancel={() => navigate(-1)}
          flag={true}
        />
      ) : (
        ""
      )}
    </Container>
  );
};
