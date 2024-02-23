const express = require('express')
const tourController = require('../contollers/tourCotrollers')
const router = express.Router()

// router.param('id',tourController.checkID )
router.route('/top-5-cheap').get(tourController.aliasTopTours,tourController.getAllTours)
router
.route('/')
.get(tourController.getAllTours)
.post( tourController.createTour)

router
.route('/:id')
   .patch(tourController.updateTour)
   .get(tourController.getTour)
   .delete(tourController.deleteTour)


module.exports = router;