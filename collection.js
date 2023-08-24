'use strict'

let gameCarrossel = [...document.querySelectorAll('.games-carrossel')];
let previousButton = [...document.querySelectorAll('.previous-button')];
let nextButton = [...document.querySelectorAll('.next-button')];

gameCarrossel.forEach((item, i) => {
    let carrosselDimensions = item.getBoundingClientRect();
    let carrosselWidth = carrosselDimensions.width;
    nextButton[i].addEventListener('click', () => {
        item.scrollLeft += carrosselWidth - 200;
    })
    
    previousButton[i].addEventListener('click', () => {
     item.scrollLeft -= carrosselWidth + 200;
    })
})