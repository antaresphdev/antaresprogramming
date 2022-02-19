module.exports = config => ({ dom }) =>
  Array
    .from(dom.window.document.querySelectorAll(config.selector))
    .map(elem => ({ dom, elem }))
    