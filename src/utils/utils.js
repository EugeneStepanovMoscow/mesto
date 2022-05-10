const imgPopupPlaceView = popupPlaceView.querySelector('.popup__image');
const figcapPopupPlaceView = popupPlaceView.querySelector('.popup__figcaption');

let openedPopupName = ''

//___________________________________Функция открытия попапа-
function openPopup(popupName) {
  openedPopupName = popupName
  popupName.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupFromEvt)   //слушатель закрытия по Esp
  popupName.addEventListener('mousedown', closePopupFromEvt)    //слушатель закрытия по click
}
//___________________________________Функция закрытия попапа по Esc или Click-
function closePopupFromEvt(evt) {
  if (evt.target.classList.contains('popup') || evt.key === 'Escape') {
    closePopup(openedPopupName)
  }
}

//___________________________________Функция закрытия попапа-
function closePopup(popupName) {
  popupName.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupFromEvt)  //удаление слушателя закрития по Esp
  popupName.removeEventListener('click', closePopupFromEvt)   //удаление слушателя закрития по click
}

export { imgPopupPlaceView, figcapPopupPlaceView, openPopup, closePopupFromEvt, closePopup }


