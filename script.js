console.log("Hello world!");

const myName = "Jonas Brandt";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);


// MOBILE NAVIGATION
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener('click', function(){
    headerEl.classList.toggle('nav-open');
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log(href);
    });
});













