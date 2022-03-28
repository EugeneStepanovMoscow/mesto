
export default class UserInfo {
  constructor({name, profession}) {
    this.name = document.querySelector(name);
    this.profession = document.querySelector(profession);
  }
  getUserInfo() {
    const user = {}
    user.name = this.name.textContent
    user.profession = this.profession.textContent
    return user
  }
  setUserInfo(newName, newProfession) {
    this.name.textContent = newName
    this.profession.textContent = newProfession
  }
}
