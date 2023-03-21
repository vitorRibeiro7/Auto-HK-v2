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

    async getCount() {
        const count = await prisma.vehicle.count()

        return count
    }

    async GetAll() {
        const vehicles = await prisma.vehicle.findMany()

        return vehicles
    }

    async GetById(id: number) {
        const vehicle = await prisma.vehicle.findMany({
            where: {
                id
            }
        })

        return vehicle;
    }
 
}

export default VehicleRepository;