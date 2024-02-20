const express = require('express')
const router = express.Router()


const getAllusers = (req, res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined'
    })
}
const getUser = (req, res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined'
    })
}
const createUser = (req, res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined'
    })
}
const updateUser = (req, res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined'
    })
}
const deleteUser = (req, res)=>{
    res.status(500).json({
        status:'error',
        message:'This route is not yet defined'
    })
}
router
.route('/')
.get(getAllusers)
.post(createUser)

router
.route('/:id')
   .patch(updateUser)
   .get(getUser)
   .delete(deleteUser)


module.exports = router;