let cardForDeleteId = ''
let cardForDeleteElement = ''
// const placeElement = []
let idUser = ''

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
} from '../utils/constants.js'

import { Card } from '../components/Card.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import API from '../components/Api.js'

function cardСreating(initialPlace, placeSelector, userIdInfo) {
  const place = new Card({
    name: initialPlace.name,
    link: initialPlace.link,
    likes: initialPlace.likes,
    ownerId: initialPlace.owner._id,
    cardId: initialPlace._id,
    userIdInfo: userIdInfo,

    handleCardClick: (name, link) => {
      imagePopup.open(name, link)
    },
    // cardDelete: (cardId) => {
    //   // cardForDeleteElement.remove(),
    //   // cardForDeleteElement = null
    //   // api.deleteCard(cardId)
    //   //   .catch(err => console.log(`Ошибка.....: ${err}`))
    // },
    addLikesApi: (cardId, cardLikes) => {
      api.addLikes(cardId)
        .then((addLikeResponse) => cardLikes.textContent = addLikeResponse.likes.length)
        .catch(err => console.log(`Ошибка.....: ${err}`))
    },
    deleteLikesApi: (cardId, cardLikes) => {
      api.deleteLikes(cardId)
        .then((addLikeResponse) => cardLikes.textContent = addLikeResponse.likes.length)
        .catch(err => console.log(`Ошибка.....: ${err}`))
    },
    deleteCardPopupOpen: (cardIdForDelete, place) => {

      cardDeletePopup.open()
      cardForDeleteId = cardIdForDelete
      cardForDeleteElement = place
    },
  },
   placeSelector
  )
  // cardForDeleteElement = place
  return place.generateCard()
}

const imagePopup = new PopupWithImage('#popupPlaceView')
imagePopup.setEventListeners()

//-------------объект попапа добавления карточки
const placeFormPopup = new PopupWithForm({
  popupName: '#popupPlaceAdd',
  submitFunction: (cardData) => {
    api.sendCard(cardData.name, cardData.description)
      .then((resCardData) => {
        const placeElement = cardСreating(resCardData, placeSelector, idUser)
        cardsSection.addItem(placeElement)
        placeFormPopup.close()
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => {placeFormPopup.popupButtonSubmit.innerText = 'Создать'})
  }
})
placeFormPopup.setEventListeners()

//-------------объект попапа редактирования профиля
const personFormPopup = new PopupWithForm({
  popupName: '#popupProfileEdit',
  submitFunction: (popupInputObject) => {
    //отправка данных на сервер
    api.givePersonInfo(popupInputObject.name, popupInputObject.description)
      .then((response) => {
        userInfo.setUserInfo(response.name, response.about)
        personFormPopup.close()
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => {personFormPopup.popupButtonSubmit.innerText = 'Сохранить'})
  }
})
personFormPopup.setEventListeners()

// -------------объект попапа удаления карточки
const cardDeletePopup = new PopupWithForm({
  popupName: '#popupCardDelete',
  submitFunction: () => {
    api.deleteCard(cardForDeleteId)
      .then(() => {
        cardForDeleteElement.deleteCard()
        cardDeletePopup.close()
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => {cardDeletePopup.popupButtonSubmit.innerText = 'Да'})
  }
})
cardDeletePopup.setEventListeners()

//-------------объект попапа редактирования аватара
const avatarEditPopup = new PopupWithForm({
  popupName: '#popupProfileImgEdit',
  submitFunction: (popupInputObject) => {
    api.getAvatar(popupInputObject.name)
      .then((response) => {
        userInfo.setNewAvatar(response.avatar)
        avatarEditPopup.close()
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => {avatarEditPopup.popupButtonSubmit.innerText = 'Сохранить'})
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


const api = new API('https://mesto.nomoreparties.co/v1/cohort-40/', {
  'Accept': 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'authorization': '8979c03d-d651-4578-8bdf-d2973cc4dde5'
})

//----------------запрос стартовых данных карточек и пользователя с сервера и отрисовка
Promise.all([
  api.getCards(),
  api.getPersonInfo()
  ])
  .then((values) => {
    idUser = values[1]._id
    cardsSection.renderItems(values[0])
    userInfo.setUserInfo(values[1].name, values[1].about)
    userInfo.setNewAvatar(values[1].avatar)
  })
  .catch(err => console.log(`Ошибка.....: ${err}`))

const cardsSection = new Section({
  items: initialPlaces,
  renderer: (item) => {
    cardsSection.addItem(cardСreating(item, placeSelector, idUser))
  }
},
  containerSelector
)




