import VehicleRepository from "../../repositories/Vehicle"

class GetAllVehicleService {
    vehicleRepository: VehicleRepository;
    
    constructor(){
        this.vehicleRepository = new VehicleRepository();
    }

    async execute(){
        const vehicles = await this.vehicleRepository.GetAll()

        return vehicles;
    }
}

export default new GetAllVehicleService();