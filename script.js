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

        // Scroll back to top
        if(href === "#")
           window.scrollTo({
              top: 0,
              behaviour: "smooth",
           });


           // Scroll to other links
           if (href !== "#" && href.startsWith('#')){
             const sectionEl = document.querySelector(href);
             sectionEl.scrollIntoView({ behaviour: "smooth" });
           }

           // Close mobile navigation
           if(link.classList.contains("main-nav-link"))
           headerEl.classList.toggle("nav-open");
    });
});
const sectionHero = document.querySelector(".section-hero") 

const obs = new IntersectionObserver(
    function(entries) {
       const ent = entries[0];
       console.log(ent);

       if(ent.intersecting === false) {
         document.body.classList.add("sticky");  
       }
    }, 
    {
        // In the viewport
        root: null,
        threshold: 0,
    })
obs.observe(sectionHero);

// Fixing flexbox gap property missing in some Safari versions
function  checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
}









