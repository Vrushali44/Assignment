import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";

class PostController {
  static postPost = async (req: Request, res: Response) => {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
    };
    const post = getRepository(Post).create(newPost);
    const result = await getRepository(Post).save(post);
    return res.json(result);
  };

  static getPost = async (req: Request, res: Response) => {
    const result = await getRepository(Post).find();
    return res.json(result);
  };

  static getPostById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await getRepository(Post).findOne(id);
    return res.json(post);
  };

  static updatePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await getRepository(Post).findOne(id);
    if (post) {
      getRepository(Post).merge(post, req.body);
      const result = await getRepository(Post).save(post);
      return res.json(post);
    }
    return res.json({ msg: "Post Not Found" });
  };

  static deletePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await getRepository(Post).delete(id);
    return res.json(post);
  };
}

export default PostController;
