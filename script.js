// =====================================
// HELLO KITTY SURPRISE
// script.js
// =====================================

const intro = document.getElementById("intro");
const startButton = document.getElementById("startButton");

const welcome = document.querySelector(".welcome");
const surprise = document.getElementById("surprise");

const surpriseButton = document.getElementById("surpriseButton");

const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");


// =====================================
// TYPEWRITER INTRO
// =====================================

const introText =
"Because every Hello Kitty obsessed girl deserves a little surprise... 🎀💗";

let introIndex = 0;

function typeIntro(){

    if(introIndex < introText.length){

        intro.textContent += introText.charAt(introIndex);

        introIndex++;

        setTimeout(typeIntro,45);

    }

}


// =====================================
// START PAGE
// =====================================

window.addEventListener("load", () => {

    popup.classList.add("hidden");

    typeIntro();

});


// =====================================
// OPEN THE SURPRISE
// =====================================

startButton.addEventListener("click", () => {

    welcome.style.display = "none";

    surprise.classList.remove("hidden");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// =====================================
// OPEN FINAL POPUP
// =====================================

surpriseButton.addEventListener("click", () => {

    popup.classList.remove("hidden");

    createBows();

});


// =====================================
// CLOSE POPUP
// =====================================

closeButton.addEventListener("click", () => {

    popup.classList.add("hidden");

});


// =====================================
// TAP OUTSIDE POPUP TO CLOSE
// =====================================

popup.addEventListener("click", (event) => {

    if(event.target === popup){

        popup.classList.add("hidden");

    }

});


// =====================================
// LITTLE BOW SURPRISE
// =====================================

function createBows(){

    for(let i = 0; i < 12; i++){

        const bow = document.createElement("div");

        bow.textContent = "🎀";

        bow.style.position = "fixed";

        bow.style.left =
            (window.innerWidth / 2) + "px";

        bow.style.top =
            (window.innerHeight / 2) + "px";

        bow.style.fontSize =
            (18 + Math.random() * 20) + "px";

        bow.style.pointerEvents = "none";

        bow.style.zIndex = "2000";

        bow.style.transition =
            "transform 1.3s ease-out, opacity 1.3s ease-out";

        document.body.appendChild(bow);


        const x =
            (Math.random() - 0.5) * 400;

        const y =
            (Math.random() - 0.5) * 400;


        setTimeout(() => {

            bow.style.transform =
                `translate(${x}px,${y}px) rotate(${Math.random()*360}deg)`;

            bow.style.opacity = "0";

        },50);


        setTimeout(() => {

            bow.remove();

        },1400);

    }

}