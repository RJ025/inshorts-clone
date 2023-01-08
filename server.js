const express = require('express');
const PORT = process.env.PORT||4444;
const app = express();
const connection = require('./database/db')
const DefaultData = require('./default')
const route = require('./routes/route');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/' , route)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

const URL = process.env.MONGO_URI || `mongodb+srv://${username}:${password}@clone-inshorts.cvp7a8o.mongodb.net/?retryWrites=true&w=majority`;


connection(URL)


app.listen(PORT , ()=>{
    console.log('http://localhost:'+PORT);
})

DefaultData();