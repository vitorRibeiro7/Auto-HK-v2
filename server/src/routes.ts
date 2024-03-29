import { FastifyInstance } from 'fastify';
import { z } from 'zod'
import { prisma } from './lib/prisma';
import VehicleController from './controllers/Vehicle'

export async function appRoutes(app: FastifyInstance) {

    app.get('/vehicle/find', VehicleController.find)
    app.get('/vehicle/count', VehicleController.getcount)
    app.get('/vehicle', VehicleController.getall)
    app.get('/vehicle/:id', VehicleController.getbyid)
    app.post('/vehicle', VehicleController.store)

    app.put('/vehicle/:id', async (request) => {
        const idVehParams = z.object({
            id: z.string()
        })

        const createVehicleBody = z.object({
            name: z.string(),
            brand: z.string(),
            year: z.number().min(1980).max(2024),
            description: z.string(),
            image: z.string(),
            sold: z.boolean()
        })

        const { id } = idVehParams.parse(request.params);
        const parsedId = parseInt(id, 10);

        const { name, brand, year, description, sold, image } = createVehicleBody.parse(request.body)

        await prisma.vehicle.update({
            where: {
                id: parsedId
            },
            data: {
                name,
                brand,
                year,
                description,
                sold,
                image,
                updatedAt: new Date()
            }
        });
    });

    app.patch('/vehicle/:id', async (request) => {
        const idVehParams = z.object({
            id: z.string()
        })

        const createVehicleBody = z.object({
            name: z.string().optional(),
            brand: z.string().optional(),
            photo_url: z.string().optional(),
            year: z.number().min(1980).max(2024).optional(),
            description: z.string().optional(),
            image: z.string(),
            sold: z.boolean().optional()
        })

        const { id } = idVehParams.parse(request.params);
        const parsedId = parseInt(id, 10);

        const { name, brand, year, description, sold, image } = createVehicleBody.parse(request.body)

        await prisma.vehicle.update({
            where: {
                id: parsedId
            },
            data: {
                name,
                brand,
                year,
                description,
                image,
                sold,
                updatedAt: new Date()
            }
        })
    })

    app.delete('/vehicle/:id', async (request) => {
        const idVehParams = z.object({
            id: z.string()
        })

        const { id } = idVehParams.parse(request.params)
        const parsedId = parseInt(id, 10)

        await prisma.vehicle.delete({
            where: {
                id: parsedId
            }
        })
    })

}
