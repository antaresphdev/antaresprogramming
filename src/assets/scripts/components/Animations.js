const observer = new IntersectionObserver((entries) => {
  const isIntersecting = entries[0].isIntersecting;

  document
    .querySelector(".navigation-bar")
    .classList.toggle("bg--primary", !isIntersecting);

  document
    .querySelector(".navigation-bar")
    .classList.toggle("shadow", !isIntersecting);

  document
    .querySelector(".navigation-bar ul")
    .classList.toggle("padding-block--xs", !isIntersecting);

  document
    .querySelector(".navigation-bar .logo")
    .classList.toggle("small", !isIntersecting);
});

observer.observe(document.querySelector("[data-intersection-trigger]"));
