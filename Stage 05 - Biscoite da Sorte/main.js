const fortuneCookie = document.querySelector("#fortuneCookie");
const newCookie = document.querySelector("#newCookie");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
let phrase = Math.round(Math.random(0, 3) * 3);
const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "A maior de todas as torres começa no solo.",
  "Todas as coisas são difíceis antes de se tornarem fáceis.",
];
let cookiePhrase = document.querySelector("#cookiePhrase");

function toggleScreen() {
  box1.classList.toggle("hide");
  box2.classList.toggle("hide");
}

function randomFortune() {
  phrase = Math.round(Math.random(0, 3) * 3);
  console.log(phrase);
  cookiePhrase.textContent = phrases[phrase];
  toggleScreen();
}

function newPhrase (event) {
  event.preventDefault();
  toggleScreen();
}

box1.addEventListener("click", randomFortune);
box2.addEventListener("click", newPhrase);