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

const tocLinks = [...document.querySelectorAll(".toc a")].map((link) => {
  const hash = new URL(link.href).hash;
  const target = document.querySelector(hash);

  return { link, target, isActive: false };
});

tocLinks.forEach((a) => {
  const observer = new IntersectionObserver((entries) => {
    const isIntersecting = entries[0].isIntersecting;
    a.isActive = isIntersecting;

    isIntersecting && renderTOC(tocLinks);
  });

  observer.observe(a.target);
});

function renderTOC(links) {
  const activeElementIndex = links.findIndex((a) => a.isActive);
  const activeElement =
    activeElementIndex > -1
      ? links[activeElementIndex]
      : { link: document.createElement("a") };

  links.forEach((a, index) => {
    const li = a.link.closest(".toc li");
    const ol = a.link.closest(".toc li ol");

    if (index <= activeElementIndex) {
      li && li.classList.add("active");
    } else {
      li && li.classList.remove("active");
    }
  });
}
