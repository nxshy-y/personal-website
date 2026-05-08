// --------------------
// SELECTORS
// --------------------
const elementsToObserve = [
  document.querySelector(".timeline"),
  document.querySelector(".Intro"),
  document.querySelector("#name"),
  document.querySelector("#degree"),
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
const form = document.getElementById("contact-section");
const successCard = document.getElementById("success-card");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) throw new Error();

    successCard.classList.remove("hidden");
    successCard.classList.add("show");
    form.reset();

  } catch (err) {
    alert("Error sending message.");
  }
}); 


// --------------------
// DELAY HANDLING
// --------------------

// Source - https://stackoverflow.com/a/65994348
// Posted by Mylio Chang
// Retrieved 2026-05-07, License - CC BY-SA 4.0
//use nth of type if u want to count a specific card that's a child 
function generateDelayDivCss() {
  let cssStrings = [1, 2, 3].map(
    (n, idx) =>
      `.timeline.in-view .circle:nth-child(${idx + 1}) {
      animation-delay: ${idx * 6}s;
    }`
  );
  return cssStrings.join("");
}

let css = generateDelayDivCss();
let style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);
// then append the css from the result of the generateDelayDivCss() to the document
// let css = generateDelayDivCss();
// create <style> element and append to document







