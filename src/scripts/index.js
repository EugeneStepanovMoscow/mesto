import '../pages/index.css'



import {
  btnProfileEdit,
  btnPlaceAdd,
  inpPopupProfileEditName,
  inpPopupProfileEditDesc,
  formsList,
  initialPlaces,
  containerSelector,
  placeSelector,
  profileSelectors,
} from './utils/constants.js'

import { Card } from './Card.js'
import { settingsObject, FormValidator } from './validate.js'
import Section from './Section.js'
import UserInfo from './UserInfo.js'
import PopupWithImage from './PopupWithImage.js'
import PopupWithForm from './PopupWithForm.js'


const cardsSection = new Section({
  items: initialPlaces,
  renderer: (initialPlace) => {
    const place = new Card({
      name: initialPlace.name,
      link: initialPlace.link,
      handleCardClick: (name, link) => {
        imagePopup.open(name, link)
        imagePopup.setEventListeners()
      }
    },
     placeSelector)
    const placeElement = place.generateCard()
  cardsSection.addItem(placeElement)
  }
},
  containerSelector)
cardsSection.render()

const imagePopup = new PopupWithImage('#popupPlaceView')

const placeFormPopup = new PopupWithForm({
  popupName: '#popupPlaceAdd',
  submitFunction: (cardData) => {
    const newCardsSection = new Section({
      items: cardData,
      renderer: (cardData) => {
        const place = new Card({
          name: cardData.name,
          link: cardData.link,
          handleCardClick: (name, link) => {
            imagePopup.open(name, link)
            imagePopup.setEventListeners()
          }
        },
         placeSelector)
        const placeElement = place.generateCard()
      cardsSection.addItem(placeElement)
      }
    },
      containerSelector)
    newCardsSection.render()
  }
})
placeFormPopup.setEventListeners()

const personFormPopup = new PopupWithForm({
  popupName: '#popupProfileEdit',
  submitFunction: () => {
    userInfo.setUserInfo(inpPopupProfileEditName.value, inpPopupProfileEditDesc.value)
  }
})
personFormPopup.setEventListeners()

const userInfo = new UserInfo(profileSelectors)

//____________________________________Открытие попапа Редактирование профиля по кнопке
btnProfileEdit.addEventListener('click', function() {
  const user = userInfo.getUserInfo()
  inpPopupProfileEditName.value = user.name
  inpPopupProfileEditDesc.value = user.profession
  personFormPopup.open()
});

//_________________________слушатель кнопки добавление карточки
btnPlaceAdd.addEventListener('click', () => {
  placeFormPopup.open()
});

const formValidatorPopupProfileEdit = new FormValidator(settingsObject, formsList[0])
formValidatorPopupProfileEdit.enableValidation()

const formValidatorPopupPlaceAdd = new FormValidator(settingsObject, formsList[1])
formValidatorPopupPlaceAdd.enableValidation()




