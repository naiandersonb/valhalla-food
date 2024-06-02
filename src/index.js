import "./styles/style.css";

import Homepage from "./pages/home";
import MenuPage from "./pages/menu";
import AboutPage from "./pages/about";

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");
const logo = document.querySelector(".logo");

const homePage = Homepage();
const menuPage = MenuPage();
const aboutPage = AboutPage();

const clearApp = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
};

const renderPage = (page) => {
  clearApp();
  const content = document.getElementById("content");
  content.appendChild(page);
};

window.addEventListener("DOMContentLoaded", () => {
  renderPage(homePage);
});

homeBtn.addEventListener("click", () => {
  renderPage(homePage);
});

logo.addEventListener("click", () => {
  renderPage(homePage);
});

menuBtn.addEventListener("click", () => {
  renderPage(menuPage);
});

aboutBtn.addEventListener("click", () => {
  renderPage(aboutPage);
});
