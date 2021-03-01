import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Image } from "./Image";

@Entity()
export class ImageDetails {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    meta: string;

    @Column()
    comment: string;

    @OneToOne(type => Image, image => image.details)
    image: Image;

}
