const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
require('dotenv').config();
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
app.use('/auth', require('./routes/authRouter.js'));
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }));
app.use('/api/user', require('./routes/userRouter.js'));
app.use('/api/comment', require('./routes/commentRouter.js'));
app.use('/api/issue', require('./routes/issueRouter.js'));

// Error Handling
app.use((err, req, res, next) => {
    if(err.name === "401 Unauthorized Error") {
        res.status(err.status);
    }
    return res.send({errMsg: err.message});
});

// Listen
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})