// --------------------
// ELEMENTS
// --------------------

const animatedElements = [
  ...document.querySelectorAll(".skill-shadow"),
  ...document.querySelectorAll(".Biography"),

  document.querySelector(".Intro"),
  document.querySelector(".title"),


  document.querySelector("#name"),
  document.querySelector("#degree"),

  
];

const oneTimeElements = [
  ...document.querySelectorAll(".contact-inputs"),
  document.querySelector(".email-submit"),
  document.querySelector("#my-form"),
  document.querySelector(".timeline")
];

const sections = document.querySelectorAll("section");

const pageName = document.querySelector("#page-name");

const successMsg = document.querySelector("[data-fs-success]");


// --------------------
// ANIMATION OBSERVER
// --------------------

const animationObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => { 

    entry.target.classList.toggle("animate", entry.isIntersecting);
  }); 
}, {
  threshold: 0.5
});

const oneTimeObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (!entry.isIntersecting) return;

    entry.target.classList.add("one-time", "in-view");

    oneTimeObserver.unobserve(entry.target);

  });

}, {
  threshold: 0.5
});

//for animations that need to happen once 
oneTimeElements.forEach((element) => {

  if (element) {
    oneTimeObserver.observe(element);
  }
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

const mutationObserver = new MutationObserver(() => {
  
    if (successMsg.hasAttribute("data-fs-active")) {
      
        setTimeout(() => {
            successMsg.classList.add("remove");

            setTimeout(() => {
                successMsg.removeAttribute("data-fs-active");
                successMsg.classList.remove("remove");
            }, 500);
        }, 3000);

    }

});

mutationObserver.observe(successMsg, {
    attributes: true,
    attributeFilter: ["data-fs-active"]
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
const cover = document.querySelector(".cover");
const menu_icon = document.querySelector("nav i");

menuIcon.addEventListener('mouseenter', () => { 
    navPage.classList.add("hover_active");
    cover.classList.add("hover_active");
    menu_icon.classList.add("hover_active");

});

menu.addEventListener('mouseleave', () => {
   navPage.classList.remove("hover_active");
   cover.classList.remove("hover_active");
   menu_icon.classList.remove("hover_active");
});


/* Function for mobile timeline card interaction */

const cards = document.querySelectorAll(".card-btn");


// Add one click handler to every timeline card.
cards.forEach((card) => {
    card.addEventListener("click", () => {
        // Find the parts inside this card that should change visually.
        const slide = card.querySelector(".slide");
        const middle = card.querySelector(".middle");
        const show = card.querySelector(".show");

        // Close any other open card before opening this one.
        cards.forEach((otherCard) => {

          if (otherCard === card) return; // Skip the clicked card.
          
            otherCard.classList.remove("btn-active");
            // Optional chaining: only remove the class if the element exists.
            otherCard.querySelector(".slide")?.classList.remove("btn-active");
            otherCard.querySelector(".middle")?.classList.remove("btn-active");
            otherCard.querySelector(".show")?.classList.remove("btn-active");
        });

        // Check whether this card is currently open.
        const isActive = card.classList.contains("btn-active");

        // Toggle the active state for the card and its inner sections.
        // If it was open, this closes it; if it was closed, this opens it.
        
        card.classList.toggle("btn-active", !isActive);
        slide?.classList.toggle("btn-active", !isActive);
        middle?.classList.toggle("btn-active", !isActive);
        show?.classList.toggle("btn-active", !isActive);
        

        
    });
});

const menu_btn = document.querySelector("nav i");

menu_btn.addEventListener("click", () =>{

    menu_active = menu_btn.classList.contains("btn-active");

    menu_btn.classList.toggle("btn-active",!menu_active);
    navPage?.classList.toggle("btn-active",!menu_active);
    cover?.classList.toggle("btn-active",!menu_active);
});