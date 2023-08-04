import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    "id": number

    @Column()
    "name": string

    @Column()
    "age": number

    @Column()
    "gender" : "male" | "female"

    @Column()
    "status" : boolean

    @CreateDateColumn()
    "creationTimestamp" : Date | string

    @UpdateDateColumn()
    "modificationTimestamp" : Date | string
}