export default class Popup {
  constructor(popupName) {
    this.popupName = popupName
    this.popupElement = document.querySelector(this.popupName)
    this.closeButton = this.popupElement.querySelector('.popup__btn-close')
  }
  open() {
    this.popupElement.classList.add('popup_opened')
    this._handleEscClose()
  }
  close() {
    this.popupElement.classList.remove('popup_opened')
  }
  setEventListeners() {
    //Закрытие по кнопке
    this.closeButton.addEventListener('mousedown', () => {
      this.close()
    })
    //Закрытие по клику в пустоту
    document.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close()
      }
    })
  }
  _handleEscClose() {
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        this.close()
      }
    })
  }
}
