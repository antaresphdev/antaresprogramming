const { JSDOM } = require('jsdom')
const path = require('path')

module.exports = function(config) {
  const getStyleLinks = require('./getStyleLinks')(config)
  const getLocalPath = require('./getLocalPath')(config)
  const localPathExists = require('./localPathExists')(config)
  const getStylesheet = require('./getStylesheet')(config)
  const minifyStyle = require('./minifyStyle')(config)
  const replaceElem = require('./replaceElem')(config)

  function isHtml(outputPath) {
    return outputPath && path.extname(outputPath) === '.html'
  }

  return async function(rawContent, outputPath) {
    if (!isHtml(outputPath)) {
      return rawContent
    }

    const dom = new JSDOM(rawContent)

    const styles = await Promise.all(
      getStyleLinks({ dom })
        .map(getLocalPath)
        .filter(localPathExists)
        .map(getStylesheet(rawContent))
    )

    styles
      .map(minifyStyle)
      .map(replaceElem)

    return dom.serialize()
  }
}