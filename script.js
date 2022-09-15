let form = document.querySelector('form');
let identifiant = document.getElementById('identifiant');
let password = document.getElementById('password');
let mail = document.getElementById('email');
let image = document.getElementById('changeEye');
let submit = document.getElementById('btn-submit');
let identifiantCheck, passwordCheck, mailCheck;
let info = document.querySelector(".note");
let infoId = document.querySelector(".point-identifiant");
let infoPass = document.querySelector(".point-password");


infoId.addEventListener("mouseenter", () =>{
    info.innerHTML = "votre pseudo doit contenir entre 5 et 12 caracteres";
    info.style.visibility = "visible";
  })

infoId.addEventListener("mouseout", () =>{
    info.innerHTML = "";
    info.style.visibility = "hidden";
  })

infoPass.addEventListener("mouseenter", () =>{
    info.innerHTML = "votre mot de passe doit contenir 10 caracteres, 1 minuscule, 1 masjuscule, 1 caractere special et 1 chiffre";
    info.style.visibility = "visible";
  })

infoPass.addEventListener("mouseout", () =>{
    info.innerHTML = "";
    info.style.visibility = "hidden";
  })

const errorDisplay = (tag, valid) =>{
  const point = document.querySelector('.point-' + tag);
  
  if(!valid){
    point.classList.add("info-return");
    point.classList.remove("info-ok");
  }else {
    point.classList.add("info-ok");
    point.classList.remove("info-return");
  }
}

identifiant.addEventListener("input", (e) => {
let identifiantValue = e.target.value;
  
  if(identifiantValue.length < 5 || identifiantValue.length > 12){
    errorDisplay("identifiant");
   identifiantCheck = null;
}else {
    errorDisplay("identifiant", true);
  identifiantCheck = identifiantValue;
  }})

password.addEventListener("input", (e) =>{
  
let passwordValue = e.target.value;
  
  if(!passwordValue.match(/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)){
  errorDisplay("password");
    passwordCheck = null;
  }else {
    errorDisplay("password", true);
  passwordCheck = passwordValue;

  }})

mail.addEventListener("input", (e) =>{
  
let mailValue = e.target.value;
  if(!mailValue.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
  errorDisplay("email");
    mailCheck = null;
  }else {
    errorDisplay("email", true);
    mailCheck = mailValue;
}})

form.addEventListener('submit', (e) => {

  if(identifiantCheck && passwordCheck && mailCheck){
    
    alert('inscprition validé');

    identifiantValue = "";
    passwordValue = "";
    mailValue = "";

    
  } else {
    e.preventDefault();
    alert('veuillez remplir les champs');
  }
})


// change image

function changeImage() {
  
  if(password.type != "password"){
    password.type = "password";
    image.src = "IMG/eye.png";
  }else {
    password.type = "text";
    image.src = "IMG/eye_open.png";

  }
}











