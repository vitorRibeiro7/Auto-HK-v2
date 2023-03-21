import VehicleRepository from "../../repositories/Vehicle";
import { z } from "zod";

class GetByIdVehicleService {
    vehicleRepository: VehicleRepository;

    constructor() {
        this.vehicleRepository = new VehicleRepository();
    }

    async execute(request: any, reply: any) {

        const requestIdValidation = z.object({
            id: z.string()
        })
        
        try {
            requestIdValidation.parse(request.params)
        } catch (error: any) {
            reply.status(400).send({error: error.message})
        }

        const { id } = requestIdValidation.parse(request.params);
        const parsedId = parseInt(id, 10);

        const vehicle = await this.vehicleRepository.GetById(parsedId);

        return vehicle

    }
}

export default new GetByIdVehicleService();