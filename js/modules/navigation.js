import { isAuthenticated } from "./is-authenticated.js";

function getBasePath() {
  const path = window.location.pathname;
  const depth = path.split("/").filter(Boolean).length;

  // create the base path based on depth length
  const basePath = depth === 0 ? "./" : "../".repeat(depth);
  return basePath;
}

export function configureNavigation() {
  // create the base path based on depth length
  const basePath = getBasePath();

  const headerSection = document.getElementById("header-section");

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const loginLi = document.createElement("li");
  const registerLi = document.createElement("li");
  const loginLink = document.createElement("a");
  const registerLink = document.createElement("a");

  if (
    isAuthenticated() == "false" ||
    isAuthenticated() === null ||
    isAuthenticated() === undefined
  ) {
    loginLink.setAttribute("href", `${basePath}pages/login`);
    loginLink.textContent = "Entrar";
    registerLink.setAttribute("href", `${basePath}pages/register`);
    registerLink.textContent = "Cadastrar";

    loginLi.appendChild(loginLink);
    registerLi.appendChild(registerLink);
    ul.appendChild(loginLi);
    ul.appendChild(registerLi);

    nav.appendChild(ul);

    headerSection.appendChild(nav);
  } else {
    const userAvatarDiv = document.createElement("div");
    const userAvatarImg = document.createElement("img");
    userAvatarImg.setAttribute(
      "src",
      `${basePath}assets/img/static/post-owner-avatar-image-example.png`
    );
    const userAvatarLink = document.createElement("a");
    userAvatarLink.setAttribute("href", `${basePath}pages/user?userId=1`);

    userAvatarLink.appendChild(userAvatarImg);
    userAvatarDiv.appendChild(userAvatarLink);
    headerSection.appendChild(userAvatarDiv);
  }
}
