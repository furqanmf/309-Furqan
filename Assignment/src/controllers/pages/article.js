import  { fetchArticles } from '../../services/articles.js';
const getArticlesPage = ( req, res, next ) => 
{
  
  fetchArticles()
     .then(articles =>{
      res.render('artiles',{
          articles:articles
      });
   });
};

export{
    getArticlesPage
};