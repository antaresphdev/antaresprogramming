/**
 * @file Adds event listeners to any HTML Element that has a `value` attribute and toggles the `hidden` attribute of other elements
 */

import { $$ } from "./utilities/dom"
const controls = $$('[data-hide-on-value]:is(select, input, textarea)')

controls.forEach(control => {
  const id = control.id
  const controllables = {}

  const l = [...$$(`[data-controlledby=${id}][data-show-on-value]`)]
    .forEach(s => {
      const value = s.dataset.showOnValue
      controllables[value] = s
    })

  control.addEventListener('input', e => {
    const visibleControllable = Object.keys(controllables)
      .map(key => controllables[key])
      .find(controllable => !controllable.hidden)
    
    visibleControllable.hidden = true
    controllables[control.value].hidden = false
  })

})