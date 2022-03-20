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

//форма профиля
export const frmPopupProfileEdit = document.forms.popupProfileEditForm;
export const inpPopupProfileEditName = frmPopupProfileEdit.elements.name;
export const inpPopupProfileEditDesc = frmPopupProfileEdit.elements.description;

// форма места
export const frmPopupPlaceAdd = document.forms.popupPlaceAddForm;
export const inpPopupPlaceAddPlaceName = frmPopupPlaceAdd.elements.name;
export const inpPopupPlaceAddPlaceImg = frmPopupPlaceAdd.elements.description;
export const placeAddSubmitButton = frmPopupPlaceAdd.querySelector('.popup__btn-save')

export const placesTable = document.querySelector('.places__table')

export const formsList = Array.from(document.forms)  //ищем все форма в документе перекидываем в массив

export const initialPlaces = [
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
