const express = require( "express" );
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

const app = express();
const port = 8080; 

app.use(bodyParser.urlencoded({ extended: true }))

app.get( "/", ( req, res ) => {
    res.send( "Hello worldya" );
} );


app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );