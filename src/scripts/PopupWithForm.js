import Popup from "./Popup.js"
import {
  inpPopupPlaceAddPlaceName,
  inpPopupPlaceAddPlaceImg,
} from './utils/constants.js'

export default class PopupWithForm extends Popup {
  constructor({popupName, submitFunction}) {
    super(popupName),
    this.submitFunction = submitFunction
    this.form = this.popupElement.querySelector('.popup__form')
  }
  _getInputValues() {
    const popupInputsData = []
    const popupInputObject = {}
    popupInputObject.name = inpPopupPlaceAddPlaceName.value
    popupInputObject.link = inpPopupPlaceAddPlaceImg.value
    popupInputsData.push(popupInputObject)
    return popupInputsData
  }
  setEventListeners() {
    super.setEventListeners()
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      const cardData = this._getInputValues()
      this.submitFunction(cardData)
      this.close()
    })
  }
  close() {
    super.close()
    this.form.reset()
  }
}
