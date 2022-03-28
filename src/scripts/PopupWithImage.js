import {
  imgPopupPlaceView,
  figcapPopupPlaceView
} from './utils/constants.js'
import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupName) {
    super(popupName)
  }
  open(name, link) {
    imgPopupPlaceView.src = link
    figcapPopupPlaceView.textContent = name
    super.open()
  }
}
