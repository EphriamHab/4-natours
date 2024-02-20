const express = require('express')
const userController = require('./../contollers/userControllers')
const router = express.Router()



router
.route('/')
.get(userController.getAllusers)
.post(userController.createUser)

router
.route('/:id')
   .patch(userController.updateUser)
   .get(userController.getUser)
   .delete(userController.deleteUser)


module.exports = router;