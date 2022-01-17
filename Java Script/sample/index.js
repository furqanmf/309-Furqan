import express from 'express';
import productsRouter from './routes/routes-products.js';

const app = express();

app.use( productsRouter );

const PORT = process.env.PORT || 4000;

app.listen( PORT, err => {
    if( err ) {
        console.log( error.message );
        return;
    }

    console.log( `Started http://localhost:${PORT}` );
});