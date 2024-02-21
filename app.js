/* eslint-disable prettier/prettier */

const express = require("express")
const morgan = require('morgan')
// eslint-disable-next-line no-unused-vars
const { execPath } = require('process')
const tourRouter = require('./routes/tourRoutes')
// eslint-disable-next-line import/newline-after-import
const userRouter = require('./routes/userRoutes')
const app = express()
// 1 Middlewares
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.static(`${__dirname}/public`))
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
