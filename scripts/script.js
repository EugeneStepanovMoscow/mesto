const profilePersonName = document.querySelector('.profile__person-name');
const profilePersonDesc = document.querySelector('.profile__person-description');

const btnProfileEdit = document.querySelector('.profile__btn-edit');
const btnPlaceAdd = document.querySelector('.profile__btn-add')

const popupsSection = document.querySelector('.popups')
const popups = popupsSection.querySelectorAll('.popup')
const popupProfileEdit = popupsSection.querySelector('#popupProfileEdit')
const btnClosePopupProfileEdit = popupsSection.querySelector('#popupProfileEditBtnClose');
const popupPlaceAdd = popupsSection.querySelector('#popupPlaceAdd')
const btnClosePopupAdd = popupsSection.querySelector('#popupAddPlaceBtnClose');
const popupPlaceView = popupsSection.querySelector('#popupPlaceView');
const btnClosePopupPlaceView = popupsSection.querySelector('#popupPlaceViewBtnClose');

//форма профиля
const frmPopupProfileEdit = document.forms.popupProfileEditForm;
const inpPopupProfileEditName = frmPopupProfileEdit.elements.name;
const inpPopupProfileEditDesc = frmPopupProfileEdit.elements.description;

// форма места
const frmPopupPlaceAdd = document.forms.popupPlaceAddForm;
const inpPopupPlaceAddPlaceName = frmPopupPlaceAdd.elements.name;
const inpPopupPlaceAddPlaceImg = frmPopupPlaceAdd.elements.description;
const placeAddSubmitButton = frmPopupPlaceAdd.querySelector('.popup__btn-save')

const placesTable = document.querySelector('.places__table')

import { initialPlaces } from './cardsData.js'
import { openPopup, closePopup } from './utils.js'
import { Card } from './Card.js'

function createCart(startElement) {
  const placeCard = new Card(startElement, '#place-template')
  const placeElement = placeCard.generateCard()
  return placeElement
}

//__________________________________Объявление функции отрисовки (добавления в DOM) карточки места
function renderPlaceCard() {
  initialPlaces.forEach((startElement) => {
    placesTable.append(createCart(startElement))
  });
}
//вызов функции
renderPlaceCard()

// ___________________________________Функция отработки submit на попапе добавления карточки
function submitPlaceAdd() {
  const element = {}
  element.name = inpPopupPlaceAddPlaceName.value
  element.link = inpPopupPlaceAddPlaceImg.value
  placesTable.append(createCart(element))
  closePopup(popupPlaceAdd)
  frmPopupPlaceAdd.reset()

};
//___________________________________Функция отработки submit на попапе редактирования профиля
function submitProfileEdit() {
  profilePersonName.textContent = inpPopupProfileEditName.value
  profilePersonDesc.textContent = inpPopupProfileEditDesc.value
  closePopup(popupProfileEdit)  //передавать OpenedPopupName??
};

//____________________________________Открытие попапа Редактирование профиля по кнопке
btnProfileEdit.addEventListener('click', function() {
  inpPopupProfileEditName.value = profilePersonName.textContent
  inpPopupProfileEditDesc.value = profilePersonDesc.textContent
  openPopup(popupProfileEdit)
});
//____________________________________Открытие попапа Добавление карточки по кнопке
btnPlaceAdd.addEventListener('click', () => {openPopup(popupPlaceAdd)});

//____________________________________закрытие попапа редактирования профиля
btnClosePopupProfileEdit.addEventListener('mousedown', () => {closePopup(popupProfileEdit)});
//____________________________________закрытие попапа добавления карточки
btnClosePopupAdd.addEventListener('mousedown', () => {closePopup(popupPlaceAdd)});
//____________________________________закрытие попапа просмотра картинок
btnClosePopupPlaceView.addEventListener('mousedown', () => {closePopup(popupPlaceView)});

//____________________________________сабмит формы добавления карточки
frmPopupPlaceAdd.addEventListener('submit', function(evt) {
  evt.preventDefault()
  submitPlaceAdd()
  placeAddSubmitButton.classList.add(settingsObject.inactiveButtonClass)
  placeAddSubmitButton.setAttribute("disabled", "disabled")
});
//____________________________________сабмит формы редактирования профиля
frmPopupProfileEdit.addEventListener('submit', function(evt) {
  evt.preventDefault()
  submitProfileEdit()
});

import { settingsObject } from './validate.js'
