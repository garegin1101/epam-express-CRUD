import { Middleware } from "../types/index.js";
import type { RawUser } from "../DB/users/user.interface.js";
              
export default ((req, res, next) => {

    const user = req.body

    if(Object.keys(user).length === 3 )

    if ("name" in user)

    if (typeof user.name === "string")

    if ("age" in user)

    if (typeof user.age === "number")

    if(user.age < 125 && user.age > 0)

    if ("gender" in user)

    if (user.gender === "male" || user.gender === "female") {
        const rawUser = user as RawUser;
        req.rawUser = rawUser;
        next()
    }
    else res.status(422).send("gender should be 'male' or 'female'")

    else res.status(422).send("gender is missing")

    else res.status(422).send("age cannot be negative or more than 125")

    else res.status(422).send("age should be number")

    else res.status(422).send("age is missing")

    else res.status(422).send("name should be string")

    else res.status(422).send("name is missing")

    else res.status(422).send("Please provide name, age and gender properties")

}) as Middleware