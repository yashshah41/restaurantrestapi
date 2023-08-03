const { Router } = require('express');
const controller = require('./controller')
const router = Router();

router.get('/', controller.getRestaurants);
router.post('/', controller.addRestaurant);
router.get('/:id', controller.getRestaurantByID);
router.put('/:id', controller.updateRestaurantByID);
router.delete('/:id', controller.deleteRestaurantByID);


module.exports = router;