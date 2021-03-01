import { Router } from "express";
import PostController from './../controllers/postController';


const router = Router();
router.post('/post', PostController.postPost);
router.get('/post', PostController.getPost);
router.get('/post/:id', PostController.getPostById);
router.put('/post/:id', PostController.updatePost);
router.delete('/post/:id', PostController.deletePost);

export default router;