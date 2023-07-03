import { Middleware } from "../types/index.js";
              
export default ((req, res, next) => {

    res.sendStatus(404)

}) as Middleware