import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import ArticleService from "../services/ArticleService.ts";
const article =new ArticleService();
export const getArticles =async (ctx:RouterContext)=>{
    ctx.response.body=await article.getArticles();
}
export const insertArticle = async (ctx: RouterContext) =>{
    const {request,response} =ctx;
    if(!request.hasBody){
        response.status=400;
        response.body={msg:"invalid recipe data "};
        return ;
    }
    const {value:{articleId,articleTitle,articleContent}}=await request.body();
    const articleNo=await article.insertArticle({articleId,articleTitle,articleContent});
    response.body={msg:"article created" +articleNo};
}