const router = require('express').Router();

const homeController = require('./controllers/homeController')
const userController = require('./controllers/userController') //9.2

router.use(homeController)
router.use('/users', userController) //9.2









module.exports = router;