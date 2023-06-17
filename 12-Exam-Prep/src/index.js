const express = require('express')//e
const handlebars = require('express-handlebars');
const path = require('path')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const {auth} = require('./middlewares/authMiddleware') //20.2

const routes = require('./routes')//r

const app = express();//e

//!Change db name

mongoose.connect(`mongodb://127.0.0.1:27017/petstagram`)
    .then(() => console.log('Db connected'))
    .catch(err => console.log('DB Error', err.message))
    

//Config handlebars
app.engine('hbs',handlebars.engine({
    extname:'hbs'
}))
app.set('view engine', 'hbs')
//
app.set('views','src/views')




app.use(express.static(path.resolve(__dirname,'public'))) // middleware
app.use(express.urlencoded({extended:false}))//bodyparser
app.use(cookieParser())// 18.2
app.use(auth) //20.2
app.use(routes)//r

app.listen(5000,console.log('Server is listening on port 5000'))