import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { Category } from './Category';
import { Chapter } from "./Chapter";

@Entity()
export class PostDetails {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    meta: string;

    @Column()
    comment: string;

    @OneToOne(type => Post, post => post.details)
    post: Post;

    @OneToMany(type => Category, category => category.details, {
        cascade: ["insert"]
    })
    categories: Category[];

    @ManyToOne(type => Chapter, chapter => chapter.postDetails, {
        cascade: ["insert"]
    })
    chapter: Chapter;

}