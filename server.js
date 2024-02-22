
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })
const app = require('./app')



const DB = process.env.DATABASE_LOCAL
mongoose.connect(DB).then(() =>{
    console.log("DB connection successful!")
});

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
 
  console.log(`App started on ${PORT} `)
});
