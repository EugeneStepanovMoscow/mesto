
export default class API {
  constructor(url, headers) {
    this._url = url;
    this._headers = headers;
  }
  _makeRequest(promise) {
    return promise.then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw 'Ошибка запроса'
      }
    })
    .then((obj) => {
      return obj
    })
  }
//---------------------отправка карточки
  getCards(url) {
    const promise = fetch(url, {
      method: 'GET',
      headers: this._headers
    })
    return this._makeRequest(promise)
    .catch((error) => {
      console.log(error)
    })
  }

  getPersonInfo(url) {
    const promise = fetch(url, {
      method: 'GET',
      headers: this._headers
    })
    return this._makeRequest(promise)
    .catch((error) => {
      console.log(error)
    })
  }
//----отправка нового аватара
getAvatar(avatar) {
  const promise = fetch(`https://mesto.nomoreparties.co/v1/cohort-40/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: '8979c03d-d651-4578-8bdf-d2973cc4dde5',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatar
    })
  })
  return this._makeRequest(promise)
  .catch((error) => {
    console.log(error)
  })
}

//----Добавление лайков на карточку
  addLikes(cardId) {
    const promise = fetch(`https://mesto.nomoreparties.co/v1/cohort-40/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '8979c03d-d651-4578-8bdf-d2973cc4dde5',
        'Content-Type': 'application/json'
      }
    })
    return this._makeRequest(promise)
    .catch((error) => {
      console.log(error)
    })
  }
//----Удаление лайков на карточку
  deleteLikes(cardId) {
    const promise = fetch(`https://mesto.nomoreparties.co/v1/cohort-40/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: '8979c03d-d651-4578-8bdf-d2973cc4dde5',
        'Content-Type': 'application/json'
      }
    })
    return this._makeRequest(promise)
    .catch((error) => {
      console.log(error)
    })
  }

  deleteCard(cardId) {
    const promise = fetch(`https://mesto.nomoreparties.co/v1/cohort-40/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: '8979c03d-d651-4578-8bdf-d2973cc4dde5',
        'Content-Type': 'application/json'
      }
    })
    return this._makeRequest(promise)
    .catch((error) => {
      console.log(error)
    })
  }

  //-----------------------

//--------------------отправка карточки
  sendCard(name, link) {
    const promise = fetch('https://mesto.nomoreparties.co/v1/cohort-40/cards', {
      method: 'POST',
      headers: {
        authorization: '8979c03d-d651-4578-8bdf-d2973cc4dde5',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    return this._makeRequest(promise)
    .catch((error) => {
      console.log(error)
    })
  }
//----------передача информации о профиле
  givePersonInfo(newName, newAbout) {
    const promise = fetch('https://mesto.nomoreparties.co/v1/cohort-40/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '8979c03d-d651-4578-8bdf-d2973cc4dde5',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newName,
        about: newAbout
      })
    })
    return this._makeRequest(promise)
    .catch((error) => {
      console.log(error)
    })
  }
}





