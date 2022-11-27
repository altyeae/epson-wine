const menuOpenItem = document.querySelector ('.dropdown-open') ;
const menu = document.querySelector('.dropdown');
const menuCloseItem = document.querySelector('.dropdown-open');
const arrow = document.querySelector('.arrow');

menuOpenItem.addEventListener('mouseover', () => {
    menu.classList.toggle ('dropdown-active');
    arrow.classList.add ('arrow-active');
});

menuOpenItem.addEventListener('mouseout', () => {
    menu.classList.toggle ('dropdown-active');
    arrow.classList.remove ('arrow-active');
});

//

const preorderButton = document.querySelectorAll ('.preorder');
const popup = document.querySelector ('.popup-bg');
const closeButton = document.querySelector ('.close-button');
const popupTitle = document.querySelector ('.popup-title');
const labelName = document.querySelector ('.name');
const labelEmail = document.querySelector ('.email');
const labelPhone = document.querySelector ('.phone');
const popupText = document.querySelector ('.popup-text');
const popupButton = document.querySelector ('.popup-button');


preorderButton.forEach(item => {
    item.addEventListener('click', () => {
        popup.classList.add ('popup-active');
    })
});

closeButton.addEventListener ('click', () => {
    popup.classList.remove ('popup-active');
});

function nextPopup () {
    popupText.innerHTML = 'Спасибо!<br>Мы Свяжемся с вами<br> для подтверждения предзаказа<br> в течении 1-3 рабочих дней';
    popupTitle.style.display = 'none';
    labelName.style.display = 'none';
    labelEmail.style.display = 'none';
    labelPhone.style.display = 'none';
    popup.style.justifyContent = 'center';
    popupText.style.width = '649px';
    popupText.style.marginTop = '225px';
    popupText.style.fontSize = '30px';
    popupText.style.lineHeight = '70px';
    popupText.style.textAlign = 'center';
};

popupButton.addEventListener ('click', nextPopup);


