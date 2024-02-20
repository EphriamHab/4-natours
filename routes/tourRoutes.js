const fs = require('fs')
const express = require('express')
const router = express.Router()
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))
const getAllTours =  (req, res)=>{
    console.log(req.requestTIME )
     res.status(200).json({
       status:"Success",
       requestedAt:req.requestTIME ,
       results:tours.length,
       data:{
           tours
       }
     })
   }
   
   const getTour = (req, res)=>{
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
     }
   
   const createTour= (req, res)=>{
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
   
   }
   
   const updateTour = (req,res)=>{
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
   }
   const deleteTour = (req, res) => {
       const tourId = req.params.id * 1;
       const tourToDelete = tours.find(tour => tour.id === tourId);
   
       if (!tourToDelete) {
           return res.status(404).json({ 
               status: "fail",
               message: "Tour not found"
            });
       }
   
       newTours = tours.filter(tour => tour.id !== tourId);
   
       fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(newTours), err => {
           if (err) return res.status(500).json({
                status: "error", 
                message: "Failed to delete tour"
            });
           res.status(204).json({
                status: "success",
                data:null
            });
       });
   }
router
.route('/')
.get(getAllTours)
.post(createTour)

router
.route('/:id')
   .patch(updateTour)
   .get(getTour)
   .delete(deleteTour)


module.exports = router;