
const {getErrorMessage} = require('../utils/errorHelpers') //23.4

exports.errorHandler = (error,request,response) => {
    response.render('/404', {error: getErrorMessage(err)});
}