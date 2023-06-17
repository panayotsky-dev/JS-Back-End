const jwt = require('../lib/jwt')

const { SECRET, TOKEN_KEY } = require('../config/config')


exports.auth = async (req,res,next) => {
    const token = req.cookies[TOKEN_KEY]

    if(token){
        try{
            const decodedToken = await jwt.verify(token,SECRET)
            req.user = decodedToken; //20.4
            res.locals.user = decodedToken;        //22.2     
            res.locals.isAuthenticated = true;      //22.2
            next();
        }catch (err){
            res.clearCookie(TOKEN_KEY)

            res.redirect('/users/login')
        }

    }else{
        next();
    }
}

exports.isAuth = (req,res,next) => {
    if(!req.user){
      return res.redirect('/users/login')
    }
    next();
}

//Да остановин не логнатите потребители и да ги оставим да си живуркат, а тези които твърдят че са логнати да ги проверим дали са.