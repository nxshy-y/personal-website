const elementsToObserve = document.querySelectorAll(".test");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
    });
});

elementsToObserve.forEach((element) => {
    observer.observe(element);
});