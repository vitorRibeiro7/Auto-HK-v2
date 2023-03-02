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

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CreateVehicleDto } from "../../services/dto/create-vehicle.dto";

interface VehicleFormProps {
  title: String;
  defaultValues: any;
  onSubmit: any;
  onCancel: () => void;
  flag: boolean;
}

const VehicleForm = ({
  title,
  defaultValues,
  onSubmit,
  onCancel,
  flag,
}: VehicleFormProps) => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = useForm({
    defaultValues,
    resolver: yupResolver(CreateVehicleDto),
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
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  placeholder="Onix"
                  label="Name"
                  fullWidth
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message?.toString()}
                  sx={{
                    width: "49.5%",
                  }}
                  {...field}
                />
              )}
            />
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <TextField
                  placeholder="Link"
                  label="Image"
                  fullWidth
                  error={Boolean(errors.image)}
                  helperText={errors.image?.message?.toString()}
                  sx={{
                    width: "49.5%",
                  }}
                  {...field}
                />
              )}
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
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <TextField
                  placeholder="Chevrolet"
                  label="Brand"
                  fullWidth
                  error={Boolean(errors.brand)}
                  helperText={errors.brand?.message?.toString()}
                  sx={{
                    width: "49.5%",
                  }}
                  {...field}
                />
              )}
            />
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <TextField
                  placeholder="1980 - 2025"
                  label="Year"
                  fullWidth
                  error={Boolean(errors.year)}
                  helperText={errors.year?.message?.toString()}
                  sx={{
                    width: "49.5%",
                  }}
                  {...field}
                />
              )}
            />
          </Box>

          <Controller
            name="sold"
            control={control}
            render={({ field }) => (
              <FormGroup>
                <FormControlLabel
                  control={<Switch onChange={handleSoldState} />}
                  label="Sold"
                  {...field}
                />
              </FormGroup>
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                label="Description"
                placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla dolorem non eos molestiae quas, explicabo expedita aperiam nisi, consequatur commodi corrupti dolores quae! Ad deserunt aspernatur maiores unde exercitationem temporibus!"
                multiline
                fullWidth
                {...register("description")}
                error={Boolean(errors.description)}
                helperText={errors.description?.message?.toString()}
                minRows={4}
                {...field}
              />
            )}
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
            type="submit"
            variant="contained"
            sx={{
              width: "150px",
            }}
            // onClick={() => handleSubmit(onSubmit)()}
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
