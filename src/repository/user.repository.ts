import { User } from "../entity/User.js";
import { AppDataSource } from "../data-source.js"
import { RawUser } from "../types/index.js";

export const userRepository = AppDataSource.getRepository(User).extend({
    async getUsers() {
        const users = await this.find();
        console.log(users)
        return users;
    },
    async getUserById(id: number) { 
        const user = await this.findOneBy({ id });
        console.log(user)
        return user
    },
    async createUser(rawUser: RawUser) {
        const user = await this.insert({
            ...rawUser,
            status: false
        });
        console.log(user)
        return user;
    },
    async updateUserById(rawUser: RawUser, id: number) {
        const user = await this.update(id, rawUser);
        return user;
    },
    async activateUser(id: number) {
        const user = await this.update(id, {status: true});
        return user;
    }
})