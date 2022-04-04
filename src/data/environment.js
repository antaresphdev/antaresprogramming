module.exports = {
  domain: process.env.ELEVENTY_ENV === 'production'
    ? "https://www.antaresph.dev"
    : "http://localhost:8080"
}