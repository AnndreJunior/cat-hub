import { createHeaderElements } from "./modules/create-header-elements.js";
import { isAuthenticated } from "./modules/is-authenticated.js";

const { headerSection, ul, loginLi, registerLi, nav, loginLink, registerLink } =
  createHeaderElements();

if (
  isAuthenticated() == "false" ||
  isAuthenticated() === null ||
  isAuthenticated() === undefined
) {
  loginLink.setAttribute("href", "../../pages/login");
  loginLink.textContent = "Entrar";
  registerLink.setAttribute("href", "../../pages/register");
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
    "../../assets/img/static/post-owner-avatar-image-example.png"
  );
  const userAvatarLink = document.createElement("a");
  userAvatarLink.setAttribute("href", "../../pages/user?userId=1");

  userAvatarLink.appendChild(userAvatarImg);
  userAvatarDiv.appendChild(userAvatarLink);
  headerSection.appendChild(userAvatarDiv);
}
