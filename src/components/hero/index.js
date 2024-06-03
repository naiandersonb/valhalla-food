import MenuPage from "../../pages/menu";
const goToMenuPage = () => {
  const menuPage = MenuPage();
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(menuPage);
};

export function Hero() {
  const hero = document.createElement("div");
  const h1 = document.createElement("h1");
  const paragraph = document.createElement("p");
  const button = document.createElement("button");

  h1.innerText = "Discover the magic of Nordic gastronomy";
  paragraph.innerText =
    "Enjoy dishes inspired by Norse mythology, prepared with fresh ingredients and an authentic flavor.";
  button.innerText = "See the Menu";

  hero.classList.add("hero-container", "container");
  h1.classList.add("hero-cta");
  paragraph.classList.add("hero-description");
  button.classList.add("btn", "hero-button");

  button.addEventListener("click", goToMenuPage);

  hero.appendChild(h1);
  hero.appendChild(paragraph);
  hero.appendChild(button);

  return hero;
}
