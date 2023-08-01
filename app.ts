import express from "express";
import userRouter from "./src/routes/user.route.js"
import serverSideErrorMiddleware from "./src/middlewares/server-side-error.middleware.js";
import notFoundController from "./src/controllers/not-found.controller.js";
import protectionMiddleware from "./src/middlewares/protection.middleware.js";
import { config } from "dotenv";
import { AppDataSource } from "./src/data-source.js";
import { Photo } from "./src/entity/Photo.js";

try{
    await AppDataSource.initialize();
    console.log("successfully initialized")
 

const photoRepository = AppDataSource.getRepository(Photo)
const photos = await photoRepository.find({
    relations: {
        metadata: true,
    },
})
console.log(photos)

} catch(err) {
    console.log("Failed : ", (err as any).message)
}


config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(protectionMiddleware);

app.use("/user", userRouter);

app.use(serverSideErrorMiddleware);

app.all("*", notFoundController)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})