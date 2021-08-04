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
const first = document.getElementById('first');
const registrationForm = document.querySelector('.registration-form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//first.addEventListener("onchange", validatePrenom());
//formData.addEventListener("click", validateNom());
//formData.addEventListener("click", validateEmail());
//formData.addEventListener("click", validateBirthdate());

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

// Vérifie si le champ prénom possède au moins 2 caractères
function validatePrenom() {
  let checkString = /^[a-zA-Z]{2}/;
  let prenom = document.getElementById("first");
  let error = document.getElementById("error-prenom");
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

// Vérifie si le champ nom possède au moins 2 caractères
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

// Vérifie si le champ email est valide
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
  let checkDate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  let birthdate = document.getElementById("birthdate");
  let error = document.getElementById("error-birthdate");
    if (checkDate.test(birthdate.value) === false) {
      birthdate.innerText = "Veuillez entrer une date de naissance valide";
    return false;
    }
    error.innerText = "";
    birthdate.classList.add("input-validate");
      return true;
  }

function validateQuantity() {
  let checkNumber = /^[0-9]$/;
  let quantity = document.getElementById("quantity");
  let error = document.getElementById("error-quantity");
    if (checkNumber.test(quantity.value) === false) {
      quantity.innerText = "Veuillez entrer un nombre";
      return false;
    }
    error.innerText = "";
    quantity.classList.add("input-validate");
      return true;
}

function validateCity() {
  let cities = document.querySelectorAll("input[type=radio]");
  let error = document.getElementById("error-city");
  for (i = 0; i < cities.length; i++) {
    if(cities[i].checked) {
      error.innerText = "";
      return true;
    }
    error.innerText = "Veuillez choisir une option";
    return false;
  }
}

function validateTerms() {
  let terms = document.querySelector('#acceptConditions');
  let error = document.getElementById('error-terms');
  let termsAreChecked = terms.checked;
  if (termsAreChecked) {
    terms.classList.add("input-error");
    error.innerText = "Vous devez accepter les conditions d'utilisation";
  } else {
    terms.classList.remove("input-error");
    error.innerText = "";
  }
  return termsAreChecked;
}

// Fonction qui vérifie que tout les champs sont valides
const isFormValid = () => validatePrenom() && validateNom() && validateEmail() && validateBirthdate() && validateQuantity() && validateCity() && validateTerms() 

//EventListener pour le bouton submit
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault()
  if (isFormValid()) {
    

  }
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// regex

let checkString = /^[a-zA-Z]{2}/;
let checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

