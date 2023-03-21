import CreateVehicleService from "../../services/Vehicle/CreateVehicle";
import FindVehicleService from "../../services/Vehicle/FindVehicle"
import GetAllVehicle from "../../services/Vehicle/GetAllVehicle";
import GetCountVehicles from "../../services/Vehicle/GetCountVehicles";
import GetByIdVehicleService from "../../services/Vehicle/GetByIdVehicle";

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

    async getcount(request : any, reply: any) {
        try {
            const count = await GetCountVehicles.execute(reply)
            reply.send(count)
        } catch (error: any) {
            console.log(error);
            const statusCode = error.status || 500
            reply.status(statusCode).send().json(error)
        }
    }

    async getall(request: any, reply: any) {
        try {
            const vehicles = await GetAllVehicle.execute()
            reply.send().json(vehicles)
        } catch (error: any) {
            console.log(error);
            const statusCode = error.status || 500
            reply.status(statusCode).send().json(error)
        }
    }

    async getbyid(request: any, reply: any) {
        try {
            const vehicle = await GetByIdVehicleService.execute(request, reply)
            reply.send(vehicle)
        } catch (error: any) {
            console.log(error);
            const statusCode = error.status || 500
            reply.status(statusCode).send().json(error)
        }
    }
}

export default new VehicleController;