let overlay = document.querySelector('.overlay');

let profilePersonName = document.querySelector('.profile__person-name');
let profilePersonDesc = document.querySelector('.profile__person-description');
let btnEdit = document.querySelector('.profile__btn-edit');
let btnPlaceAdd = document.querySelector('.profile__btn-add')
// let btnPlaceDel = document.querySelector('.place__btn-delit')
// let btnPlaceLke = document.querySelector('.place__btn-like')


let popupTitle = document.querySelector('.popup__title');
let formElement = document.querySelector('.popup__form');
let inpPopupPersonName = document.querySelector('input[name="name"]');
let inpPopupPersonDesc = document.querySelector('input[name="description"]');
let btnPopupSave = document.querySelector('.popup__btn-save');
let btnPopupClose = document.querySelector('.popup__btn-close');

let placesTable = document.querySelector('.places__table')

const initialPlaces = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Загрузка попапа редактирования профиля
function popupPersonEdit() {
  overlay.classList.add('overlay_on')
  popupTitle.textContent = 'Редактирование профиля'
  btnPopupSave.textContent = 'Сохранить'
  inpPopupPersonName.value = profilePersonName.textContent
  inpPopupPersonDesc.value = profilePersonDesc.textContent
};
// Загрузка попапа добавления карточки места
function popupPlaceAdd() {
  overlay.classList.add('overlay_on')
  popupTitle.textContent = 'Новое место'
  btnPopupSave.textContent = 'Создать'
  inpPopupPersonName.value = 'Название'
  inpPopupPersonDesc.value = 'Ссылка на картинку'
};


//___________________________________Функция обработки карточек
function placeWork(placeName, placeImage) {
  const placeTemplate = document.querySelector('#place-template').content
  const placeNew = placeTemplate.querySelector('.place').cloneNode(true)

  placeNew.querySelector('.place__name').textContent = placeName
  placeNew.querySelector('.place__image').src = placeImage
  placeNew.querySelector('.place__image').alt = placeName

  // _____________Удаление карточек
  placeNew.querySelector('.place__btn-delit').addEventListener('click', function() {
    placeNew.remove()
  })
  // _____________Статус Like
  placeNew.querySelector('.place__btn-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('place__btn-like_active')
  })


  // songElement.querySelector('.song__like').addEventListener('click', function(evt) {
  //   evt.target.classList.toggle('song__like_active')
  //   console.log(evt.target.classList)
  // })
  placesTable.prepend(placeNew)
}
function placeDelit() {

}


//___________________________________Функция загрузки базовых карточек
function placesInit() {
  for (i = 0; i < initialPlaces.length; i++) {
    placeWork(initialPlaces[i].name, initialPlaces[i].link)
  }
}

function overlayDeactivated() {
  overlay.classList.remove('overlay_on')
};

//___________________________________Функция отработки submit на попапе
function infoSave(evt) {
  evt.preventDefault()
  if (popupTitle.textContent === 'Новое место') {  //на форме добавления места//
    placeWork(inpPopupPersonName.value, initialPlaces[4].link)  //удалить//
    // placeWork(inpPopupPersonName.value, inpPopupPersonDesc.value)   раскомитить//
    overlayDeactivated()
  }
  else {
    profilePersonName.textContent = inpPopupPersonName.value  //на форме редактирования профиля//
    profilePersonDesc.textContent = inpPopupPersonDesc.value
    overlayDeactivated()
  }
};

//____________________________________загрузка базовых карточек
placesInit()

btnEdit.addEventListener('click', popupPersonEdit);
btnPlaceAdd.addEventListener('click', popupPlaceAdd);
btnPopupClose.addEventListener('click', overlayDeactivated); //попробовать вписать функцию короче в тело слушателя//
formElement.addEventListener('submit', infoSave);






