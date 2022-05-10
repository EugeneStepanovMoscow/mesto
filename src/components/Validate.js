class FormValidator {
  constructor(settings, formElement) {
    this.formElement = formElement
    this.formSelector = settings.formSelector
    this.inputSelector = settings.inputSelector
    this.submitButtonSelector = settings.submitButtonSelector
    this.inactiveButtonClass = settings.inactiveButtonClass
    this.inputErrorClass = settings.inputErrorClass
    this.errorClass = settings.errorClass
  }

  enableValidation() {
    this._setEventListeners(this.formElement)
  }

  _isValid(formElement, input) {
  if (input.validity.valid) {
    this._hideInputError(formElement, input)
  } else {
    this._showInputError(formElement, input)
  }
};

  _setEventListeners(formElement) {
    const inputsList = Array.from(formElement.querySelectorAll(this.inputSelector))
    const buttonElement = formElement.querySelector(this.submitButtonSelector)
    inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this.changeButtonStatus(inputsList, buttonElement)
        this._isValid(formElement, input)
      })
    })
  }

  _hasInvalidInput(inputsList) {
    return inputsList.some((inputElement) => {return !inputElement.validity.valid})
  }

  changeButtonStatus(inputsList, buttonElement) {
    if (this._hasInvalidInput(inputsList)) {
        buttonElement.classList.add(this.inactiveButtonClass)
        buttonElement.setAttribute("disabled", "disabled")
    } else {
        buttonElement.classList.remove(this.inactiveButtonClass)
        buttonElement.removeAttribute("disabled")
    }
  }

  _showInputError(formElement, input) {
    const errorElement = formElement.querySelector(`.inperr-${input.name}`) //span с текстом ошибки
    errorElement.textContent = input.validationMessage
    errorElement.classList.add(this.errorClass)
    input.classList.add(this.inputErrorClass)
  };

  _hideInputError(formElement, input) {
    const errorElement = formElement.querySelector(`.inperr-${input.name}`)
    errorElement.classList.remove(this.errorClass)
    input.classList.remove(this.inputErrorClass)
  }
}

export { FormValidator }




