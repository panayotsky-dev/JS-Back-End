const router = require('express').Router(); //9.1

const userManager = require('../managers/userManager')

router.get('/login',(req,res)=>{
    res.render('users/login') //9.3
})

router.post('/login', async (req,res) => {
    const {username, password} = req.body;

    await userManager.login(username,password)

    res.send('Logged in')
})

router.get('/register',(req,res)=>{
    res.render('users/register')
})

router.post('/register', async (req,res) => {
    const {username,email,password,repeatPassword} = req.body;
    await userManager.register({username,email,password,repeatPassword}) //! ? //user,email,password,repeatPassword
    res.send('registered')
})






module.exports = router//9.1