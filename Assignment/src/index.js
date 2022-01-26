// connect to the DB
import './data/index.js';

import express from 'express';

import router from './routes/articles.js';

import HttpError from './utilis/HttpError.js';

const app = express();
//app.set( 'views', path.join( process.cwd(), 'src', 'views' ) );
//app.set( 'view engine', 'ejs' );



//app.use( express.static( path.join( process.cwd(), 'src', 'public' ) ) );

// extracts JSON data from request body and sets it up on req.body
app.use( express.json() );
// extracts JSON data from a form and sets it up on req.body
//app.use( express.urlencoded( { extended: false } ) );


app.use( '/articles', router );

//app.use( '/', indexRouter );
//app.use( '/articles', articlesRouter );

app.use(( req, res, next ) => {
    const httpError = new HttpError( 'Resource not found', 404 );
    next( httpError );
});

// error-handling middleware
app.use(( httpError, req, res, next ) => {
    res.status( httpError.statusCode || 500 ).json({
        message: httpError.message
    });
});

const PORT = process.env.PORT || 5000;

app.listen( PORT, err => {
    if( err ) {
        console.log( error.message );
        return;
    }

    console.log( `Started http://localhost:${PORT}` );
});