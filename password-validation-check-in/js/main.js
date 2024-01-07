let pass = document.getElementById('pass');
let toggleBtn = document.getElementById('toggleBtn');


let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minlength = document.getElementById('length');

function checkPassword(data){

  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const special = new RegExp('(?=.*[!@#\$%\^&\*])');
  const length = new RegExp('(?=.{8,})');

  // lower
  if(lower.test(data)){
    lowerCase.classList.add('valid');
  } else {
    lowerCase.classList.remove('valid');
  }
  // upper
  if(upper.test(data)){
    upperCase.classList.add('valid');
  } else {
    upperCase.classList.remove('valid');
  }
  // number
  if(number.test(data)){
    digit.classList.add('valid');
  } else {
    digit.classList.remove('valid');
  }
  // special
  if(special.test(data)){
    specialChar.classList.add('valid');
  } else {
    specialChar.classList.remove('valid');
  }
  // length
  if(length.test(data)){
    minlength.classList.add('valid');
  } else {
    minlength.classList.remove('valid');
  }
}


// Show\Hide 
toggleBtn.onclick = function(){
  if(pass.type === 'password'){
    pass.setAttribute('type', 'text');
    toggleBtn.classList.add('hide');
  } else {
    pass.setAttribute('type', 'password');
    toggleBtn.classList.remove('hide');
  }
}





