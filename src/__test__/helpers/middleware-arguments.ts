import { mock } from "node:test"

export const createResponse = () => {
    return {
        send: mock.fn(),
        status: mock.fn(),
        sendStatus: mock.fn()
    }
} 
