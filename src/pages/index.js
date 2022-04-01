import '../pages/index.css'

import {
  btnProfileEdit,
  btnPlaceAdd,
  inpPopupProfileEditName,
  inpPopupProfileEditDesc,
  initialPlaces,
  containerSelector,
  placeSelector,
  profileSelectors,
  formValidatorPopupProfileEdit,
  formValidatorPopupPlaceAdd
} from '../utils/constants.js'

import { Card } from '../components/Card.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'


function cardСreating (initialPlace, placeSelector) {
  const place = new Card({
    name: initialPlace.name,
    link: initialPlace.description,
    handleCardClick: (name, link) => {
      imagePopup.open(name, link)
    }
  },
   placeSelector
  )
  return place
}


const cardsSection = new Section({
  items: initialPlaces,
  renderer: (initialPlace) => {
    const placeElement = cardСreating(initialPlace, placeSelector).generateCard()
    cardsSection.addItem(placeElement)
  }
},
  containerSelector
)
cardsSection.render()

const imagePopup = new PopupWithImage('#popupPlaceView')
imagePopup.setEventListeners()

const placeFormPopup = new PopupWithForm({
  popupName: '#popupPlaceAdd',
  submitFunction: (cardData) => {

    const placeElement = cardСreating(cardData, placeSelector).generateCard()
    cardsSection.addItem(placeElement)
  }
})

placeFormPopup.setEventListeners()

const personFormPopup = new PopupWithForm({
  popupName: '#popupProfileEdit',
  submitFunction: (popupInputObject) => {
    userInfo.setUserInfo(popupInputObject.name, popupInputObject.description)
  }
})
personFormPopup.setEventListeners()

const userInfo = new UserInfo(profileSelectors)

//____________________________________Открытие попапа Редактирование профиля по кнопке
btnProfileEdit.addEventListener('click', function() {
  const user = userInfo.getUserInfo()
  inpPopupProfileEditName.value = user.name
  inpPopupProfileEditDesc.value = user.profession
  formValidatorPopupProfileEdit.changeButtonStatus(personFormPopup._inputs, personFormPopup.popupButtonSubmit)
  personFormPopup.open()
});

//_____________________________________Открытие попапа добавления карточки по кнопке
btnPlaceAdd.addEventListener('click', () => {
  formValidatorPopupPlaceAdd.changeButtonStatus(placeFormPopup._inputs, placeFormPopup.popupButtonSubmit)
  placeFormPopup.open()
});

formValidatorPopupProfileEdit.enableValidation()
formValidatorPopupPlaceAdd.enableValidation()




