const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Tour = require('./../../models/tourModel')

dotenv.config({ path: './config.env' })



const DB = process.env.DATABASE_LOCAL
mongoose.connect(DB).then(() =>{
    console.log("DB connection successful!")
});

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'))

// import data to database

const importData = async()=>{
    try {
       await Tour.create(tours)
       console.log("Data successfully loaded!")
       process.exit()
    } catch (error) {
         console.log(error)
    }
}
// Delete all data from collection

const deleteData = async()=>{
    try {
        await Tour.deleteMany()
        console.log("Data successfully deleted!")
        process.exit()
     } catch (error) {
          console.log(error)
     }
}
if(process.argv[2] === '--import'){
    importData()
} else if(process.argv[2] === '--delete'){
    deleteData()
}
