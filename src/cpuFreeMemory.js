const si = require('systeminformation');
module.exports = (async function(){
        const memory = await si.mem()
        return memory.free
})()


