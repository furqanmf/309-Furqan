import mongoose from "mongoose";
import config from "../utilis/config.js";

const Articles = mongoose.model("Articles");

const fetchArticles = (sort, order, page, q) => {
  const skipClause = (page - 1) * config.PAGE_SIZE;

  const filterClause = {};
  if (q) {
    filterClause.description = {
      $regex: q,
      $options: "i", // ignore case
    };
  }

  console.log(filterClause);

  // If sort is 'name', then sortClause = { name: -1 }
  // If sort is 'rating', then sortClause = { rating: -1 }
  const sortClause = {
    [sort]: order === "desc" ? -1 : 1,
  };

  // we can pass exec() a function and that is called when the query completes
  // return Product.find( filterClause ).exec();
  return Articles
    .find(filterClause)
    .select('name code releaseDate description price rating imageUrl')
    .sort(sortClause)
    .skip(skipClause)
    .limit(config.PAGE_SIZE);
};

const fetchArticleById = (_id) => {
  return Articles.findById(_id);
};

const addArticle = (article) => {
  return article.create(article);
};

const updateArticle = (_id, newArticleDetails) => {
  // By default everything is $set
  // {
  //   $set: newProductDetails
  // }

  // NOTE: If you want to remove some property you need to create an updateClause this way and pass it instead to Product.findByIdAndUpdate
  // const updateClause = {
  //   $unset: {
  //     description: true
  //   }
  // };

  return Articles.findByIdAndUpdate(_id, newArticleDetails, { new: true, runValidators: true });
};

const removeArticle = (_id) => {
  returnArticle.findByIdAndRemove(_id);
};

const addComment = (_id, review) => {
  return Articles.findByIdAndUpdate(
    _id,
    {
      $push: {
        comments: comment
      }
    },
    {
      new: true,
      runValidators: true
    }
  );
};

const fetchComments = async (_id) => {
  const articleComment = await Article
    .findById(_id)
    .select('comments');
  return articleComment.comments;
}

export {
  fetchArticles,
  fetchArticleById,
  addArticle,
  updateArticle,
  removeArticle,
  addComment,
  fetchComments
};