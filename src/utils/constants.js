import { settingsObject, FormValidator } from '../components/Validate.js'

export const profilePersonName = document.querySelector('.profile__person-name');
export const profilePersonDesc = document.querySelector('.profile__person-description');

export const btnProfileEdit = document.querySelector('.profile__btn-edit');
export const btnPlaceAdd = document.querySelector('.profile__btn-add')
export const btnAvatarEdit = document.querySelector('.profile__avatar-btn-edit')

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

export const placeLikes = document.querySelector('.place__likes')
export const placeButtonDelit = document.querySelector('.place__btn-delit')

export const profileSelectors = {
  name: '.profile__person-name',
  profession: '.profile__person-description',
  photo: '.profile__image'
}


export const formsList = Array.from(document.forms)  //ищем все форма в документе перекидываем в массив


export const formValidatorPopupProfileEdit = new FormValidator(settingsObject, formsList[0])
export const formValidatorPopupPlaceAdd = new FormValidator(settingsObject, formsList[1])
export const formValidatorPopupAvatarEdit = new FormValidator(settingsObject, formsList[3])

export const initialPlaces = [
];

// export var cardForDeleteId = ''
// export const cardForDeleteElement

