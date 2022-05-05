var cardForDeleteId = ''
var cardForDeleteElement = ''
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
  formValidatorPopupPlaceAdd,
  btnAvatarEdit,
  formValidatorPopupAvatarEdit,
  // cardForDeleteId
} from '../utils/constants.js'

import { Card } from '../components/Card.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import API from '../components/Api.js'

function cardСreating(initialPlace, placeSelector) {
  const place = new Card({
    name: initialPlace.name,
    link: initialPlace.link,
    likes: initialPlace.likes,
    ownerId: initialPlace.owner._id,
    cardId: initialPlace._id,

    handleCardClick: (name, link) => {
      imagePopup.open(name, link)
    },
    cardDeleteApi: (cardId) => {
      api.deleteCard(cardId)
    },
    addLikesApi: (cardId, cardLikes) => {
      api.addLikes(cardId).then((addLikeResponse) => cardLikes.textContent = addLikeResponse.likes.length)
    },
    deleteLikesApi: (cardId, cardLikes) => {
      api.deleteLikes(cardId).then((addLikeResponse) => cardLikes.textContent = addLikeResponse.likes.length)
    },
    deleteCardPopupOpen: (cardIdForDelete, cardElementForDelete) => {
      cardDeletePopup.open()
      cardForDeleteId = cardIdForDelete
      cardForDeleteElement = cardElementForDelete
    },
  },
   placeSelector
  )
  return place
}

const imagePopup = new PopupWithImage('#popupPlaceView')
imagePopup.setEventListeners()

//-------------объект попапа добавления карточки
const placeFormPopup = new PopupWithForm({
  popupName: '#popupPlaceAdd',
  submitFunction: (cardData) => {
    api.sendCard(cardData.name, cardData.link).then(() => {
      const placeElement = cardСreating(cardData, placeSelector).generateCard()
      cardsSection.addItem(placeElement)
      placeFormPopup.close()
      placeFormPopup.popupButtonSubmit.innerText = 'Сохранить'
    })
  }
})
placeFormPopup.setEventListeners()

//-------------объект попапа редактирования профиля
const personFormPopup = new PopupWithForm({
  popupName: '#popupProfileEdit',
  submitFunction: (popupInputObject) => {
    //отправка данных на сервер
    api.givePersonInfo(popupInputObject.name, popupInputObject.link).then((response) => {
      userInfo.setUserInfo(response.name, response.about)
      personFormPopup.close()
      personFormPopup.popupButtonSubmit.innerText = 'Сохранить'
    })
  }
})
personFormPopup.setEventListeners()

// -------------объект попапа удаления карточки
const cardDeletePopup = new PopupWithForm({
  popupName: '#popupCardDelete',
  submitFunction: () => {
    api.deleteCard(cardForDeleteId).then(() => {
      cardForDeleteElement.remove(),
      cardForDeleteElement = null
      cardDeletePopup.close()
      cardDeletePopup.popupButtonSubmit.innerText = 'Да'
    })
  }
})
cardDeletePopup.setEventListeners()

//-------------объект попапа редактирования аватара
const avatarEditPopup = new PopupWithForm({
  popupName: '#popupProfileImgEdit',
  submitFunction: (popupInputObject) => {
    api.getAvatar(popupInputObject.name).then((response) => {
      userInfo.setNewAvatar(response.avatar)
      avatarEditPopup.close()
      avatarEditPopup.popupButtonSubmit.innerText = 'Сохранить'
    })
  }
})
avatarEditPopup.setEventListeners()



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

//_____________________________________Открытие попапа редакатирования аватара
btnAvatarEdit.addEventListener('click', () => {
  avatarEditPopup.open()
})

formValidatorPopupProfileEdit.enableValidation()
formValidatorPopupPlaceAdd.enableValidation()
formValidatorPopupAvatarEdit.enableValidation()


const api = new API('https://nomoreparties.co/v1/cohort-40/users/me', {
  'Accept': 'aplication/json',
  'Content-Type': 'aplication/json; charset=utf-8',
  'authorization': '8979c03d-d651-4578-8bdf-d2973cc4dde5'
})

//----------------запрос данных пользователя при загрузке
api.getPersonInfo('https://nomoreparties.co/v1/cohort-40/users/me').then((personInfo) => {
  //присвоение DOM элементам свойств объекта
  userInfo.setUserInfo(personInfo.name, personInfo.about)
  userInfo.setNewAvatar(personInfo.avatar)
})

//----------------запрос данных карточек с сервера и отрисовка
api.getCards('https://mesto.nomoreparties.co/v1/cohort-40/cards').then((cards) => {
  cards.forEach((cardData) => {
    const placeElement = cardСreating(cardData, placeSelector).generateCard()
    cardsSection.addItem(placeElement)
  })
  cardsSection.render()
})

const cardsSection = new Section({
  items: initialPlaces,
  renderer: (initialPlace) => {
    const placeElement = cardСreating(initialPlace, placeSelector).generateCard()
    cardsSection.addItem(placeElement)
  }
},
  containerSelector
)
