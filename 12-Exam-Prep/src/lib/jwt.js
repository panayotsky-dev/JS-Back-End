const jsonwebtoken =  require('jsonwebtoken') // 17.2
const util = require('util')

const jwt = {
    sign: util.promisify(jsonwebtoken.sign),
    verify: util.promisify(jsonwebtoken.verify),
}

module.exports = jwt;