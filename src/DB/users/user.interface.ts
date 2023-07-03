export interface User {
    "id": number,
    "name": string,
    "age": number,
    "gender" : "male" | "female",
    "status" : boolean,
    "creation timestamp" : Date | string,
    "modification timestamp" : Date | string
}

export type RawUser = Pick<User, "name" | 'age' | "gender">