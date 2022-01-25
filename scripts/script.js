const profilePersonName = document.querySelector('.profile__person-name');
const profilePersonDesc = document.querySelector('.profile__person-description');

const btnProfileEdit = document.querySelector('.profile__btn-edit');
const btnPlaceAdd = document.querySelector('.profile__btn-add')

const popups = document.querySelector('.popups')
const popupProfileEdit = popups.querySelector('#popupProfileEdit')
const btnClosePopupProfileEdit = popups.querySelector('#popupProfileEditBtnClose');
const popupPlaceAdd = popups.querySelector('#popupPlaceAdd')
const btnClosePopupAdd = popups.querySelector('#popupAddPlaceBtnClose');
const popupPlaceView = popups.querySelector('#popupPlaceView');
const btnClosePopupPlaceView = popups.querySelector('#popupPlaceViewBtnClose');
const imgPopupPlaceView = popupPlaceView.querySelector('.popup__image');
const figcapPopupPlaceView = popupPlaceView.querySelector('.popup__figcaption');

//форма профиля
const frmPopupProfileEdit = document.forms.popupProfileEditForm;
const inpPopupProfileEditName = frmPopupProfileEdit.elements.name;
const inpPopupProfileEditDesc = frmPopupProfileEdit.elements.description;

// форма места
const frmPopupPlaceAdd = document.forms.popupPlaceAddForm;
const inpPopupPlaceAddPlaceName = frmPopupPlaceAdd.elements.name;
const inpPopupPlaceAddPlaceImg = frmPopupPlaceAdd.elements.description;

const placesTable = document.querySelector('.places__table')

let openedPopupName = ''

const initialPlaces = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//___________________________________Функция закрытия попапа по Esc или Click-
function closePopupFromEvt(evt) {
  if (evt.target.classList.contains('popup') || evt.key === 'Escape') {
    closePopup(openedPopupName)
  }
}
//___________________________________Функция открытия попапа-
function openPopup(popupName) {
  openedPopupName = popupName
  popupName.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupFromEvt)   //слушатель закрытия по Esp
  popupName.addEventListener('click', closePopupFromEvt)    //слушатель закрытия по click
}
//___________________________________Функция закрытия попапа-
function closePopup(popupName) {
  popupName.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupFromEvt)  //удаление слушателя закрития по Esp
  popupName.removeEventListener('click', closePopupFromEvt)   //удаление слушателя закрития по click
}
//___________________________________Функция создания карточеки
function createCard(placeName, placeImage) {
  const placeTemplate = document.querySelector('#place-template').content
  const newPlace = placeTemplate.querySelector('.place').cloneNode(true)
  const cardImage = newPlace.querySelector('.place__image')
  const cardName = newPlace.querySelector('.place__name')
  cardName.textContent = placeName
  cardImage.src = placeImage
  cardImage.alt = placeName
  return newPlace
};
//___________________________________Функция добавления карточеки в DOM
function addCard(itemCard) {
  placesTable.prepend(itemCard)
};
function creatingStartingCards(cardArr) {
  cardArr.forEach(element => addCard(createCard(element.name, element.link)))
}
// ___________________________________Функция отработки submit на попапе добавления карточки
function submitPlaceAdd() {
  addCard(createCard(inpPopupPlaceAddPlaceName.value, inpPopupPlaceAddPlaceImg.value))
  closePopup(popupPlaceAdd)
  inpPopupPlaceAddPlaceName.value = ''
  inpPopupPlaceAddPlaceImg.value = ''
};
//___________________________________Функция отработки submit на попапе редактирования профиля
function submitProfileEdit() {
  profilePersonName.textContent = inpPopupProfileEditName.value
  profilePersonDesc.textContent = inpPopupProfileEditDesc.value
  closePopup(popupProfileEdit)  //передавать OpenedPopupName??
};
//____________________________________загрузка базовых карточек + слушатели событий
creatingStartingCards(initialPlaces);

//________________________________________________Слушатели
//___________________________________Глобальный слушатель на событие Click всех карточек
placesTable.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('place__btn-like')) {            //клик на кнопке like
      evt.target.classList.toggle('place__btn-like_active');
  } else if (evt.target.classList.contains('place__btn-delit')) {    //клик на кнопке delit
      evt.target.parentElement.remove()
  } else if (evt.target.classList.contains('place__image')) {        //клик на кнопке view
    openPopup(popupPlaceView)
    imgPopupPlaceView.src = evt.target.src
    imgPopupPlaceView.textContent = evt.target.alt
    figcapPopupPlaceView.textContent = evt.target.alt
  }
})
//____________________________________Открытие попапа Редактирование профиля по кнопке
btnProfileEdit.addEventListener('click', function() {
  inpPopupProfileEditName.value = profilePersonName.textContent
  inpPopupProfileEditDesc.value = profilePersonDesc.textContent
  openPopup(popupProfileEdit)
});
//____________________________________Открытие попапа Добавление карточки по кнопке
btnPlaceAdd.addEventListener('click', () => {openPopup(popupPlaceAdd)});
//____________________________________закрытие попапа редактирования профиля
btnClosePopupProfileEdit.addEventListener('click', () => {closePopup(popupProfileEdit)});
//____________________________________закрытие попапа добавления карточки
btnClosePopupAdd.addEventListener('click', () => {closePopup(popupPlaceAdd)});
//____________________________________закрытие попапа просмотра картинок
btnClosePopupPlaceView.addEventListener('click', () => {closePopup(popupPlaceView)});


//____________________________________сабмит формы добавления карточки
frmPopupPlaceAdd.addEventListener('submit', function(evt) {
  evt.preventDefault()
  submitPlaceAdd()
  frmPopupPlaceAdd.querySelector('.popup__btn-save').classList.add(settingsObject.inactiveButtonClass)
  frmPopupPlaceAdd.querySelector('.popup__btn-save').setAttribute("disabled", "disabled")
});
//____________________________________сабмит формы редактирования профиля
frmPopupProfileEdit.addEventListener('submit', function(evt) {
  evt.preventDefault()
  submitProfileEdit()
});

