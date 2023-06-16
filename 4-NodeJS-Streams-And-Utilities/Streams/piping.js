const fs = require('fs')
const readStream = fs.createReadStream('./input.txt')
const writeStream = fs.createWriteStream('./output.txt')

readStream.pipe(writeStream) //! не ни пречи да пайпнем и друг стрийм .pipe()

//! Този метод се нарича Pipe / пайпинг 
//! Сам си поставя end()

