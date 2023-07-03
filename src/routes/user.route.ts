import { Router } from "express";
import userController from "../controllers/user.controller.js";
import validateUserMiddleware from "../middlewares/validate-user.middleware.js";

const router = Router();

router
.get("/", userController.getUsers)
.get("/:id", userController.getUser)
.post("/", validateUserMiddleware, userController.createUser)
.put("/:id", validateUserMiddleware, userController.updateUser)
.delete("/:id", userController.deleteUser)
.patch("/activate/:id", userController.activateUser);

export default router;