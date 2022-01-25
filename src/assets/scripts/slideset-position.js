import { $, $$ } from './utilities/dom'

const controls = {
  position: $('#css-position'),
  top: $('#css-top'),
  left: $('#css-left'),
  bottom: $('#css-bottom'),
  right: $('#css-right')
}

const orange = $('[data-position=orange]')
const orangeContainer = $('.orange-container')
const blue = $('.viewport .blue.box')
const blueStyles = $('#styles-blue')

controls.position.addEventListener('input', event => {
  console.log(event)
  const value = controls.position.value
  if (value !== 'static') {
    controls.top.parentElement.removeAttribute('hidden')
    controls.left.parentElement.removeAttribute('hidden')
    controls.bottom.parentElement.removeAttribute('hidden')
    controls.right.parentElement.removeAttribute('hidden')
  } else {
    controls.top.parentElement.setAttribute('hidden', '')
    controls.left.parentElement.setAttribute('hidden', '')
    controls.bottom.parentElement.setAttribute('hidden', '')
    controls.right.parentElement.setAttribute('hidden', '')
  }

  orangeContainer.classList.remove('p-relative', 'p-absolute', 'p-fixed')
  blue.classList.remove('p-relative', 'p-absolute', 'p-fixed')
  blueStyles.setAttribute('hidden', '')
  $$('[data-show-on-position]').forEach(div => div.setAttribute('hidden', ''))

  switch (value) {
    case "static":
      $('[data-show-on-position=static]').removeAttribute('hidden')
      break
    case "relative":
      $('[data-show-on-position=relative]').removeAttribute('hidden')
      orangeContainer.classList.add('p-relative')
      break;
    case "absolute":
      $('[data-show-on-position=absolute]').removeAttribute('hidden')
      orangeContainer.classList.add('p-absolute')
      blue.classList.add('p-relative')
      blueStyles.removeAttribute('hidden')
      break
    case "fixed":
      $('[data-show-on-position=fixed]').removeAttribute('hidden')
      orangeContainer.classList.add('p-fixed')
      break;
  }
})

controls.top.addEventListener('input', e => {
  orangeContainer.style.setProperty('--top', controls.top.value)
})

controls.left.addEventListener('input', e => {
  orangeContainer.style.setProperty('--left', controls.left.value)
})

controls.right.addEventListener('input', e => {
  orangeContainer.style.setProperty('--right', controls.right.value)
})


controls.bottom.addEventListener('input', e => {
  orangeContainer.style.setProperty('--bottom', controls.bottom.value)
})
