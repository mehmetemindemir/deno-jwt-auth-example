import db from '../db/mongo.ts'
import IArticle from "../entities/IArticle.ts";
class ArticleRepository {
    constructor() {}
    readonly articleCollection=db.collection("article");
    async findAll(){
        const article=this.articleCollection.find();
        return article;
    }
    async insertOne(article:IArticle){
        const {$oid}=await this.articleCollection.insertOne(article);
        return $oid;
    }
}
export default ArticleRepository;