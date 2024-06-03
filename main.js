/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/images/freya-elixir.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/freya-elixir.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/e65392411a06ba4cc3e2451df1a0b0f3.jpg");

/***/ }),

/***/ "./src/assets/images/loki-mischief.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/loki-mischief.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/63241985e58094245343f318c521bd64.jpg");

/***/ }),

/***/ "./src/assets/images/odin-feast.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/odin-feast.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/a0d04819cd742c12bff2a79894dd4985.jpg");

/***/ }),

/***/ "./src/assets/images/restaurant.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/restaurant.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/158107946fecba88cf52f24da491a178.jpg");

/***/ }),

/***/ "./src/assets/images/thor-thunder-burger.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/thor-thunder-burger.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/fcc4fdf4aeb2bc4e7452256ab25eb2d0.jpg");

/***/ }),

/***/ "./src/assets/images/valkyrie-wings.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/valkyrie-wings.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/41821897a8e77589ed4223c51f49a81a.jpg");

/***/ }),

/***/ "./src/assets/images/vegan-bifrost.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/vegan-bifrost.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/3d9f211b055a70d39a7cf10a17ac7922.jpg");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/hero/index.js":
/*!**************************************!*\
  !*** ./src/components/hero/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hero: () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/menu */ "./src/pages/menu/index.js");

const goToMenuPage = () => {
  const menuPage = (0,_pages_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(menuPage);
};

function Hero() {
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


/***/ }),

/***/ "./src/components/menu-card/index.js":
/*!*******************************************!*\
  !*** ./src/components/menu-card/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuCard: () => (/* binding */ MenuCard)
/* harmony export */ });
function MenuCard(title, description, imageUrl) {
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

/***/ }),

/***/ "./src/components/menu-list/index.js":
/*!*******************************************!*\
  !*** ./src/components/menu-list/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuList: () => (/* binding */ MenuList)
/* harmony export */ });
/* harmony import */ var _data_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/menu-items */ "./src/data/menu-items.js");
/* harmony import */ var _menu_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu-card */ "./src/components/menu-card/index.js");



function MenuList() {
  const menuList = document.createElement("div");
  menuList.classList.add("container", "menu-list-container");

  _data_menu_items__WEBPACK_IMPORTED_MODULE_0__.menuItems.forEach((item) => {
    const card = (0,_menu_card__WEBPACK_IMPORTED_MODULE_1__.MenuCard)(item.title, item.description, item.image);
    menuList.appendChild(card);
  });

  return menuList;
}


/***/ }),

/***/ "./src/data/menu-items.js":
/*!********************************!*\
  !*** ./src/data/menu-items.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuItems: () => (/* binding */ menuItems)
/* harmony export */ });
/* harmony import */ var _assets_images_odin_feast_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/odin-feast.jpg */ "./src/assets/images/odin-feast.jpg");
/* harmony import */ var _assets_images_freya_elixir_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/freya-elixir.jpg */ "./src/assets/images/freya-elixir.jpg");
/* harmony import */ var _assets_images_vegan_bifrost_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/vegan-bifrost.jpg */ "./src/assets/images/vegan-bifrost.jpg");
/* harmony import */ var _assets_images_valkyrie_wings_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/valkyrie-wings.jpg */ "./src/assets/images/valkyrie-wings.jpg");
/* harmony import */ var _assets_images_thor_thunder_burger_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/thor-thunder-burger.jpg */ "./src/assets/images/thor-thunder-burger.jpg");
/* harmony import */ var _assets_images_loki_mischief_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/loki-mischief.jpg */ "./src/assets/images/loki-mischief.jpg");







