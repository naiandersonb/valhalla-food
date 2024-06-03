export function MenuCard(title, description, imageUrl) {
    const menuCard = document.createElement('article');
    menuCard.classList.add('menu-list-card-container')

    const imgEl = document.createElement('img');
    imgEl.classList.add('menu-list-card-image')
    imgEl.src = imageUrl;

    const titleEl = document.createElement('h2')
    titleEl.innerText = title

    const descriptionEl = document.createElement('p')
    descriptionEl.classList.add('text')
    descriptionEl.innerText = description

    const buttonEl = document.createElement('button')
    buttonEl.classList.add('btn')
    buttonEl.innerText = 'Order Now'


    menuCard.appendChild(imgEl)
    menuCard.appendChild(titleEl)
    menuCard.appendChild(descriptionEl)
    menuCard.appendChild(buttonEl)

    return menuCard
}