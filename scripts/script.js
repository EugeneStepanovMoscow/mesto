let overlay = document.querySelector('.overlay');

let profilePersonName = document.querySelector('.profile__person-name');
let profilePersonDesc = document.querySelector('.profile__person-description');
let btnEdit = document.querySelector('.profile__btn-edit');

let btnPopupClose = document.querySelector('.popup__btn-close');
let inpPopupPersonName = document.querySelector('input[name="name"]');
let inpPopupPersonDesc = document.querySelector('input[name="description"]');
let btnPopupSave = document.querySelector('.popup__btn-save');

let formElement = document.querySelector('.popup__form');

// Загрузка попапа
function overlayActivated() {
  overlay.classList.add('overlay_on')
  inpPopupPersonName.value = profilePersonName.textContent
  inpPopupPersonDesc.value = profilePersonDesc.textContent
};
function overlayDeactivated() {
  overlay.classList.remove('overlay_on')
};

function infoSave(evt) {
  evt.preventDefault()
  profilePersonName.textContent = inpPopupPersonName.value
  profilePersonDesc.textContent = inpPopupPersonDesc.value
  overlayDeactivated()
};

btnEdit.addEventListener('click', overlayActivated);
btnPopupClose.addEventListener('click', overlayDeactivated);
formElement.addEventListener('submit', infoSave);




