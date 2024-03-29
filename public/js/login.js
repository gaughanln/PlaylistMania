// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const emailEl = document.querySelector("#email");
//   const passwordEl = document.querySelector("#password");

//   const response = await fetch("/api/users/login", {
//     method: "POST",
//     body: JSON.stringify({ email: emailEl.value.trim(),  password: passwordEl.value.trim() }),
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     document.location.replace("/artist");
//   } else {
//     alert(response.statusText);
//   }
// };

// document
//   .querySelector(".login-form")]
//   .addEventListener("submit", loginFormHandler);

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/artist");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);