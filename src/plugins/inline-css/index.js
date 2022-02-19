const { merge } = require('ramda')
const inlineCss = require('./src/inlineCss')

const defaultConfig = {
  input: '', // root directory for CSS files
  cleanCss: {}, // options passed to the `clean-css` constructor, or `false` to disable minification
  purgeCss: {}, // options passed to `PurgeCSS`'s `purge` function, or `false` to disable purging
  selector: 'link[rel="stylesheet"]' // selector used to find stylesheet tags that should be inlined
}

module.exports = function(eleventyConfig, pluginConfig = {}) {
  const config = merge(defaultConfig, pluginConfig)

  eleventyConfig.addTransform('inline-css', inlineCss(config))
}