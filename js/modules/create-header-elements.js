export function createHeaderElements() {
  const headerSection = document.getElementById("header-section");

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const loginLi = document.createElement("li");
  const registerLi = document.createElement("li");
  const loginLink = document.createElement("a");
  const registerLink = document.createElement("a");

  return {
    headerSection,
    nav,
    ul,
    loginLi,
    registerLi,
    loginLink,
    registerLink,
  };
}
