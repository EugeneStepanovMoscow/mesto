
export default class UserInfo {
  constructor({name, profession, photo}) {
    this.name = document.querySelector(name);
    this.profession = document.querySelector(profession);
    this.photo = document.querySelector(photo)
  }
  getUserInfo() {
    const user = {}
    user.name = this.name.textContent
    user.profession = this.profession.textContent
    user.photo = this.photo.src
    return user
  }
  setUserInfo(newName, newProfession) {
    this.name.textContent = newName
    this.profession.textContent = newProfession
    // this.photo.src = newPhoto
  }
  setNewAvatar(newPhoto) {
    this.photo.src = newPhoto
  }
}
