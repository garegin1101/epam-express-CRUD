import { Middleware } from "../types/index.js";
import {config} from "dotenv"

config()

export default ((req, res, next) => {

    const API_KEY = process.env.API_KEY || "secret"

    if(req.get("api-key") === API_KEY) next()
    else res.status(401).send("please protect your request")
    
}) as Middleware