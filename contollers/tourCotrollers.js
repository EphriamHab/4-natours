
const Tour = require('./../models/tourModel')

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))


exports.getAllTours =  async(req, res)=>{
      try {
        const tours = await Tour.find({}) 
        res.status(200).json({
          status:"Success",
          results:tours.length,
          data:{
              tours
          }
        })
      } catch (error) {
        res.status(404).json({
            status:"Error",
            message:"Not Found"
        })
      }
   }
   
   exports.getTour = async(req, res)=>{
        try {
       const tour = await Tour.findById(req.params.id)
       res.status(200).json({
         status:"Success",
         data:{
             tour
         }
       })
        } catch (error) {
            res.status(400).json({
                status:"Fail",
                message:"Invalid data set"
            })
        }

     }
   
 exports.createTour= async(req, res)=>{
  try {
    const newTour = await Tour.create(req.body)
    res.status(201).json({
     status:"Success",
     data:{
      newTour
     }
    })
  } catch (err) {
    res.status(400).json({
        status:"Fail",
        message:err
    })
  }

   }
   
   exports.updateTour = async(req,res)=>{
     try {
       const tour = await Tour.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
       })
        res.status(200).json({
            status:"success",
            data:{
               tour 
            }
        })
     } catch (error) {
        res.status(400).json({
            status:"Fail",
            message:"Error in updating document"
        })
     }

   }
   exports.deleteTour = async(req, res) => {
      try {
    await Tour.findByIdAndDelete(req.params.id, req.body)

        res.status(204).json({
          status: "success",
          data:null
      });
      } catch (error) {
        res.status(404).json({
          status:"Fail",
          message:"Error in deleting document"
      })
      }
       
   }