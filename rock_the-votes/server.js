const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = 7500;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Database
mongoose.connect('mongodb://localhost:27017/rockthevotedb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log('Database is connected'))

//Routes
app.use('/user', require('./routes/authRouter.js'))

// Error
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Listen
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})