const menuItems = [
  {
    title: "Odin's Feast",
    description: "A majestic selection of meats, grilled to perfection and served with Nordic herb sauce.",
    image: _assets_images_odin_feast_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  {
    title: "Freya's Elixir",
    description: "Creamy seafood soup, seasoned with fresh herbs and served with crispy bread.",
    image: _assets_images_freya_elixir_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  {
    title: "Vegan Bifrost",
    description: "Colorful grilled vegetables with herb-seasoned quinoa and citrus tahini sauce.",
    image: _assets_images_vegan_bifrost_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  {
    title: "Valkyrie Wings",
    description: "Crispy chicken wings marinated in spices and honey, served with tangy dipping sauce.",
    image: _assets_images_valkyrie_wings_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  {
    title: "Thor's Thunder Burger",
    description: "Mighty burger with beef patty, melted cheese, crispy bacon, and house sauce.",
    image: _assets_images_thor_thunder_burger_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  {
    title: "Loki's Mischief Dessert",
    description: "Decadent chocolate lava cake with vanilla ice cream and raspberry coulis.",
    image: _assets_images_loki_mischief_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
];



/***/ }),

/***/ "./src/data/resume.js":
/*!****************************!*\
  !*** ./src/data/resume.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resume: () => (/* binding */ resume)
/* harmony export */ });
const resume = [
    "In the heart of an ancient Nordic village, where the legends of gods and warriors echoed through the centuries, Valhalla Food was born. Founded by Bjorn Ragnarsson, a direct descendant of the legendary Vikings, the restaurant was conceived as a tribute to the grand feasts of Valhalla, the majestic hall of Odin. Bjorn, with his deep love for Norse culture and his passion for cooking, decided to bring the epic experience of the gods' banquets to the modern world. Combining ancestral recipes with contemporary techniques, he created a menu that celebrates the richness and diversity of Viking tradition.",
    "Bjorn's vision was clear: he wanted every visitor to Valhalla Food to feel as if they were at a true godly feast. The restaurant was decorated with great attention to detail, including long rustic wooden tables, Viking banners and shields, and a central fireplace reminiscent of ancient feast halls. Each dish on the menu was carefully crafted to reflect the ingredients and flavors that Nordic warriors would have enjoyed after a long journey or a glorious victory. From grilled meats to vibrant vegan dishes, every meal is an ode to Norse heritage.",
    "As Valhalla Food grew in popularity, it became a gathering place for Norse culture enthusiasts, families seeking a unique experience, and culinary adventurers. Bjorn's stories about his culinary adventures and explorations of ancient Viking recipes enchant visitors, making each meal not just a culinary experience but a true journey through time. Today, Valhalla Food is not just a restaurant; it is a sanctuary of stories and flavors that connects people to the indomitable and festive spirit of the ancient Norse gods and heroes."
]

/***/ }),

/***/ "./src/pages/about/index.js":
/*!**********************************!*\
  !*** ./src/pages/about/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _assets_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/restaurant.jpg */ "./src/assets/images/restaurant.jpg");
/* harmony import */ var _data_resume__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/resume */ "./src/data/resume.js");


const Text = (text) => {
    const textEl = document.createElement('p')
    textEl.classList.add('text')
    textEl.innerText = text

    return textEl
}

function about() {
    const aboutPage = document.createElement('div');
   
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('container', 'about-container')
    const text1 = Text(_data_resume__WEBPACK_IMPORTED_MODULE_1__.resume[0])

    aboutContainer.appendChild(text1)
    const bannerEl = document.createElement('img')
    bannerEl.src = _assets_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]
    bannerEl.style.margin = '1rem 0'
    aboutContainer.appendChild(bannerEl)

    const text2 = Text(_data_resume__WEBPACK_IMPORTED_MODULE_1__.resume[1])
    text2.style.margin = '1rem 0'

    const text3 = Text(_data_resume__WEBPACK_IMPORTED_MODULE_1__.resume[2])
    aboutContainer.appendChild(text2)
    aboutContainer.appendChild(text3)


    aboutPage.appendChild(aboutContainer)

    return aboutPage
}

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/hero */ "./src/components/hero/index.js");


function home() {
    const homePage = document.createElement('div');
    const hero = (0,_components_hero__WEBPACK_IMPORTED_MODULE_0__.Hero)()
    
    homePage.appendChild(hero)

    return homePage
}

/***/ }),

/***/ "./src/pages/menu/index.js":
/*!*********************************!*\
  !*** ./src/pages/menu/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _components_menu_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/menu-list */ "./src/components/menu-list/index.js");


function menu() {
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

  
  const menuList = (0,_components_menu_list__WEBPACK_IMPORTED_MODULE_0__.MenuList)();
  menuPage.appendChild(pageHeader);
  menuPage.appendChild(menuList);

  return menuPage;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home/index.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu/index.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about/index.js");






const homePage = (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
const menuPage = (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
const aboutPage = (0,_pages_about__WEBPACK_IMPORTED_MODULE_3__["default"])();

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

})();

/******/ })()
;
//# sourceMappingURL=main.js.map