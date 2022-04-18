module.exports = {
  // posts: function (collection) {
  //     return collection.getFilteredByGlob("src/posts/*.md")
  // },

  pages: function (collection) {
    return collection.getFilteredByGlob([
      "src/collections/pages/*.html",
      "src/collections/pages/*.njk",
      "src/collections/pages/*.md",
    ]);
  },

  basics: function (collection) {
    return collection.getFilteredByGlob([
      "src/collections/basics/*.html",
      "src/collections/basics/*.njk",
      "src/collections/basics/*.md",
    ]);
  },

  tokens: function (collection) {
    return collection.getFilteredByGlob([
      "src/collections/tokens/*.html",
      "src/collections/tokens/*.njk",
      "src/collections/tokens/*.md",
    ]);
  },

  components: function (collection) {
    return collection.getFilteredByGlob([
      "src/collections/components/*.html",
      "src/collections/components/*.njk",
      "src/collections/components/*.md",
    ]);
  }
};
