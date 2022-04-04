import { $$ } from "./utilities/dom"

const cssControllers = $$("[data-controls-css]:is(input, select, textarea)")
cssControllers.forEach(controller => {
  console.log(cssControllers)
  const selector = controller.dataset.cssSelector
  const property = controller.dataset.cssProperty

  const controllables = [...$$(selector)]

  controller.addEventListener('input', e => {
    controllables.forEach(controllable => {
      console.log("Setting", property, "of", controllable, "to", controller.value)
      controllable.style.setProperty(property, controller.value)
    })
  })
})