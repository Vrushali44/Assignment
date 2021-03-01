import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ImageDetails } from "./ImageDetails";
import { Post } from "./Post";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @ManyToOne(type => Post, post => post.images)
    post: Post;
    
    @ManyToOne(type => Post, post => post.secondaryImages, {
        cascade: ["insert"]
    })
    secondaryPost: Post;

    @OneToOne(type => ImageDetails, details => details.image, {
        cascade: true
    })
    @JoinColumn()
    details: ImageDetails;

}
