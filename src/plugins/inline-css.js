const { JSDOM } = require('jsdom')
const { PurgeCSS } = require('purgecss')
const fs = require('fs')

module.exports = (eleventyConfig, options = {}) => {
  eleventyConfig.addTransform('myInlineCSS', async (content, outputPath) => {
    console.log('[INLINE CSS]', outputPath)
    if (outputPath.endsWith('.html')) {
      const purgeCSS = new PurgeCSS()
      const dom = new JSDOM(content)
      /** @type {Document} */
      const document = dom.window.document
      const srcPrefix = '/../../public'

      const stylesheetLinks = document.querySelectorAll(
        'link[rel=stylesheet][href]'
      )
      stylesheetLinks.forEach(async link => {
        const src = link.href
        const cssPath = __dirname + srcPrefix + src
        const rawCSS = await fs.promises.readFile(cssPath, 'utf-8')
        // console.log('[INLINE CSS] Raw stylesheet:', rawCSS.length, src)

        const files = await purgeCSS.purge({
          content: [
            {
              raw: content,
              extension: 'html'
            }
          ],
          css: [__dirname + srcPrefix + src]
        })

        const styles = files
          .map(file => {
            const style = document.createElement('style')
            console.log(
              '[INLINE CSS] Writing',
              file.file,
              `(${file.css.length} characters)`
            )
            style.innerText = file.css
            return style
          })
          .reverse()

        styles.forEach(style => {
          console.log('[INLINE CSS] Inner text:', style.innerText)
          link.insertAdjacentElement('afterend', style)
        })
        link.remove()
      })

      return dom.serialize()
    }
    return content
  })
}
