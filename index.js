
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
const PORT = 3000




// app.get('/api/v1/tours', getAllTours)
// app.get('/api/v1/tours/:id', getTour)
// app.patch('/api/v1/tours/:id', updateTour)
// app.post('/api/v1/tours', createTour)
// app.get('/api/v1/tours/:id', deleteTour)

// 3 Routes

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)




// 4 Start server
app.listen(PORT, ()=>{
    console.log(`App started on ${PORT} `)
})