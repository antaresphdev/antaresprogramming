const path = require('path')

module.exports = config => ({ elem, ...rest }) => {
  return {
    ...rest,
    elem,
    from: path.join(process.cwd(), config.input, elem.href)
  }
}