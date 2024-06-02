import { menuItems } from "../../data/menu-items";
import { MenuCard } from "../menu-card";

export function MenuList() {
  const menuList = document.createElement("div");
  menuList.classList.add("container", "menu-list-container");

  menuItems.forEach((item) => {
    const card = MenuCard(item.title, item.description, item.image);
    menuList.appendChild(card);
  });

  return menuList;
}
