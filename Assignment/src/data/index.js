import mongoose from 'mongoose';

import '../models/articles.js';

const connectionStr = `mongodb://localhost:27017/blog`;
mongoose
    .connect(connectionStr)
    .then(() => {
        console.log(`connected to the DB`);
    })
    .catch(err => {
        console.log(err.message);
    });