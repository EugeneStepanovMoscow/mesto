import { settingsObject, FormValidator } from '../components/Validate.js'

export const profilePersonName = document.querySelector('.profile__person-name');
export const profilePersonDesc = document.querySelector('.profile__person-description');

export const btnProfileEdit = document.querySelector('.profile__btn-edit');
export const btnPlaceAdd = document.querySelector('.profile__btn-add')

const popupsSection = document.querySelector('.popups')
export const btnClosePopupProfileEdit = popupsSection.querySelector('#popupProfileEditBtnClose');
export const popupPlaceAdd = popupsSection.querySelector('#popupPlaceAdd')
export const btnClosePopupAdd = popupsSection.querySelector('#popupAddPlaceBtnClose');
export const popupPlaceView = popupsSection.querySelector('#popupPlaceView');
export const btnClosePopupPlaceView = popupsSection.querySelector('#popupPlaceViewBtnClose');

export const frmPopupProfileEdit = document.forms.popupProfileEditForm;
export const inpPopupProfileEditName = frmPopupProfileEdit.elements.name;
export const inpPopupProfileEditDesc = frmPopupProfileEdit.elements.description;

// форма места
export const frmPopupPlaceAdd = document.forms.popupPlaceAddForm;
export const inpPopupPlaceAddPlaceName = frmPopupPlaceAdd.elements.name;
export const inpPopupPlaceAddPlaceImg = frmPopupPlaceAdd.elements.description;
export const placeAddSubmitButton = frmPopupPlaceAdd.querySelector('.popup__btn-save')

export const placesTable = document.querySelector('.places__table')
export const containerSelector = '.places__table'
export const placeSelector = 'place-template'

export const imgPopupPlaceView = document.querySelector('.popup__image')
export const figcapPopupPlaceView = document.querySelector('.popup__figcaption')

export const profileSelectors = {
  name: '.profile__person-name',
  profession: '.profile__person-description'
}

export const formsList = Array.from(document.forms)  //ищем все форма в документе перекидываем в массив

export const initialPlaces = [
  {
    name: 'Архыз',
    description: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    description: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    description: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    description: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    description: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    description: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const formValidatorPopupProfileEdit = new FormValidator(settingsObject, formsList[0])
export const formValidatorPopupPlaceAdd = new FormValidator(settingsObject, formsList[1])

