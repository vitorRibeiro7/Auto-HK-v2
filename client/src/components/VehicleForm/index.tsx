import {
  Box,
  TextField,
  Paper,
  Button,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import * as Yup from "yup";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
interface VehicleFormProps {
  title: String;
  initialValues: any;
  onSubmit: any;
  onCancel: () => void;
  flag: boolean;
}

const VehicleSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  image: Yup.string(),
  brand: Yup.string().required("This field is required"),
  year: Yup.number()
    .min(1980, "Need to be greater than 1980")
    .max(2024, "Need to bem less than 2025")
    .required("This field is required"),
  sold: Yup.boolean(),
  description: Yup.string().required("This field is required"),
});

const VehicleForm = ({
  title,
  initialValues,
  onSubmit,
  onCancel,
  flag,
}: VehicleFormProps) => {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(VehicleSchema),
  });

  const handleSoldState = (e: any) => {
    setValue("sold", e.target.checked);
  };

  return (
    <Box
      sx={{
        padding: "16px",
        width: { desktop: "60%", laptop: "70%", tablet: "85%", mobile: "95%" },
        minHeight: "60vh",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 1,
        background: "#ffffff",
        boxShadow: "5px 5px 20px #dedede,  -5px -5px 20px #ffffff",
        border: "1px solid #dddddd",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="overline"
        sx={{
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              placeholder="Name"
              fullWidth
              {...register("name")}
              error={Boolean(errors.name)}
              helperText={errors.name?.message?.toString()}
              sx={{
                width: "49.5%",
              }}
            />
            <TextField
              placeholder="Image"
              fullWidth
              {...register("image")}
              error={Boolean(errors.image)}
              helperText={errors.image?.message?.toString()}
              sx={{
                width: "49.5%",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              placeholder="Brand"
              fullWidth
              {...register("brand")}
              error={Boolean(errors.brand)}
              helperText={errors.brand?.message?.toString()}
              sx={{
                width: "49.5%",
              }}
            />
            <TextField
              placeholder="Year"
              fullWidth
              {...register("year", { required: true, min: 1975, max: 2025 })}
              error={Boolean(errors.year)}
              helperText={errors.year?.message?.toString()}
              type="number"
              sx={{
                width: "49.5%",
              }}
            />
          </Box>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch {...register("sold")} onChange={handleSoldState} />
              }
              label="Sold"
            />
          </FormGroup>
          <TextField
            placeholder="Description"
            multiline
            fullWidth
            {...register("description")}
            error={Boolean(errors.description)}
            helperText={errors.description?.message?.toString()}
            minRows={4}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 1,
            marginTop: "10px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "150px",
            }}
            onClick={() => handleSubmit(onSubmit)()}
          >
            {flag ? "Confirmar" : "Criar"}
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              width: "150px",
            }}
            onClick={onCancel}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VehicleForm;
