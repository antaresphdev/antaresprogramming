module.exports = {
  readingTime: function () {
    return { plugin: require("eleventy-plugin-reading-time") };
  },

  toc: function () {
    return {
      plugin: require("eleventy-plugin-nesting-toc"),
    };
  },

  syntaxHighlight: function () {
    return { plugin: require("@11ty/eleventy-plugin-syntaxhighlight") };
  },

  responsiveImages: function () {
    return { plugin: require("eleventy-plugin-responsive-images") };
  },

  eleventyGoogleFonts: function () {
    return { plugin: require("eleventy-google-fonts") };
  },

  purgeCss: function () {
    return {
      plugin: require("eleventy-plugin-purgecss"),
      options: {
        config: "./purgecss.config.js",
        quiet: false
      }
    };
  },
};
