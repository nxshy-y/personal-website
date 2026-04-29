// --------------------
// SELECTORS
// --------------------
const elementsToObserve = [
  document.querySelector(".timeline"),
  document.querySelector(".Intro"),
  document.querySelector("#name"),
  document.querySelector("#degree"),
  ...document.querySelectorAll(".skill-group"),
  ...document.querySelectorAll(".card"),
  ...document.querySelectorAll(".circle"),
  ...document.querySelectorAll(".Biography"),
  ...document.querySelectorAll(".slides")
];

// --------------------
// INTERSECTION OBSERVER
// --------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("animate", entry.isIntersecting);
  });
}, {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
});

// Observe everything
elementsToObserve.forEach(el => {
  if (el) observer.observe(el); // avoids null errors
});

// --------------------
// FORM HANDLING
// --------------------
const form = document.getElementById("contact-form");
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







