import { prisma } from "../../lib/prisma";

class VehicleRepository{

    async create(data: any) {

        await prisma.vehicle.create({
            data: {
                ...data
            }
        })
    }

}

export default VehicleRepository;