import {Request, Response, NextFunction} from "express";
import { User } from "../entity/User.ts";

export type RawUser = Pick<User, "name" | "age" | "gender">;
declare global {
    namespace Express {
        export interface Request {
            rawUser?: RawUser
        }
    }
}

export type Middleware = (req: Request, res: Response, next: NextFunction) => void | Promise<void>;

export type ErrorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => void | Promise<void>;
