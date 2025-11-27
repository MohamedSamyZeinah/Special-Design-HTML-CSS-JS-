//start save colors in the local storage
let mainColor = localStorage.getItem("color-option")
if (mainColor !== null){
    document.documentElement.style.setProperty("--main-color", mainColor)

    //remove active class from ul chiled 
    document.querySelectorAll(".color-list li.active").forEach(el => {
            el.classList.remove("active");

            if (el.dataset.color === mainColor){
                el.classList.add("active");
        }
        });
}
//end save colors in the local storage

// Toggle spin class on icon
document.querySelector(".settings-box .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
}
// end spin class on icon


//start color change 
let colorList = document.querySelectorAll(".color-list li")
colorList.forEach(element => {
    element.addEventListener("click",(e) => {
        
        console.log(document.documentElement); // HTML
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        // console.log(document.querySelector(".color-list li.active").classList);
        // document.querySelector(".color-list li.active").classList.remove("active");
        e.target.parentElement.querySelectorAll(".active").forEach(el => {
            el.classList.remove("active");
        })
        element.classList.add("active");
        localStorage.setItem("color-option", e.target.dataset.color)

    })
});
//end color chane 


// start reandom background

let backGroundOption = true;
let backgroundInterval;

let randomImgLocalVar = localStorage.getItem('background_Option');
// console.log(randomImgLocalVar);
// console.log(typeof randomImgLocalVar);

if (randomImgLocalVar === 'true'){
    backGroundOption = true;
}
else{
    backGroundOption = false;
}

document.querySelectorAll('.random-background span').forEach(element => {
    element.classList.remove('active');
});

if (randomImgLocalVar === 'true'){
    document.querySelector('.random-background .yes').classList.add('active');
}
else{
    document.querySelector('.random-background .no').classList.add('active');
}


let spans = document.querySelectorAll(".random-background span")
spans.forEach(span => {
    span.addEventListener("click",(e) => {
        
        e.target.parentElement.querySelectorAll(".active").forEach(el => {
            el.classList.remove("active");
        })
        span.classList.add("active");

        if(e.target.dataset.background === 'yes'){
            backGroundOption = true;
            randomizeImgs();
            localStorage.setItem('background_Option', true);
        }
        else{
            backGroundOption = false ;
            clearInterval(backgroundInterval);
            localStorage.setItem('background_Option', false);
        }
    })
});
// end reandom background


// start landing page

    // Select landing Page
let landingPage = document.querySelector(".landing-page");
landingPage.style.transition = "ease 0.3s";

    // Define Array Of imgs
let imgs = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

function randomizeImgs(){

    if (backGroundOption === true){
        backgroundInterval = setInterval(() => {
        // Generate Random Number
        let randomNumber = Math.floor(Math.random() * imgs.length);
        landingPage.style.backgroundImage = 'url("imgs/'+imgs[randomNumber]+'")';
        }, 1000);
    }
}
randomizeImgs();
// end landing page