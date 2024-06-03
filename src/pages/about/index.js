import RestaurantImg from '../../assets/images/restaurant.jpg'
import { resume } from '../../data/resume';
const Text = (text) => {
    const textEl = document.createElement('p')
    textEl.classList.add('text')
    textEl.innerText = text

    return textEl
}

export default function about() {
    const aboutPage = document.createElement('div');
   
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('container', 'about-container')
    const text1 = Text(resume[0])

    aboutContainer.appendChild(text1)
    const bannerEl = document.createElement('img')
    bannerEl.src = RestaurantImg
    bannerEl.style.margin = '1rem 0'
    aboutContainer.appendChild(bannerEl)

    const text2 = Text(resume[1])
    text2.style.margin = '1rem 0'

    const text3 = Text(resume[2])
    aboutContainer.appendChild(text2)
    aboutContainer.appendChild(text3)


    aboutPage.appendChild(aboutContainer)

    return aboutPage
}