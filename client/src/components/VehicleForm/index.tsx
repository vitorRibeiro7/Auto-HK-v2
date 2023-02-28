import { Box, TextField, Paper, Button, Typography } from "@mui/material";
import { ErrorResponse } from "@remix-run/router";

import { useForm } from "react-hook-form";

const VehicleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("example"));

  const onSubmit = (data: any) => console.log(data);

  return (
    <Paper
      elevation={4}
      sx={{
        alignSelf: "center",
        padding: "16px",
        margin: "18px",
        width: { desktop: "60%", laptop: "70%", tablet: "85%", mobile: "95%" },
        minHeight: "60vh",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography
        variant="overline"
        sx={{
          textAlign: "center",
        }}
      >
        Register a new Vehicle
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("name", { required: true })}
              error={Boolean(errors.name)}
              helperText={errors.name && "Name is required"}
              sx={{
                width: "49.5%",
              }}
            />
            <TextField
              placeholder="Photo url"
              fullWidth
              {...register("photo", { required: false })}
              error={Boolean(errors.photo)}
              helperText={errors.photo && "Year is required"}
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
              {...register("brand", { required: true })}
              error={Boolean(errors.brand)}
              helperText={errors.brand && "Brand is required"}
              sx={{
                width: "49.5%",
              }}
            />
            <TextField
              placeholder="Year"
              fullWidth
              {...register("year", { required: true })}
              error={Boolean(errors.year)}
              helperText={errors.year && "Year is required"}
              sx={{
                width: "49.5%",
              }}
            />
          </Box>
          <TextField
            placeholder="Description"
            multiline
            fullWidth
            {...register("description", { required: true })}
            error={Boolean(errors.description)}
            helperText={errors.description && "Description is required"}
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
            type="submit"
            variant="contained"
            sx={{
              width: "150px",
            }}
          >
            Enviar
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              width: "150px",
            }}
          >
            cancelar
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default VehicleForm;
