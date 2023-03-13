import VehicleRepository from "../../repositories/Vehicle";

class GetCountVehicle {
    vehicleRepository: VehicleRepository;
    
    constructor() {
        this.vehicleRepository = new VehicleRepository()
    }

    async execute(reply: any){
        
        try {
            await this.vehicleRepository.getCount()
        } catch (error: any) {
            reply.status(400).send({error: error.message})
        }

        const count = await this.vehicleRepository.getCount()

        return count
    }
}

export default new GetCountVehicle()