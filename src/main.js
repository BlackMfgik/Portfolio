const dot = document.getElementById("dot");
const ring = document.getElementById("ring");

document.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});

document.addEventListener("mouseleave", () => {
  dot.style.opacity = "0";
  ring.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  dot.style.opacity = "1";
  ring.style.opacity = "1";
});

const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in");
    });
  },
  { threshold: 0.08 },
);

document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

function animateBars(card) {
  card.querySelectorAll(".bar-fill").forEach((bar) => {
    bar.style.width = bar.dataset.w + "%";
  });
}

const barObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) animateBars(e.target);
    });
  },
  { threshold: 0.3 },
);

document.querySelectorAll(".skill-card").forEach((c) => barObs.observe(c));
