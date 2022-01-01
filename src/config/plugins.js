module.exports = {
  readingTime: function() {
    return require("eleventy-plugin-reading-time");
  },

  toc: function () {
    return require("eleventy-plugin-nesting-toc")
  },

  syntaxHighlight: function () {
    return require("@11ty/eleventy-plugin-syntaxhighlight");
  }
};
