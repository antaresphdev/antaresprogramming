const fs = require('fs')

module.exports = config => ({ from }) => fs.existsSync(from)