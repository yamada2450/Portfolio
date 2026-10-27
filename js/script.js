const targets = document.querySelectorAll(
  ".section, .work-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

targets.forEach((target) => {
  target.classList.add("reveal");
  observer.observe(target);
});