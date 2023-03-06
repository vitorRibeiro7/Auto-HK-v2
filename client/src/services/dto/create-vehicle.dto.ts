import { string, number, boolean, object, InferType } from 'yup'

export type ICreateVehicleDto = InferType<typeof CreateVehicleDto>;

export const CreateVehicleDto = object({
    name: string().required("This field is required"),
    image: string(),
    brand: string().required("This field is required"),
    year: number()
      .min(1980, "Need to be greater than 1980")
      .max(2024, "Need to bem less than 2025")
      .required("This field is required"),
    sold: boolean(),
    description: string().required("This field is required"),
});
