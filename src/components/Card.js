
class Card {
  constructor({
    name,
    link,
    likes,
    ownerId,
    cardId,
    userIdInfo,
    handleCardClick,
    addLikesApi,
    deleteLikesApi,
    deleteCardPopupOpen,
    },
    cardSelector) {
    this._name = name;
    this._imgLink = link;
    this._likes = likes;
    this._ownerId = ownerId;
    this._cardId = cardId;
    this._userIdInfo = userIdInfo;
    this._CardClick = handleCardClick;
    this._cardSelector = cardSelector;
    this._addlikesApi = addLikesApi;
    this._deleteLikesApi = deleteLikesApi;
    this._deleteCardPopupOpen = deleteCardPopupOpen;
  }

//получение темплейт структуры из HTML
  _getTemplate() {
    const cardElement = document.getElementById(this._cardSelector).content.querySelector('.place').cloneNode(true);
    return cardElement;
  }

//метод добавления слушателей на лайк, удаление и открытие попапа просмотра
  _setEventListeners() {

  //слушаткль лайка
    this._element.querySelector('.place__btn-like').addEventListener('click', () => {
      event.target.classList.toggle('place__btn-like_active')
        //если конка лайка выключена, то отправляем запрос на добавление лайка
        if (event.target.classList.contains('place__btn-like_active')) {
          this._addlikesApi(this._cardId, this._element.querySelector('.place__likes'))
        //если иконка лайка включена, то отправляем запрос на удаление лайка
        } else {
          this._deleteLikesApi(this._cardId, this._element.querySelector('.place__likes'))
        }
    })
  //слушатель удаления карточки
    this._element.querySelector('.place__btn-delit').addEventListener('click', () => {
      this._deleteCardPopupOpen(this._cardId, this)
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
    this._element.querySelector('.place__image').alt = this._name
    this._element.querySelector('.place__name').textContent = this._name
    this._element.querySelector('.place__likes').textContent = this._likes.length

    //проверка на поставленный лайк и изменение иконки лайка
    if (this._likes.length > 0) {
      this._likes.forEach((like) => {
        if (like._id === this._userIdInfo) {
          this._element.querySelector('.place__btn-like').classList.add('place__btn-like_active')
        }
      })

    }
    //проверка на хозяина карточки и отрисовка кнопки удадления
    if (this._ownerId === this._userIdInfo) {
      this._element.querySelector('.place__btn-delit').classList.remove('place__btn-delit_off')
    }
    this._setEventListeners()
    return this._element
  }
  deleteCard() {
    this._element.remove()
    this._element = null
  }
}

export {Card}
