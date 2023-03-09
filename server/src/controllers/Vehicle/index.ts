import CreateVehicleService from "../../services/Vehicle/CreateVehicle";

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
}

export default new VehicleController();