const CleanCSS = require('clean-css')
const { identity, merge } = require('ramda')
const debug = require('./debug')

function stringSize(str) {
  return (new TextEncoder().encode(str)).length
}

function minifyCss(config) {
  const cleancss = new CleanCSS(merge({}, config.cleanCss))

  return function({ css, from, ...rest }) {
    const { styles } = cleancss.minify(css)
    
    debug('Minifying %s, saved %d bytes', from, stringSize(css) - stringSize(styles))

    return merge(rest, { css: styles, from })
  }
}

module.exports = function(config) {
  if (!config.cleanCss) {
    debug('config.cleanCss is falsy, skipping CleanCSS minification')
  }

  return config.cleanCss
    ? minifyCss(config)
    : identity
}