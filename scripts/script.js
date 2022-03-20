import {
  profilePersonName,
  profilePersonDesc,
  btnProfileEdit,
  btnPlaceAdd,
  btnClosePopupProfileEdit,
  popupPlaceAdd,
  btnClosePopupAdd,
  popupPlaceView,
  btnClosePopupPlaceView,
  inpPopupProfileEditName,
  inpPopupProfileEditDesc,
  inpPopupPlaceAddPlaceName,
  inpPopupPlaceAddPlaceImg,
  placeAddSubmitButton,
  placesTable,
  formsList,
  frmPopupPlaceAdd,
  frmPopupProfileEdit,
  initialPlaces,
  containerSelector,
  placeSelector
} from './utils/constants.js'

import { openPopup, closePopup } from './utils.js'
import { Card } from './Card.js'
import { settingsObject, FormValidator } from './validate.js'
import Section from './Section.js'

// function createCard(startElement) {
//   const placeCard = new Card(startElement, '#place-template')
//   const placeElement = placeCard.generateCard()
//   return placeElement
// }

//__________________________________Объявление функции отрисовки (добавления в DOM) карточки места
// function renderPlaceCard() {
//   initialPlaces.forEach((startElement) => {
//     placesTable.append(createCard(startElement))
//   });
// }
// //вызов функции
// renderPlaceCard()
// debugger
const startCards = new Section({

  items: initialPlaces,
  renderer: (initialPlace) => {
    const place = new Card(initialPlace, placeSelector)
    const placeElement = place.generateCard()
// debugger
    startCards.addItem(placeElement)
  }
},
  containerSelector)


startCards.render()

class Popup {
  constructor(popupName) {
    this.popupName = popupName
    this.popupElement = document.querySelector(this.popupName)
  }
  open() {
    this.popupElement.classList.add('popup_opened')
      // document.addEventListener('keydown', closePopupFromEvt)   //слушатель закрытия по Esp
      // popupName.addEventListener('mousedown', closePopupFromEvt)    //слушатель закрытия по click
  }
  close() {
    this.popupElement.classList.remove('popup_opened')
  }
  setEventListeners() {

  }
  _handleEscClose() {

  }
}



// ___________________________________Функция отработки submit на попапе добавления карточки
function submitPlaceAdd() {
  const element = {}
  element.name = inpPopupPlaceAddPlaceName.value
  element.link = inpPopupPlaceAddPlaceImg.value
  placesTable.prepend(createCard(element))
  closePopup(popupPlaceAdd)
  frmPopupPlaceAdd.reset()

};
//___________________________________Функция отработки submit на попапе редактирования профиля
function submitProfileEdit() {
  profilePersonName.textContent = inpPopupProfileEditName.value
  profilePersonDesc.textContent = inpPopupProfileEditDesc.value
  // closePopup(popupProfileEdit)  //передавать OpenedPopupName??
};

//____________________________________Открытие попапа Редактирование профиля по кнопке
btnProfileEdit.addEventListener('click', function() {
  inpPopupProfileEditName.value = profilePersonName.textContent
  inpPopupProfileEditDesc.value = profilePersonDesc.textContent
  const openedPopup = new Popup('#popupProfileEdit')
  openedPopup.open()
  // console.log(openedPopup)
  // openPopup(popupProfileEdit)
});
//____________________________________Открытие попапа Добавление карточки по кнопке
btnPlaceAdd.addEventListener('click', () => {openPopup(popupPlaceAdd)});

//____________________________________закрытие попапа редактирования профиля
btnClosePopupProfileEdit.addEventListener('mousedown', () => {
  openedPopup.close()
  // closePopup(popupProfileEdit)
});
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

const formValidatorPopupProfileEdit = new FormValidator(settingsObject, formsList[0])
formValidatorPopupProfileEdit.enableValidation()

const formValidatorPopupPlaceAdd = new FormValidator(settingsObject, formsList[1])
formValidatorPopupPlaceAdd.enableValidation()
