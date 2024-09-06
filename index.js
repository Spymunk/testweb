const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 10000);
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Assuming you want to get an element by its ID "dropdown"
let list = document.getElementById("dropdown");

// If you want to do something with the 'list' element, you would continue here
function handleDropdown() {
    // Example: Toggle dropdown visibility
    if (list) {
        list.classList.toggle('visible');
    }
}

// Assuming you want to attach this function to an event
document.querySelector('.dropdown-toggle').addEventListener('click', handleDropdown);





document.getElementById("accountForm").addEventListener("submit", function (event) {

    event.preventDefault();
    createAccount();

});

function createAccount() {

    alert("Account created successfully!");
    window.location.href = "/index.html";
}

