import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostDetails } from "./PostDetails";

@Entity()
export class Chapter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    about: string;

    @OneToMany(type => PostDetails, postDetails => postDetails.chapter)
    postDetails: PostDetails[];

}