import { prisma } from "../../lib/prisma";

class VehicleRepository{

    async create(data: any) {

        await prisma.vehicle.create({
            data: {
                ...data
            }
        })
    }

    async find(q: string) {
        

        const vehicles = await prisma.vehicle.findMany({
            where: {
                OR: [
                    {name: { contains: q}},
                    {brand: { contains: q}}
                ]
            }
        })

        return vehicles;

    }

}

export default VehicleRepository;