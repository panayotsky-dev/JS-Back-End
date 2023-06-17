const User = require('../models/User')



exports.login = (username,password) => {

}

exports.register = async (userData) => {
    const user = User.findOne({username: userData.username})
    if(user){
        throw new Error('username already exists')
    }
    return User.create(userData);
}
    


