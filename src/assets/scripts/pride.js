const observer = new IntersectionObserver(entries => {
  const { target, isIntersecting } = entries[0]

  const id = target.getAttribute('id')
  console.log(isIntersecting ? "SHOWING" : "HIDING", id)

  if (isIntersecting) {
    const currentActive = document.querySelector('[data-slide-toc] a.active')
    if (currentActive) currentActive.classList.remove('active')

    const anchor = document.querySelector(`[data-slide-toc] a[href="#${id}"]`)
    anchor.classList.add('active')
  }
})

document.querySelectorAll('.fullscreen-slider .slide')
  .forEach(slide => observer.observe(slide))