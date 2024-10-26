"use strict";
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {

    let x = document.getElementsByClassName("mySlides");
    
    if (n >= x.length) { slideIndex = 0; }  // Reset to first slide if at end
    if (n < 0) { slideIndex = x.length - 1; } // Reset to last slide if before first

    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("opacity-100"); // Hide all slides
        x[i].classList.add("opacity-0");       // Set them to invisible
    }
    
    x[slideIndex].classList.remove("opacity-0"); // Show the current slide
    x[slideIndex].classList.add("opacity-100");  // Make it visible
}

// Automatically change slides every 4 seconds (4000ms)
setInterval(function() {
    plusDivs(1);  // Advance to the next slide
}, 4000);
