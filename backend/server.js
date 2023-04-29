const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const errorHandler = require('./middleware/error');
const rateLimit = require('express-rate-limit');

dotenv.config({path: './config/config.env'});
connectDB();

const recipeRoute = require('./routes/recipeRouter');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

//Rate limit
const limiter =  rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100
});

app.use(limiter);

app.use('/recipe', recipeRoute);
app.use(errorHandler);

const PORT= process.env.PORT || 5000;

const server = app.listen(
    PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)

    server.close(() => process.exit(1))
});
