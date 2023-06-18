const mongoose = require('mongoose')
 //!23.4


exports.getErrorMessage = (err) => {
    if(err instanceof mongoose.MongooseError || err instanceof mongoose.Error.ValidationError){
        return Object.values(err.errors).at(0).message;
    }else{
        return err.message
    }
}