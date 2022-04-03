export default class Popup {
  constructor(popupName) {
    this.popupName = popupName
    this.popupElement = document.querySelector(this.popupName)
    this.closeButton = this.popupElement.querySelector('.popup__btn-close')
    this._escCloseFunction = this._escCloseFunction.bind(this)
  }

  open() {
    this.popupElement.classList.add('popup_opened')
    document.addEventListener('keydown', this._escCloseFunction)
  }
  close() {
    this.popupElement.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._escCloseFunction)
  }
  _escCloseFunction(evt) {
    evt.preventDefault()
    if (evt.key === 'Escape') {
      this.close()
    }
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




}
