function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById('modal');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
formData.addEventListener("click", validatePrenom());
formData.addEventListener("click", validateNom());
formData.addEventListener("click", validateEmail());
formData.addEventListener("click", validateBirthdate());

// close modal
function modalDisplay(displayStyle) {
  modal.style.display = displayStyle 
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// checking inputs functions
function validatePrenom() {
  // regex 
  let checkString = /^[a-zA-Z]{2}/;
  // récupération des éléments du formulaire
  let prenom = document.getElementById("first");
  let error = document.getElementById("error-prenom");
  // tester si les conditions sont remplies
  if(checkString.test(prenom.value) === false) {
    prenom.classList.add("input-error");
    error.innerText = "Veuillez entrer 2 caractères ou plus dans le champ du prénom";
    return false;
  } else {
    prenom.classList.remove("input-error");
    prenom.classList.add("input-validate");
    prenom.innerText = "";
    return true;
  }
}

function validateNom() {
  let checkString = /^[a-zA-Z]{2}/;
  let nom = document.getElementById("last");
  let error = document.getElementById("error-nom");
  if(checkString.test(nom.value) === false) {
    nom.classList.add("input-error");
    error.innerText = "Veuillez entrer 2 caractères ou plus dans le champ du nom";
    return false;
  } else {
    nom.classList.remove("input-error");
    nom.classList.add("input-validate");
    nom.innerText = "";
    return true;
  }
}

function validateEmail() {
  let checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let email = document.getElementById("email");
  let error = document.getElementById("error-email");
  if(checkMail.test(email.value) === false) {
    email.classList.add("input-error");
    error.innerText = "Veuillez entrer un email valide";
    return false;
  } else {
    email.classList.remove("input-error");
    email.classList.add("input-validate");
    email.innerText = "";
    return true;
  }
}

function validateBirthdate() {
  let birthdate = document.querySelectorAll("input[type=date]");
  let error = document.getElementById("error-birthdate");
  for (i = 0; i < birthdate.length; i++) {
    if (birthdate[i].checked) {
      error.innerText = "";
      return true;
    }
    email.innerText = "Veuillez entrer une date de naissance valide";
    return false;
  }
}

function validateCity() {
  let cities = document.querySelectorAll("input[type=radio]");
  let error = document.getElementById("error_city");
  for (i = 0; i < cities.length; i++) {
    if(cities[i].checked) {
      error.innerText = "";
      return true;
    }
    email.innerText = "Veuillez choisir une option";
    return false;
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// regex

let checkString = /^[a-zA-Z]{2}/;
let checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

