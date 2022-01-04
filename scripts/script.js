let overlay = document.querySelector('.overlay');

let profilePersonName = document.querySelector('.profile__person-name');
let profilePersonDesc = document.querySelector('.profile__person-description');
let btnEdit = document.querySelector('.profile__btn-edit');

let btnPopupClose = document.querySelector('.popup__btn-close');
//Не совсем понятно почему я не могу отставить выбор по форме let inpPopupPersonName = inpPopup[0];
//т.к. при добавлении инпутов так же необходимо будет корректировать скрипт.
//если инпуты дабавляются ниже, то просто добавляем переменны
//если выше, то также добавляем переменные и корректруем порядок элементов inpPopup[0, 1, 2, и т.д.]
let inpPopupPersonName = document.querySelector('input[name="name"]');
let inpPopupPersonDesc = document.querySelector('input[name="description"]');
let btnPopupSave = document.querySelector('.popup__btn-save');

let formElement = document.querySelector('.popup');

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
btnPopupSave.addEventListener('click', infoSave);





