const User = require('../models/User')
const bcrypt = require('bcrypt') 
const jwt = require('../lib/jwt')
const {SECRET} = require('../config/config')






exports.login = async (username,password) => { //16.1

    //ToDo find user
    const user = await User.findOne({username})

    if(!user){ 
        throw new Error('Invalid user or password')
    }
    // check password
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
        throw new Error('Invalid user or password')
    }

    //! 25 const token await generateToken(user);
    //! 25 return token


    // valid passsword
    const payload = { //17.4
        _id: user._id,
        username: user.name,
        email: user.email,
        
    }

    const token = await jwt.sign(payload,SECRET,{expiresIn:'2d'}) // 17.4
    return token;
}

exports.register = async (userData) => {
    const user = await User.findOne({username: userData.username})
    if(user){
        throw new Error('username already exists')
    }
    return User.create(userData);
}
    


//! 25

// exports.register = async (userData) => {
//     const user = await User.findOne({username: userData.username})
//     if(user){
//         throw new Error('username already exists')
//     }
//     const createdUser = await User.create(userData);

//     const token = await generateToken(createdUser)
//     return token
// }

// async function generateToken(user){

//     const payload = { //17.4
//         _id: user._id,
//         username: user.name,
//         email: user.email,
        
//     }

//     const token = await jwt.sign(payload,SECRET,{expiresIn:'2d'}) // 17.4
//     return token;

// }