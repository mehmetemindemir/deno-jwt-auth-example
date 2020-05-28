import ArticleRepository from "../repositories/ArticleRepository.ts";
import IArticle from "../entities/IArticle.ts";
class ArticleService {
    constructor() {
    }
    readonly articlesRepo=new ArticleRepository();
    getArticles=async() =>{
        return await this.articlesRepo.findAll();
    }
    insertArticle= async (article:IArticle)=>{
        return await this.articlesRepo.insertOne(article);
    }
}
export default ArticleService;