const os = require('os')

const currentOS = {
    name : os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    FreeMem : os.freemem()
}

console.log(currentOS)