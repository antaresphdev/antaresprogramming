const debug = require('./debug')

module.exports = function(config) {
  return function({ dom, elem, css, from }) {
    debug('Inlining CSS for %s', from)

    const styleElem = dom.window.document.createElement('style')
    styleElem.innerHTML = css
    elem.parentNode.replaceChild(styleElem, elem)
  }
}