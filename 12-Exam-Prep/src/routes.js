const router = require('express').Router();

const homeController = require('./controllers/homeController')
const userController = require('./controllers/userController') //9.2

router.use(homeController)
router.use('/users', userController) //9.2
router.get('*', (request,response) => {  //23.2
    response.redirect('/404')
})









module.exports = router;