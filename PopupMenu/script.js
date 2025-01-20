const button    = document.querySelector('button');
const popup     = document.querySelector('.popup');
const closeIcon = document.querySelector('.close-icon');

button.addEventListener('click', (e) => {
    e.stopPropagation();    
    popup.classList.add('open');
})

closeIcon.addEventListener('click', (e) => {
    popup.classList.remove('open');
})

popup.addEventListener('click', (e) => {
    e.stopPropagation();
})

window.addEventListener('click', (e) => {
    popup.classList.remove('open');
})