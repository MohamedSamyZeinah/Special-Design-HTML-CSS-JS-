// Select landing Page
let landingPage = document.querySelector(".landing-page");
landingPage.style.transition = "ease 0.3s";

// Define Array Of imgs

let imgs = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];


setInterval(() => {
    // Generate Random Number
    let randomNumber = Math.floor(Math.random() * imgs.length);
    landingPage.style.backgroundImage = 'url("imgs/'+imgs[randomNumber]+'")';
}, 10000);