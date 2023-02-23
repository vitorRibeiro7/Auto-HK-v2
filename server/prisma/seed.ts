import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const carNames = [
  "Mustang",
  "Camaro",
  "Charger",
  "Challenger",
  "Corvette",
  "GT-R",
  "Supra",
  "911",
  "F-Type",
  "Vantage",
  "DB9",
  "DBS",
  "Vanquish",
  "Continental",
  "R8",
];

const carBrands = [
  "Ford",
  "Chevrolet",
  "Dodge",
  "Mitsubishi",
  "Nissan",
  "Toyota",
  "Porsche",
  "Jaguar",
  "Aston Martin",
  "Bentley",
  "Audi",
];

async function main() {
  for (let i = 0; i < 15; i++) {
    const car = await prisma.vehicle.create({
      data: {
        name: carNames[Math.floor(Math.random() * carNames.length)],
        brand: carBrands[Math.floor(Math.random() * carBrands.length)],
        year: faker.datatype.number({ min: 2000, max: 2023 }),
        description: faker.lorem.sentence(),
        sold: faker.datatype.boolean(),
      },
    });
    console.log(`Created car with ID: ${car.id}`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });