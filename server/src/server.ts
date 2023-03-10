import cors from "@fastify/cors"
import Fastify from "fastify";
import { appRoutes } from "./routes";

const PORT = 3334

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
    port: PORT,
}).then(() => {
    console.log(`Servidor rodando [${PORT}]`)
})