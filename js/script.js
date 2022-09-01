let password = document.getElementById("password"),
  confirmPassword = document.getElementById("c-password"),
  error = document.getElementById("errors"),
  formSubmit = document.getElementById("form");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password.value.length < 4 || confirmPassword.value.length < 4) {
    error.innerText = "Password must be at least 4 characters";
  } else {
    if (password.value !== confirmPassword.value) {
      error.innerText = "Password does not match!";
      error.style.color = "red";
    } else {
      error.innerText = "Information was saved!";
      error.style.color = "green";
    }
  }
});
