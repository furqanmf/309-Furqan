import mongoose from "mongoose";
const Articles = mongoose.model("Articles");
const getArticleByCredentials = (credentials) => {
  return Article.findOne(credentials);
};

export { getArticleByCredentials };