import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupName) {
    super(popupName)
    this.imgPopupPlaceView = document.querySelector('.popup__image')
    this.figcapPopupPlaceView = document.querySelector('.popup__figcaption')
  }
  open(name, link) {
    this.imgPopupPlaceView.src = link
    this.imgPopupPlaceView.alt = name
    this.figcapPopupPlaceView.textContent = name
    super.open()
  }
}
