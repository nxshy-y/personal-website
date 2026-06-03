// --------------------
// ELEMENTS
// --------------------

const animatedElements = [
  ...document.querySelectorAll(".contact-inputs"),
  ...document.querySelectorAll(".skill-shadow"),
  ...document.querySelectorAll(".Biography"),

  document.querySelector(".timeline"),
  document.querySelector(".Intro"),
  document.querySelector(".title"),
  document.querySelector(".email-submit"),

  document.querySelector("#name"),
  document.querySelector("#degree"),
  document.querySelector("#my-form")
];

const sections = document.querySelectorAll("section");

const pageName = document.querySelector("#page-name");

const messages = [
  document.querySelector("[data-fs-success]"),
  document.querySelector("[data-fs-error]")
];


// --------------------
// ANIMATION OBSERVER
// --------------------

const animationObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    entry.target.classList.toggle("animate", entry.isIntersecting);
    entry.target.classList.toggle("in-view", entry.isIntersecting);
    entry.target.classList.toggle("active", entry.isIntersecting);

  });

}, {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
});


// Observe animated elements
animatedElements.forEach((element) => {

  if (element) {
    animationObserver.observe(element);
  }

});


// --------------------
// PAGE NAME OBSERVER
// --------------------

const pageObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      pageName.textContent = entry.target.dataset.name;

    }

  });

}, {
  threshold: 0.5
});


// Observe sections
sections.forEach((section) => {

  pageObserver.observe(section);

});


// --------------------
// FORM MESSAGE OBSERVER
// --------------------

const messageObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    entry.target.classList.toggle("remove", entry.isIntersecting);

  });

});


// Observe form messages
messages.forEach((message) => {

  if (message) {
    messageObserver.observe(message);
  }

});

// --------------------
// FORM MESSAGE OBSERVER
// --------------------

const aboutSection = document.querySelector("#About-me");
const introSection = document.querySelector("#Intro");

const navbar = document.querySelector(".navbar");


const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            navbar.classList.add("active");

        } 
        if (entry.target.classList.contains("Intro") && entry.isIntersecting) {
          navbar.classList.remove("active");
        }

    });

}, {
    threshold: 0.5
});


observer.observe(aboutSection);
observer.observe(introSection);

/* THIS IS FOR NAVBAR ANIMATION */ 

const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".fa-solid.fa-bars");
const navPage = document.querySelector(".nav_page");
const navText = document.querySelectorAll(".nav-text a");

menuIcon.addEventListener('mouseenter', () => { 
    navPage.style.opacity = '1';
    navPage.style.height = '17vh';
    navText.forEach((text) => {
        text.style.pointerEvents = 'auto';
    });
});

menu.addEventListener('mouseleave', () => {
    navPage.style.opacity = '0';
    navPage.style.height = '0vh';
    navText.forEach((text) => {
        text.style.pointerEvents = 'none';
    });

});