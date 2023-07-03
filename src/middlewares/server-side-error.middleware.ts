import { ErrorMiddleware } from "../types/index.js";

export default ((err, req, res, next) => {
    
    console.error(err);
   
    if(err instanceof Error) res.sendStatus(503)
    res.sendStatus(500)

  }) as ErrorMiddleware