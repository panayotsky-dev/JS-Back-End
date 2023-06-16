const fs = require('fs')
const {log} = require('console')

const readStream = fs.createReadStream('./asd.txt', {highWaterMark : 10000}); // задаваме му максимална стойност на файловете да бъде 10 KiB
readStream.on('data',(chunk) => { // когато имаш chunk за четене искам да изпълниш едикво си
    console.log('Read chuck');
    log(chunk)
})
readStream.on('end', () => {
    console.log('Reading data is finished')
})
