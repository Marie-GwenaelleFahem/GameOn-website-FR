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

const prenom = document.getElementById('first');
const nom = document.getElementById('last');
const email = document.getElementById('email');
const dateDeNaissance = document.getElementById('birthdate');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
formData.addEventListener('text-control', (e) => {
  e.preventDefault();

  checkInputs();
})

// checking inputs function
function checkInputs(){
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim();
  const birthdate = birthdate.value.trim();

  if(firstName === '') {
    setErrorFor(first, 'Entrée incorrecte');
  } else {
    setSuccessFor(first);
  }
}

function setErrorFor(input, message) {
  const formData = input.parentElement;
  const small = formData.querySelector('small');

  small.innerText = message;

  formData.className = 'form-data error';
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// regex
const regexChar = /\([A-Z])(a-z)/w
