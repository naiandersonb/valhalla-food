import "./styles/style.css";

import Homepage from "./pages/home";
import MenuPage from "./pages/menu";
import AboutPage from "./pages/about";

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

const savePageState = (pageName) => {
  localStorage.setItem("currentPage", pageName);
};

const getPageState = () => {
  return localStorage.getItem("currentPage") || "home";
};

const init = () => {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const aboutBtn = document.getElementById("about");
  const logo = document.querySelector(".logo");

  const routes = {
    home: homePage,
    menu: menuPage,
    about: aboutPage,
  };

  const currentPage = getPageState();
  const pageToRender = routes[currentPage] || homePage;

  homeBtn.addEventListener("click", () => {
    renderPage(homePage);
    savePageState("home");
  });

  menuBtn.addEventListener("click", () => {
    renderPage(menuPage);
    savePageState("menu");
  });

  aboutBtn.addEventListener("click", () => {
    renderPage(aboutPage);
    savePageState("about");
  });

  logo.addEventListener("click", () => {
    renderPage(homePage);
    savePageState("home");
  });

  renderPage(pageToRender);
};

window.addEventListener("DOMContentLoaded", init);
