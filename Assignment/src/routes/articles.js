import express from 'express';
import {
    getArticles,
    getArticleById,
    postArticle,
    putArticle,
    deleteArticle,
    postComment,
    getComments
} from '../controllers/articles.js';


// create a router
const router = express.Router();

router.get(    '/'    , getArticles );
router.get(    '/:_id', getArticleById );


router.post(   '/'    , postArticle );
router.put(    '/:_id',  putArticle );
router.delete( '/:_id',  deleteArticle );


router.get(    '/:_id/comments', getComments );

router.post(   '/:_id/comments',  postComment );


export default router;