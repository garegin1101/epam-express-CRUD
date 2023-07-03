import { readFile, writeFile } from "fs/promises";
import { User, RawUser } from "../DB/users/user.interface.js";

const usersPath = "./src/DB/users/users.json";

const getUsers = async () => {
    const res = await readFile(usersPath);
    const users: User[] = JSON.parse(res.toString());
    return users;
};

const getUser = async (id: number) => { 
    const users = await getUsers();
    const user = users.find(user => user.id === id);
    return user
};

const createUser = async (rawUser: RawUser) => { 
    const users = await getUsers();
    const timestamp = new Date();
    const user: User = {
        id: Date.now(),
        status: false,
        "creation timestamp": timestamp,
        "modification timestamp": timestamp,
        ...rawUser
    }
    users.push(user)
    const jsonUsers = JSON.stringify(users,null,2);
    await writeFile(usersPath, jsonUsers);
    return user;
};

const updateUser = async (rawUser: RawUser, id: number) => { 

    const users = await getUsers();
    const user = users.find(user => user.id === id);
    if(user) {
        const timestamp = new Date();

        const newUser: User = {
            ...user,
            "modification timestamp": timestamp,
            ...rawUser
        }
        const newUsers = users.map(u => {
            if(u.id === id) return newUser;
            return u
        })

        const jsonUsers = JSON.stringify(newUsers,null,2);
        await writeFile(usersPath, jsonUsers);
        return newUser
    }

};

const deleteUser = async (id: number) => { 
    const users = await getUsers();
    const myUser = users.find(user => user.id === id);
    if(myUser) {
        const usersWithoutMyUser = users.filter(user => user.id !== id);
        const jsonUsers = JSON.stringify(usersWithoutMyUser,null,2);
        await writeFile(usersPath, jsonUsers);
        return true
    }
};

const activateUser = async (id: number) => { 
    const users = await getUsers();
    const user = users.find(user => user.id === id);
    if(user) {
        const timestamp = new Date();

        const newUser: User = {
            ...user,
            "modification timestamp": timestamp,
            status: true
        }
        const newUsers = users.map(u => {
            if(u.id === id) return newUser;
            return u
        })

        const jsonUsers = JSON.stringify(newUsers,null,2);
        await writeFile(usersPath, jsonUsers);
        return newUser
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