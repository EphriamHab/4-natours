/* eslint-disable prettier/prettier */
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})
const app = require('./app')

const PORT = process.env.PORT || 3000

// eslint-disable-next-line prettier/prettier
app.listen(PORT, ()=>{
    // eslint-disable-next-line no-console
    console.log(`App started on ${PORT} `)
})