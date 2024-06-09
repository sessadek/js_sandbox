// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName(e) {
  const input = e.target;
  const regex = /^[a-z]{2,10}$/i;
  if(!regex.test(input.value)) {
    input.classList.add('is-invalid');
  } else {
    input.classList.remove('is-invalid');
  }
}

function validateZip(e) {
  const input = e.target;
  const regex = /^\d{5}(-\d{4})?$/i;
  if(!regex.test(input.value)) {
    input.classList.add('is-invalid');
  } else {
    input.classList.remove('is-invalid');
  }
}

function validateEmail(e) {
  const input = e.target;
  const regex = /^([a-z0-9-_.])+@([a-z])+.([a-z]{2,4})$/i;
  if(!regex.test(input.value)) {
    input.classList.add('is-invalid');
  } else {
    input.classList.remove('is-invalid');
  }
}

function validatePhone(e) {
  const input = e.target;
  const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if(!regex.test(input.value)) {
    input.classList.add('is-invalid');
  } else {
    input.classList.remove('is-invalid');
  }
}


