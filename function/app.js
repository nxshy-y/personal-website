// --------------------
// SELECTORS
// --------------------
const elementsToObserve = [
  document.querySelector(".timeline"),
  document.querySelector(".Intro"),
  document.querySelector("#name"),
  document.querySelector("#degree"),
  document.querySelector(".title"),
  ...document.querySelectorAll(".skill-group"),
  ...document.querySelectorAll(".Biography")
];

// --------------------
// INTERSECTION OBSERVER
// --------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("animate", entry.isIntersecting);
    entry.target.classList.toggle("in-view", entry.isIntersecting);
  });
}, {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px"
});

// Observe everything
elementsToObserve.forEach(el => {
  if (el) observer.observe(el); // avoids null errors
});

// --------------------
// FORM HANDLING
// --------------------

const messages = [
  document.querySelector("[data-fs-success]"),
  document.querySelector("[data-fs-error]")
];

const msg_observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("remove", entry.isIntersecting);
  })
});

messages.forEach(msg => {
  if (msg) msg_observer.observe(msg); // avoids null errors
});
















