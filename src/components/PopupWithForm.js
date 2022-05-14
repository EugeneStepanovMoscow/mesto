import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
  constructor({popupName, submitFunction}) {
    super(popupName),
    this.submitFunction = submitFunction
    this.form = this.popupElement.querySelector('.popup__form')
    this.popupButtonSubmit = this.form.querySelector('.popup__btn-save')
    this._inputs = Array.from(this.form.querySelectorAll('.popup__inp'))
  }
  _getInputValues() {
    const popupInputObject = {}
    this._inputs.forEach((input) =>
      popupInputObject[input.name] = input.value
    )
    return popupInputObject
  }

 //------------установка слушателей
  setEventListeners() {
    super.setEventListeners()
    //слушатель сабмита формы
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this.popupButtonSubmit.innerText = 'Сохранение...'
      this.submitFunction(this._getInputValues())
    })
  }

  close() {
    super.close()
    this.form.reset()
  }
}
