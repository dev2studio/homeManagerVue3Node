require('dotenv').config();

const express        = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app            = express();
const port = 8000;
const mongoString = process.env.DATABASE_URL;

app.use(cors({    origin: process.env.HOME_APP}));
app.use(express.json())

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected!)');
})

const routes =  require('./server/router.js');
app.use('/api', routes)

app.listen(port);