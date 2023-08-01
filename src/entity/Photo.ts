import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Relation } from "typeorm"
import { PhotoMetadata } from "./PhotoMetadata.js"

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column("text")
    description: string

    @Column()
    filename: string

    @Column("integer")
    views: number

    @Column()
    isPublished: boolean

    @OneToOne(() => PhotoMetadata, (photoMetadata) => photoMetadata.photo)
    metadata: Relation<PhotoMetadata>
}