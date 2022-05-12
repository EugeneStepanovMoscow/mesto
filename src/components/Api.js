export default class API {
  constructor(url, headers) {
    this._baseUrl = url;
    this._headers = headers;
  }
  _makeRequest(promise) {
    return promise.then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
    .then((obj) => {
      return obj
    })
  }
//---------------------Получение карточки
  getCards() {
    const promise = fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers
    })
    return this._makeRequest(promise)
  }
//---------------------Получение информации о пользователе
  getPersonInfo() {
    const promise = fetch(`${this._baseUrl}users/me`, {
      //в конструкторе передается url (https://mesto.nomoreparties.co/v1/cohort-40/)
      //который вдальнейшем используется как baseUrl/
      //В задании к ПР9 в первом пункте указывается Url (https://nomoreparties.co/v1/cohortId/users/me)
      method: 'GET',
      headers: this._headers
    })
    return this._makeRequest(promise)
  }
//---------------------Отправка нового аватара
  getAvatar(avatar) {
    const promise = fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
  return this._makeRequest(promise)
  }
//---------------------Добавление лайков на карточку
  addLikes(cardId) {
    const promise = fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    return this._makeRequest(promise)
  }
//----------------------Удаление лайков на карточку
  deleteLikes(cardId) {
    const promise = fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    return this._makeRequest(promise)
  }
//---------------------Удаление карточки
  deleteCard(cardId) {
    const promise = fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    return this._makeRequest(promise)
  }
//---------------------Отправка карточки
  sendCard(name, link) {
    const promise = fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    return this._makeRequest(promise)
  }
//---------------------Передача информации о профиле
  givePersonInfo(newName, newAbout) {
    const promise = fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: newName,
        about: newAbout
      })
    })
    return this._makeRequest(promise)
  }
}





