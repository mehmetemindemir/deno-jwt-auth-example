import { Router } from "https://deno.land/x/oak/mod.ts";
import {login} from './login.ts'
import authMiddleware from './authMiddleware/authMiddleware.ts';
import {getArticles,insertArticle} from './controller/ArticleController.ts'
const router = new Router();

router
    .post('/login', login)
    .get('/article', authMiddleware,getArticles)
    .post('/article',insertArticle);


export default router;