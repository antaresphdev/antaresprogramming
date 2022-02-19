module.exports = {
  // icons: function () {
  //   return { 'src/assets/icons': 'assets/icons' }
  // },

  images: function () {
    let environmentIsProduction = process.env.ELEVENTY_ENV === 'production'
    environmentIsProduction = process.env.ELEVENTY_ENV === 'development' // remove this in production
    if (environmentIsProduction) return { 'src/assets/images': 'assets/images' }
    else return
  },

  fonts: function () {
    return { 'src/assets/fonts': 'assets/fonts' }
  },

  files: function () {
    return { 'src/assets/files': 'assets/files' }
  },

  root: function () {
    return { 'src/assets/root': '/' }
  }
}
