const router = require('express').Router(); //9.1

const userManager = require('../managers/userManager')
const {TOKEN_KEY} = require('../config/config')
const {getErrorMessage} = require('../utils/errorHelpers')

router.get('/login',(req,res)=>{
    res.render('users/login') //9.3
})

router.post('/login', async (req,res) => {
    const {username, password} = req.body;
    try{
        const token = await userManager.login(username,password) // 17.4

    res.cookie(TOKEN_KEY, token)
    res.redirect('/');

    }catch (err){
        res.render('users/login', {error:getErrorMessage(err)})
        
    }
    

    
})

router.get('/register',(req,res)=>{
    res.render('users/register')
})

router.post('/register', async (req,res) => {
    const {username,email,password,repeatPassword} = req.body;
    try{
        await userManager.register({username,email,password,repeatPassword}) //! ? //user,email,password,repeatPassword
        res.redirect('/users/login')
    }catch (err){
        res.render('users/register',{error:getErrorMessage(err)})
    }
    
})

router.get('/logout', (req,res) => {
    res.clearCookie(TOKEN_KEY)
    res.redirect('/')
})





module.exports = router//9.1


//! 25

// router.post('/register', async (req,res) => {
//     const {username,email,password,repeatPassword} = req.body;
//     try{
//        const token =  await userManager.register({username,email,password,repeatPassword}) 
//         res.cookie(TOKEN_KEY,token)
//         res.redirect('/')
//     }catch (err){
//         res.render('users/register',{error:getErrorMessage(err)})
//     }
    
// })