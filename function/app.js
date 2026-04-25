
const timeline = document.querySelector(".timeline");
const skills = document.querySelectorAll(".skill-group");
const card = document.querySelectorAll(".card");
const circle = document.querySelectorAll(".circle");
const bio = document.querySelectorAll(".Biography");
const slides = document.querySelectorAll(".slides");
const introLine = document.querySelector(".Intro")
const name = document.querySelector("#name");
const degree = document.querySelector("#degree");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("animate");
        }else{
            entry.target.classList.remove("animate"); // allows restart
        }

    });
}, { threshold: 0.2,
     rootMargin: "0px 0px -50px 0px"
 });

observer.observe(timeline);  

observer.observe(introLine) ;
observer.observe(name);
observer.observe(degree);


bio.forEach(bio => {
    observer.observe(bio);
})

circle.forEach(circle => {
    observer.observe(circle);
})

slides.forEach(slides => {
    observer.observe(slides);
})

skills.forEach(skill => {
    observer.observe(skill);
}) 


card.forEach(card => {
    observer.observe(card);
})










