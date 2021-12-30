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

  announcements: function (collection) {
    return collection.getFilteredByGlob([
      "src/collections/announcements/*.html",
      "src/collections/announcements/*.njk",
      "src/collections/announcements/*.md",
    ]);
  },

  posts: function (collection) {
    return collection.getFilteredByGlob([
      "src/collections/posts/*.html",
      "src/collections/posts/*.njk",
      "src/collections/posts/*.md",
    ]);
  },
};
