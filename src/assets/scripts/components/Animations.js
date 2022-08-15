const observer = new IntersectionObserver((entries) => {
  const isIntersecting = entries[0].isIntersecting;

  document
    .querySelector("[data-navbar]")
    .classList.toggle("attached", !isIntersecting);
});

observer.observe(document.querySelector("[data-intersection-trigger]"));
