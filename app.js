
const express = require("express")
const morgan = require('morgan')
const { execPath } = require('process')
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')
const app = express()
// 1 Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use((req, res, next)=>{
    console.log("Hello world from the middleware")
    next()
})

app.use((req, res, next)=>{
    req.requestTIME = new Date().toISOString();
    next()
})


// 2 Routes

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

module.exports = app
