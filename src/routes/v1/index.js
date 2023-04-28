const express= require('express')
const CityController= require('../../controllers/city-controller')
const FlightController= require('../../controllers/flight-controller')

const {FlightMiddlewares}= require('../../middlewares/index')

const router= express.Router();
const AirportController= require('../../controllers/airport-controller')
router.post('/city',CityController.create)
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update)

 
router.post('/flights',
    FlightMiddlewares.validateCreateFlight,
FlightController.create);

router.get('/flights',FlightController.getAll)


router.post('/airports',AirportController.create)
module.exports= router