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
};
