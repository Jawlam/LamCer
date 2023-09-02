'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**contact */

   /* VARIABLES */
// Prénom
let casePrenom = document.getElementById('prenom');
let aidePrenom = document.getElementById('aidePrenom');
let userPrenom = "";
// Nom
let caseNom = document.getElementById('nom');
let aideNom = document.getElementById('aideNom');
let userNom = "";
// Email
let caseEmail = document.getElementById('email');
let aideEmail = document.getElementById('aideEmail');
let userEmail = "";
// Tel
let caseTel = document.getElementById('tel');
let aideTel = document.getElementById('aideTel');
let userTel = "";
// Message
let caseMessage = document.getElementById('message');
let aideMessage = document.getElementById('aideMessage');
let userMessage = "";

let regexEmail = /.+@.+\..+/;


// VERIFICATION PRENOM
casePrenom.addEventListener('blur', function(e) {
    userPrenom = e.target.value;
    if (userPrenom.length < 3) {
        aidePrenom.style.color = "#EA2027";
        aidePrenom.textContent = "Prénom trop court !";
    } else {
        aidePrenom.style.color = "#009432";
        aidePrenom.textContent = "Prénom correct !";
    }
    console.log(userPrenom);
})

// VERIFICATION EMAIL
caseEmail.addEventListener('blur', function(e) {
    userEmail = e.target.value;
    if (!regexEmail.test(userEmail)) {
        aideEmail.style.color = "#EA2027"
        aideEmail.textContent = "Email incorrect !";
    } else {
        aideEmail.style.color = "#009432"
        aideEmail.textContent = "Email correct !";
    }
})