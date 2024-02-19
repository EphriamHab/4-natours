const fs = require('fs')
const express = require("express")
const { execPath } = require('process')

const app = express()

app.use(express.json())

const PORT = 3000
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
app.get('/api/v1/tours')

const getAllTous =  (req, res)=>{
  res.status(200).json({
    status:"Success",
    results:tours.length,
    data:{
        tours
    }
  })
}
app.get('/api/v1/tours', getAllTous)

app.get('/api/v1/tours/:id', (req, res)=>{
    console.log(req.params)
    const id = req.params.id * 1
    if(id > tours.length){
        return res.status(404).json({
            status:"Fail",
            message:"Invalid data"
        })
    }
    const tour = tours.find(el =>el.id === id)
    res.status(200).json({
      status:"Success",
      data:{
          tour
      }
    })
  })

app.post('/api/v1/tours', (req, res)=>{
//    console.log(req.body)
const newId = tours[tours.length-1].id + 1
const newTour = Object.assign({id:newId}, req.body)

tours.push(newTour)

fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err=>{
   res.status(201).json({
    status:"Success",
    data:{
        tours
    }
   })
})

})

app.patch('/api/v1/tours/:id', (req,res)=>{
    const tourid = req.params.id * 1
    const tour = tours.find(tour=>tour.id = tourid)

    if(tourid > tours.length){
        return res.status(404).json({
            status:"Fail",
            message:"Invalid data"
        })
    }  
    const updatedtour = {...tour, ...req.body}
   
    res.status(200).json({
        status:"success",
        data:{
           tour:updatedtour 
        }
    })
})



app.listen(PORT, ()=>{
    console.log(`App started on ${PORT} `)
})