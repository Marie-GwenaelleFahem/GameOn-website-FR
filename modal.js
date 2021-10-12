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
const formData = document.getElementById('reserve');
const modal = document.getElementById('modal');
const btnCloseModal = document.querySelectorAll(".button-submit")


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
  const checkString = /^[a-zA-Z]{2}/;
  const prenom = document.getElementById("first");
  const error = document.getElementById("error-prenom");
  if(checkString.test(prenom.value) !=true) {
    prenom.classList.add("input-error");
    error.innerText = "Veuillez entrer 2 caractères ou plus dans le champ du prénom";
    return false;
  } else {
    prenom.classList.remove("input-error");
    prenom.classList.add("input-validate");
    error.innerText = "";
    return true;
  }
}

// Vérifie si le champ nom possède au moins 2 caractères
function validateNom() {
  const checkString = /^[a-zA-Z]{2}/;
  const nom = document.getElementById("last");
  const error = document.getElementById("error-nom");
  if(checkString.test(nom.value) !=true) {
    nom.classList.add("input-error");
    error.innerText = "Veuillez entrer 2 caractères ou plus dans le champ du nom";
    return false;
  } else {
    nom.classList.remove("input-error");
    nom.classList.add("input-validate");
    error.innerText = "";
    return true;
  }
}

// Vérifie si le champ email est valide
function validateEmail() {
  const checkMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = document.getElementById("email");
  const error = document.getElementById("error-email");
  if(checkMail.test(email.value) !=true) {
    email.classList.add("input-error");
    error.innerText = "Veuillez entrer un email valide";
    return false;
  } else {
    email.classList.remove("input-error");
    email.classList.add("input-validate");
    error.innerText = "";
    return true;
  }
}

// Vérifie la validité de la date de naissance
function validateBirthdate() {
  const checkDate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  const birthdate = document.getElementById("birthdate");
  const error = document.getElementById("error-birthdate");
    if (checkDate.test(birthdate.value) !=true) {
      birthdate.classList.add("input-error");
      error.innerText = "Veuillez entrer une date de naissance valide";
    return false;
    }
    birthdate.classList.add("input-validate");
    birthdate.classList.remove("input-error");
    error.innerText = "";
      return true;
  }

// Vérifie qu'un nombre soit entré dans le champs correspondant
function validateQuantity() {
  const checkNumber = /^0*(?:[0-9]?|100)$/;
  const quantity = document.getElementById("quantity");
  const error = document.getElementById("error-quantity");
    if (checkNumber.test(quantity.value) !=true) {
      quantity.classList.add("input-error");
      error.innerText = "Veuillez entrer un nombre";
      return false;
    }
    quantity.classList.remove("input-error");
    quantity.classList.add("input-validate");
    error.innerText = "";
      return true;
}

// Vérifie qu'une ville soit séléctionnée 
function validateCity() {
  const cities = document.querySelectorAll("input[type=radio]");
  const error = document.getElementById("error-city");
  for (i = 0; i < cities.length; i++) {
    if(cities[i].checked) {
      error.innerText = "";
      return true;
    }
  }
    error.innerText = "Veuillez choisir une option";
    return false;
  }

// Vérifie que les conditions d'utilisations soient acceptées  
function validateTerms() {
  const terms = document.querySelector('#acceptConditions');
  const error = document.getElementById('error-terms');
  if (terms.checked !=false) {
    error.innerText = "";
    return true;
  } else {
    error.innerText = "Vous devez accepter les conditions d'utilisation";
    return false;
  }
}

//Fonction qui valide les informations du formulaire et affiche un message
function validateForm (event) {
  event.preventDefault();
  // if (validatePrenom() === false) {
  //   return false;
  // }
  // if (validateNom() === false) {
  //   return false;
  // }
  // if (validateEmail() === false) {
  //   return false;
  // }
  // if (validateBirthdate() === false) {
  //   return false;
  // }
  // if (validateQuantity() === false) {
  //   return false;
  // }
  // if (validateCity() === false) {
  //   return false;
  // }
  // if (validateTerms() === false) {
  //   return false;
  const isFormValid = () => validatePrenom() && validateNom() && validateEmail() && validateBirthdate() && validateQuantity() && validateCity() && validateTerms()
  if (isFormValid() !=true) {
    return false;
    } else {
      formData.remove();
      const modal = document.querySelector("div.modal-body");
      const message = document.createElement("p");
      message.classList.add("message-validation");
      message.textContent = "Merci ! Votre réservation a été reçue";
      modal.appendChild(message);
      const btnCloseModal = document.createElement("button");
      btnCloseModal.classList.add("button-submit");
      btnCloseModal.textContent = "Fermer";
      btnCloseModal.addEventListener("click", closeModal);
      modal.appendChild(btnCloseModal);
      return true;
    }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modal.style.display = 'none';
}


