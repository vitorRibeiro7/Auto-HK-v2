import VehicleRepository from "../../repositories/Vehicle"
import { z } from "zod"

class CreateVehicleService{
    vehicleRepository: VehicleRepository;

    constructor() {
        this.vehicleRepository = new VehicleRepository();
    }

    async execute(data: any, reply: any) {

        const createvehicleBody = z.object({
            name: z.string(),
            brand: z.string(),
            year: z.number().min(1980).max(2024),
            description: z.string(),
            image: z.string(),
            sold: z.boolean()
        })

        try {
            createvehicleBody.parse(data)
        } catch (error: any) {
            reply.status(400).send({error: error.message})
        }

        const vehicle = await this.vehicleRepository.create(data)

        return vehicle;

    }

}

export default new CreateVehicleService();