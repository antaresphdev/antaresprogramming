const passthroughs = require('./src/config/passthroughs')
const collections = require('./src/config/collections')
const filters = require('./src/config/filters')
const watchtargets = require('./src/config/watchtargets')
const plugins = require('./src/config/plugins')
const { srcset, src } = require('./src/config/shortcodes')

require('dotenv').config()

module.exports = function (eleventyConfig) {
  console.log('Adding shortcode: src')
  eleventyConfig.addShortcode('src', src)

  console.log('Adding shortcode: srcset')
  eleventyConfig.addShortcode('srcset', srcset)

  // Get passthroughs from /src/config/passthroughs.js
  const passthroughKeys = Object.keys(passthroughs)
  if (passthroughKeys.length > 0)
    passthroughKeys.forEach(passthroughName => {
      eleventyConfig.addPassthroughCopy(passthroughs[passthroughName]())
    })

  // Create collections from /src/config/collections.js
  Object.keys(collections).forEach(collectionName => {
    eleventyConfig.addCollection(collectionName, collections[collectionName])
  })

  // Create filers from /src/config/filters.js
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })

  // Watch these files for changes from /src/config/watchTargets.js
  Object.keys(watchtargets).forEach(watchtargetName => {
    eleventyConfig.addWatchTarget(watchtargets[watchtargetName]())
  })

  // Add Eleventy plugins from /src/config/plugins.js
  let environmentIsProduction = process.env.ELEVENTY_ENV === 'production'
  Object.keys(plugins).forEach(pluginName => {
    let { plugin, options, isProduction } = plugins[pluginName]()
    let shouldAddPlugin = false

    if (isProduction) {
      shouldAddPlugin = environmentIsProduction
    } else {
      shouldAddPlugin = true
    }

    if (shouldAddPlugin) {
      console.log('[PLUGIN] Adding plugin', pluginName)
      if (options) {
        eleventyConfig.addPlugin(plugin, options)
      } else {
        eleventyConfig.addPlugin(plugin)
      }
    }
  })

  // BrowserSync config
  eleventyConfig.setBrowserSyncConfig({
    /* open: true */
  })

  eleventyConfig.addGlobalData('PAYMENT_ENDPOINT', process.env.PAYMENT_ENDPOINT)
  eleventyConfig.addGlobalData('PRICE_ID', process.env.PRICE_ID)
  eleventyConfig.addGlobalData('SITE_BASE', process.env.SITE_BASE)
  eleventyConfig.addGlobalData(
    'TRANSACTION_ENDPOINT',
    process.env.TRANSACTION_ENDPOINT
  )
  eleventyConfig.addGlobalData('EMAIL_ENDPOINT', process.env.EMAIL_ENDPOINT)

  /* CLOUDINARY */
  eleventyConfig.cloudinaryCloudName = 'do1qcjos9'
  eleventyConfig.hostname = 'https://www.antaresph.dev'

  const markdownIt = require('markdown-it')
  const markdownItAnchor = require('markdown-it-anchor')
  const slug = require('slug')

  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      linkify: true,
      typographer: true
    })
      .use(markdownItAnchor, {
        slugify: s => slug(s)
      })
      .use(require('markdown-it-deflist'))
      .use(require('markdown-it-abbr'))
      .use(require('markdown-it-footnote'))
      .use(require('markdown-it-attrs'))
      .disable('code')
  )
  // Always return
  return {
    dir: {
      input: 'src',
      output: 'public',
      includes: 'assets/views',
      layouts: 'assets/views/layouts',
      data: 'data'
    },
    templateFormats: ['njk', 'md', '11ty.js', 'html']
  }
}
