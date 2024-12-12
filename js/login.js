const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("isAuthenticated", true);
  window.location.href = "../../index.html";
});
