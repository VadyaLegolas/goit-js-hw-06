// Завдання 8
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
  form: document.querySelector(".login-form"),
  inputEmail: document.querySelector('input[type="email"]'),
  inputPassword: document.querySelector('input[type="password"]'),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  const elements = {};
  if (email.value != "" && password.value != "") {
    elements[email.name] = email.value;
    elements[password.name] = password.value;
  } else {
    alert("всі поля повинні бути заповнені");
    return;
  }

  console.log("Email: ", elements.email);
  console.log("Password: ", elements.password);
  e.currentTarget.reset();
}
