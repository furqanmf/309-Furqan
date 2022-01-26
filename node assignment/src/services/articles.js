/**
 * Service talks to the database (data layer)
 */
 import { name } from "ejs";
import mongoose from "mongoose";
 import config from "../utils/config.js";
 
 const Articles = mongoose.model("Articles");
 
 const fetchArticles = (sort, order, page, q) => {
   const skipClause = (page - 1) * config.PAGE_SIZE;
 
   const filterClause = {};
   if (q) {
     filterClause.abstract = {
       $regex: q,
       $options: "i",
     };
   }
   console.log(filterClause);

   const sortClause = {
     [sort]: order === "desc" ? -1 : 1,
   };
   return Articles
     .find(filterClause)
     .select("author title abstract body imageUrl createdAt")
     .sort(sortClause)
     .skip(skipClause)
     .limit(config.PAGE_SIZE);
 };
 
 const fetchArticleById = (_id) => {
   return Articles.findById(_id);
 };
 
 const addArticle = (article) => {
   return Articles.create(article);
 };
 const updateArticle = (_id, newArticleDetails) => {
   return Articles.findByIdAndUpdate(_id, newArticleDetails, {
     new: true,
     runValidators: true,
   });
 };
 
 const removeArticle = (_id) => {
   return Articles.findByIdAndRemove(_id);
 };
 
 const addComment = (_id, _comment) => {
   return Articles.findByIdAndUpdate(
     _id,
     {
       $push: {
         comments: comm,
       },
     },
     {
       new: true,
       runValidators: true,
     }
   );
 };
 
 const fetchComments = async (_id) => {
   const articleComments = await Articles.findById(_id)
     .select("comments");
   return articleComments.comments;
 };
 
 export {
   fetchArticles,
   fetchArticleById,
   addArticle,
   updateArticle,
   removeArticle,
   addComment,
   fetchComments,
 };