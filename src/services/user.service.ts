import { userRepository } from "../repository/user.repository.js";
import { RawUser } from "../types/index.js";

const getUsers = async () => {
    const users = await userRepository.getUsers()
    return users;
};

const getUser = async (id: number) => {
    const user = await userRepository.getUserById(id);
    return user
};

const createUser = async (rawUser: RawUser) => {
    const user = await userRepository.createUser(rawUser);
    return user;
};

const updateUser = async (rawUser: RawUser, id: number) => { 

    await userRepository.updateUserById(rawUser, id);
    const newUser = await userRepository.getUserById(id);
    return newUser;

};

const deleteUser = async (id: number) => {

    await userRepository.delete(id);

};

const activateUser = async (id: number) => { 
    
    const user = await userRepository.activateUser(id);
    console.log(user)
    return user;

};


export default {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    activateUser
}