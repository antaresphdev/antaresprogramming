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

  slidesets: function (collection) {
    return collection.getFilteredByGlob([
      "src/collections/slidesets/*.html",
      "src/collections/slidesets/*.njk",
      "src/collections/slidesets/*.md",
    ]);
  },

  courses: function (collection) {
    return collection.getFilteredByGlob([
      "src/collections/courses/**/*.html",
      "src/collections/courses/**/*.njk",
      "src/collections/courses/**/*.md",
    ]);
  },

  pridePeople: function (collection) {
    return collection.getFilteredByGlob([
      "src/collections/pride/people/*.html",
      "src/collections/pride/people/*.njk",
      "src/collections/pride/people/*.md",
    ]);
  }
};
