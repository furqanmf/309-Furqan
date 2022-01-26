import { fetchArticles } from '../services/articles.cjs';

const getArticles = (req, res) => {
    res.json(fetchArticles());
};

export {
    fetchArticles
};


const articles = require('../data/articles');

const fetchArticles = () => articles;

module.exports = {
    fetchArticles
};