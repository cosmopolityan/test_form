const contactForm = document.querySelector('.contact-form');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const modalText = document.querySelector('.modal-text');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const messageError = document.querySelector('#messageError');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let name = nameInput.value;
  let email = emailInput.value;
  let message = messageInput.value;

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  let isValid = true;

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  if (name === '') {
    nameError.textContent = 'Пожалуйста, введите Ваше имя.';
    isValid = false;
  }

  if (email === '') {
    emailError.textContent = 'Пожалуйста, введите Ваш email.';
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = 'Пожалуйста, введите действительный email.';
    isValid = false;
  }

  if (message === '') {
    messageError.textContent = 'Пожалуйста, введите Ваше сообщение.';
    isValid = false;
  }

  if (isValid) {
    modal.style.display = "block";
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    setTimeout(function () {
      modal.classList.add("fade-out");
    }, 3000);

    setTimeout(function () {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
    }, 3500);
  }
});

closeButton.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});

emailInput.addEventListener('invalid', function (event) {
  event.preventDefault();
  emailError.textContent = 'Пожалуйста, введите действительный email.';
});

emailInput.addEventListener('input', function (event) {
  emailError.textContent = '';
});

nameInput.addEventListener('input', function (event) {
  nameError.textContent = '';
});

messageInput.addEventListener('input', function (event) {
  messageError.textContent = '';
});
