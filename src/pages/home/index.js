import { Hero } from "../../components/hero";

export default function home() {
    const homePage = document.createElement('div');
    const hero = Hero()
    
    homePage.appendChild(hero)

    return homePage
}