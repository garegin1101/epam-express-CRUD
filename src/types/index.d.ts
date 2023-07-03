import {Request, Response, NextFunction} from "express";
import { RawUser } from "../DB/users/user.interface.ts";

declare global {
    namespace Express {
        export interface Request {
            rawUser?: RawUser
        }
    }
}

export type Middleware = (req: Request, res: Response, next: NextFunction) => void | Promise<void>;

export type ErrorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => void | Promise<void>;
