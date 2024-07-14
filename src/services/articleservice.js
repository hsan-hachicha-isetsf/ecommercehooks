import api from "../Api/api";
const ARTICLE_API="articles"

export const fetcharticles=async()=> {
return await api.get(ARTICLE_API);
}
export const fetcharticleById=async(articleId)=> {
    return await api.get(ARTICLE_API + '/' + articleId);
    }
export const deletearticle=async(articleId) =>{
    return await api.delete(ARTICLE_API + '/' + articleId);
    }
export const addarticle=async(article)=> {
    return await api.post(ARTICLE_API, article);
    }
export const editarticle=(article) =>{
    return api.put(ARTICLE_API + '/' + article._id, article);
    }
    export const fetcharticlesPagination=async(page,limit)=> {
        
        return await api.get(`articles/art/pagination?page=${page}&pageSize=${limit}`)
        }