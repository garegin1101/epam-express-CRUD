import { User } from "../entity/User.js";

async function sum(res: {send:(a:number)=>void}) {
    await new Promise((res, rej) => {
        setTimeout(()=>{res(5)}, 1000)
    })
    res.send(7);
}

export default sum;