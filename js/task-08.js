// const elements = {
//   form: document.querySelector(".login-form"),
//   mail: document.querySelector('[name = "email"]'),
//   pass: document.querySelector('[name = "password"]'),
//   btn: document.querySelector('[type = "submit"]'),
// };
// console.log(elements);

const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerForm);

function handlerForm(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  console.log(email.value, password.value);

  if (!email.value || !password.value) {
    alert("Заповніть усі поля!");
  } else {
    console.log({ Email: email.value, Password: password.value });
    event.currentTarget.reset();
  }
}
