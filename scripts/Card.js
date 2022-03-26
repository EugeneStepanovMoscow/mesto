import { imgPopupPlaceView, figcapPopupPlaceView, openPopup } from './utils.js'


class Card {
  constructor({name, link, handleCardClick}, cardSelector) {
    this._name = name;
    this._imgLink = link;
    this._CardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  // constructor(data, cardSelector) {
  //   this._name = data.name;
  //   this._imgLink = data.link;
  //   this._cardSelector = cardSelector;
  // }


//получение темплейт структуры из HTML
  _getTemplate() {
    const cardElement = document.getElementById(this._cardSelector).content.querySelector('.place').cloneNode(true);
    return cardElement;
  }

  _openPopupPlaceView() {
    imgPopupPlaceView.src = this._imgLink
    figcapPopupPlaceView.textContent = this._name
    openPopup(popupPlaceView)
  }

//метод добавления слушателей на лайк, удаление и открытие попапа просмотра
  _setEventListeners() {
  //слушаткль лайка
    this._element.querySelector('.place__btn-like').addEventListener('click', () => {
      event.target.classList.toggle('place__btn-like_active');
    })
  //слушатель удаления карточки
    this._element.querySelector('.place__btn-delit').addEventListener('click', () => {
      this._element.remove()
      this._element = null
    })
  //слушатель открытия попапа просмотра
    this._element.querySelector('.place__image').addEventListener('click', () => {
      this._CardClick(this._name, this._imgLink)
      
    })
  }

  //наполнение темплейт структуры данными из элементов объекта data и бобавление слушателей
  generateCard() {
    this._element = this._getTemplate()
    this._element.querySelector('.place__image').src = this._imgLink
    this._element.querySelector('.place__name').textContent = this._name;
    this._setEventListeners()
    return this._element;
  }
}

export {Card}
