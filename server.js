/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })
const app = require('./app')



const DB = process.env.DATABASE_LOCAL
mongoose.connect(DB).then(() =>{
    console.log("DB connection successful!")
});

const tourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'A tour must have a name'],
        unique:true
    },
    rating:{
        type:Number,
        default:4.5
    },
    price:{
        type:Number,
        required:[true, 'A tour must have a price']
    },
})

const Tour = mongoose.model('Tour', tourSchema)
const testTour = new Tour({
    name: "The Northern Lights",
    rating:4.9,
    price:497
})

testTour.save().then(doc =>{
    console.log(doc)
}).catch(err =>{
    console.log("Error:", err)
})
const PORT = process.env.PORT || 3000

// eslint-disable-next-line prettier/prettier
app.listen(PORT, ()=>{
  // eslint-disable-next-line no-console
  console.log(`App started on ${PORT} `)
});
