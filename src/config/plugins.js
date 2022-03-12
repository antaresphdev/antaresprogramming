module.exports = {
  readingTime: function () {
    return { plugin: require('eleventy-plugin-reading-time') }
  },

  toc: function () {
    return {
      plugin: require('eleventy-plugin-nesting-toc')
    }
  },

  syntaxHighlight: function () {
    return { plugin: require('@11ty/eleventy-plugin-syntaxhighlight') }
  },

  responsiveImages: function () {
    return { plugin: require('eleventy-plugin-responsive-images') }
  },

  eleventyGoogleFonts: function () {
    return { plugin: require('eleventy-google-fonts') }
  },

  purgeCss: function () {
    return {
      isProduction: true,
      plugin: require('eleventy-plugin-purgecss'),
      options: {
        config: './purgecss.config.js',
        quiet: false
      }
    }
  },

  tinyHTML: function () {
    return {
      isProduction: false,
      plugin: require('@sardine/eleventy-plugin-tinyhtml'),
      options: {
        caseSensitive: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        decodeEntities: true,
        html5: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        preserveLineBreaks: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        sortAttributes: true,
        useShortDoctype: true
      }
    }
  },

  pluginRss: function () {
    return { plugin: require('@11ty/eleventy-plugin-rss') }
  },

  safeLinks: function () {
    return {
      isProduction: false,
      plugin: require('@sardine/eleventy-plugin-external-links')
    }
  },

  tinySVG: function () {
    return {
      isProduction: false,
      plugin: require('@sardine/eleventy-plugin-tinysvg'),
      options: {
        baseUrl: 'public/assets/images'
      }
    }
  },

  /* inlineCSS: function () {
    return {
      isProduction: true,
      plugin: require('../plugins/inline-css/index'),
      options: {
        input: 'public/',
        purgeCSS: {
          config: './purgecss.config.js',
          quiet: false
        }
      }
    }
  }, */
}
