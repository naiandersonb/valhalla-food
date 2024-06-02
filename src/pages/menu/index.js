import { MenuList } from "../../components/menu-list";

export default function menu() {
  const menuPage = document.createElement("div");

  const pageHeader = document.createElement('section')
  pageHeader.classList.add('container', 'menu-page-header');

  const title = document.createElement("h1");
  title.innerText = "Valhalla Food Menu";

  const description = document.createElement("p");
  description.innerText = "Feast Like the Gods - Discover Our Legendary Dishes";
  description.classList.add('text')

  pageHeader.appendChild(title)
  pageHeader.appendChild(description)

  
  const menuList = MenuList();
  menuPage.appendChild(pageHeader);
  menuPage.appendChild(menuList);

  return menuPage;
}
