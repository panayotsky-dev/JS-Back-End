const router = require('express').Router();


router.get('/', (req,res)=>{
    console.log(req.user)
    res.render('home')
})

router.get('/404', (request,response)=> {  //23.1
    response.render('404')
})



module.exports = router