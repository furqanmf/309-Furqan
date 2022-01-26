import mongoose from 'mongoose';
import commentsSchema from './comments.js';

// schema for article
const articleSchema = new mongoose.Schema({
    comments: {
        type: [ commentsSchema ],
    },
    author: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    abstract: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

mongoose.model( 'Articles', articleSchema );


