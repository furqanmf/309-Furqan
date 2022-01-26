import mongoose from 'mongoose';
import commentSchema from './comment.js';

// schema for article
const articleSchema = new mongoose.Schema({
    comment: {
        type: [ commentSchema ],
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


