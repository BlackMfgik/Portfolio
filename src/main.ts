const dot = document.getElementById("dot") as HTMLElement;
const ring = document.getElementById("ring") as HTMLElement;

const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

if (!isTouch) {
  document.addEventListener("mousemove", (e: MouseEvent) => {
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
}

const burger = document.getElementById("burger") as HTMLButtonElement;
const mobileNav = document.getElementById("mobileNav") as HTMLElement;

burger.addEventListener("click", () => {
  const isOpen = burger.classList.toggle("open");
  mobileNav.classList.toggle("open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
});

mobileNav.querySelectorAll<HTMLAnchorElement>(".mob-link").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  });
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

function animateBars(card: Element): void {
  card.querySelectorAll<HTMLElement>(".bar-fill").forEach((bar) => {
    bar.style.width = (bar.dataset["w"] ?? "0") + "%";
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
