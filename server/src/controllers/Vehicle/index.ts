import CreateVehicleService from "../../services/Vehicle/CreateVehicle";
import FindVehicleService from "../../services/Vehicle/FindVehicle"

class VehicleController {
    async store(request: any, reply: any) {
        try {
            const vehicle = await CreateVehicleService.execute(request.body, reply)
            reply.send().json(vehicle)
        } catch (error: any) {
            console.log(error)
            const statusCode = error.status || 500;
            reply.status(statusCode).send().json(error);
        }
    }

    async find(request:any, reply:any) {
        try {
            const vehicles = await FindVehicleService.execute(request.query, reply)
            reply.send(vehicles)
        } catch (error: any) {
            console.log(error);
            const statusCode = error.status || 500
            reply.status(statusCode).send().json(error)
        }
    }
}

export default new VehicleController;