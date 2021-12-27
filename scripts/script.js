let overlay = document.querySelector('.overlay');

let profilePersonName = document.querySelector('.profile__person-name');
let profilePersonDesc = document.querySelector('.profile__person-description');
let btnEdit = document.querySelector('.profile__btn-edit');
let btnAdd = document.querySelector('.profile__btn-add');

let btnPopupClose = document.querySelector('.popup__btn-close');
let inpPopupPersonName = document.querySelector('.popup__inp_info_name');
let inpPopupPersonDesc = document.querySelector('.popup__inp_info_description')
let btnPopupSave = document.querySelector('.popup__btn-save');

/*Загрузка попапа*/
function overlayActivated() {
  overlay.classList.add('overlay_on')
  inpPopupPersonName.value = profilePersonName.textContent
  inpPopupPersonDesc.value = profilePersonDesc.textContent
};

function overlayDeactivated() {
  overlay.classList.remove('overlay_on')
};

function infoSave() {
  profilePersonName.textContent = inpPopupPersonName.value
  profilePersonDesc.textContent = inpPopupPersonDesc.value
  overlayDeactivated()
};

btnEdit.addEventListener('click', overlayActivated);
btnPopupClose.addEventListener('click', overlayDeactivated);
btnPopupSave.addEventListener('click', infoSave);

document.addEventListener('keydown', function(event) {
  if (event.code === 'Escape') {
    overlayDeactivated()
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    infoSave()
  }
});





