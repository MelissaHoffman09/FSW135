const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

const PORT = 7500;


//middleware
app.use(express.json());
app.use(morgan('dev'))

// database connect
mongoose.connect('mongodb://localhost:27017/inventorydb', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the database")
    )

//routes
app.use("/inventory", require("./routes/inventoryRouter.js"));

// error handling
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
})

// listen
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});