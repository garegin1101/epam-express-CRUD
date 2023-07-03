import { RawUser } from "../DB/users/user.interface.js";
import userService from "../services/user.service.js";
import { Middleware } from "../types/index.js";

const getUsers: Middleware = async (req, res, next) => {
    try {
       const users = await userService.getUsers();
       res.send(users)
    } catch(err) {
        next(err)
    }
};

const getUser: Middleware = async (req, res, next) => {
    try {
        const id = +req.params.id
        const user = await userService.getUser(id);
        user ? res.send(user) : res.status(404).send("There is no such user")
 
     } catch(err) {
        next(err)
     }
};

const createUser: Middleware = async (req, res, next) => {
    try {
        const rawUser = req.rawUser as RawUser;
        const newUser = await userService.createUser(rawUser);
        res.send(newUser)
 
     } catch(err) {
        next(err)
     }
};

const updateUser: Middleware = async (req, res, next) => {
    try {
        const rawUser = req.rawUser as RawUser;
        const id = +req.params.id;
        const newUser = await userService.updateUser(rawUser, id);
        newUser ? res.send(newUser) : res.status(404).send("There is no such user")
 
     } catch(err) {
        next(err)
     }
};

const deleteUser: Middleware = async (req, res, next) => {
    try {
        const id = +req.params.id;
        await userService.deleteUser(id)
        ? res.send("user successfuly deleted") : res.status(404).send("There is no such user")
 
     } catch(err) {
        next(err)
     }
};

const activateUser: Middleware = async (req, res, next) => {
    try {
        const id = +req.params.id;
        const newUser = await userService.activateUser(id);
        newUser ? res.send(newUser) : res.status(404).send("There is no such user")
 
     } catch(err) {
        next(err)
     }
}; 


export default {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    activateUser
}