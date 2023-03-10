
import VehicleRepository from "../../repositories/Vehicle";
import {z} from 'zod'

class FindVehicleService{
    vehicleRepository: VehicleRepository;

    constructor() {
        this.vehicleRepository = new VehicleRepository();
    }

    async execute(query: any, reply: any){
        const qParams = z.object({
            q: z.string()
        })

        try {
            qParams.parse(query)
        } catch (error: any) {
            reply.status(400).send({error: error.message})
        }
        
        const vehicles = await this.vehicleRepository.find(query.q)

        return vehicles;
    }
}

export default new FindVehicleService();