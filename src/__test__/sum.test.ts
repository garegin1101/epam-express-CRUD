import { test, mock, describe, it, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert'
import sum from "./sum.js"
import userService from '../services/user.service.js'
import { User } from '../entity/User.js'
import userController from '../controllers/user.controller.js'
import { createResponse } from './helpers/middleware-arguments.js'
import { userRepository } from '../repository/user.repository.js'


test("if function working accurate", async () => {
    const status = mock.fn((a: number) => { a + 7 })
    const res = createResponse()
    const actual = await sum(res);
    const expected = 8;
    const call = res.send.mock.calls[0]
    assert.deepEqual(call.arguments, [7])
    // assert.equal(actual, expected);
})


describe("User controllers", async () => {
    let res: any;;
    let nextFn: any;
    describe("get users", async () => {
        beforeEach(()=>{
            res = createResponse();
            nextFn = mock.fn();

        })
        afterEach(()=> {
            mock.reset()
        })
        
        it("should get all users and send it via response", async () => {
            const users: User[] = [];
            mock.method(userService, "getUsers", async () => users);
           
            await userController.getUsers({} as any, res as any, () => { });
            const call = res.send.mock.calls[0];

            assert.strictEqual(nextFn.mock.calls.length, 0);
            assert.deepEqual(call.arguments, [users])

        })
        it("should call next function in case of some exception related to userService", async () => {
            const value: User[] = [];
            const error = new Error("userService exeption")
            mock.method(userService, "getUsers", async () => { throw error });
            
            await userController.getUsers({} as any, res as any, nextFn);
            const call = nextFn.mock.calls[0];

            assert.strictEqual(res.send.mock.calls.length, 0);
            assert.deepEqual(call.arguments, [error])
        })
    })

})


describe("User services", async () => {
    describe("get users", async () => {
        it("should return what gets from UserRepository", async () => {
            const users: User[] = [];
            mock.method(userRepository, 'getUsers', async () => users);

            assert.deepEqual(await userService.getUsers(), users)
        })
    })
})