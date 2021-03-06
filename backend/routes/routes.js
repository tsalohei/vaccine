const router = require('express').Router()
const controller = require('../controllers/controller')

router.get('/', (request, response) => {
  response.send('<h1>Hello API</h1>')
})

router.get('/orders', async (request, response) => {
  const orders = await controller.findAllOrders(request.query.date, request.query.producer)
  response.json(orders)
})

router.get('/doses', async (request, response) => {
  const doses = await controller.findAllDoses(request.query.date, request.query.producer)
  response.json(doses)
})

router.get('/vaccinations', async (request, response) => {
  const vaccinations = await controller.findAllVaccinations(request.query.date, request.query.producer)
  response.json(vaccinations)
})

module.exports = router