const settingsObject = {
  formSelector: '.popup__form',                   //+
  inputSelector: '.popup__inp',                   //+
  submitButtonSelector: '.popup__btn-save',       //+
  inactiveButtonClass: 'popup__btn-save_blocked', //+
  inputErrorClass: 'popup__inp_type_error',       //+
  errorClass: 'popup__inp-errmsg_active'          //+
}

const formsList = Array.from(document.forms)  //ищем все форма в документе перекидываем в массив

console.log(document.forms[0].id)
console.log(document.forms[1].id)


class FormValidator {
  constructor(settings, formElement) {

  }
}



function showInputError(frmElm, inpElm, settingsObject) {

  const errElm = frmElm.querySelector(`.inperr-${inpElm.name}`) //span с текстом ошибки
  if (inpElm.value.length < 1) {
    errElm.textContent = 'Вы пропустили это поле'
  } else {
    errElm.textContent = `Минимальное количество символов: ${inpElm.attributes.minlength.value}. Длина текста сейчас: ${inpElm.value.length} символ`
  }
  errElm.classList.add(settingsObject.errorClass)
  inpElm.classList.add(settingsObject.inputErrorClass)
};

function hideInputError(frmElm, inpElm, settingsObject) {
  const errElm = frmElm.querySelector(`.inperr-${inpElm.name}`)
  errElm.classList.remove(settingsObject.errorClass)
  inpElm.classList.remove(settingsObject.inputErrorClass)
};

function isValid(frmElm, inpElm, settingsObject) {
  if (inpElm.validity.valid) {
    hideInputError(frmElm, inpElm, settingsObject)
  } else {
    showInputError(frmElm, inpElm, settingsObject)
  }
};

function hasInvalidInput (inputsList) {
  return inputsList.some((inputElement) => {return !inputElement.validity.valid})
}

function changeButtonStatus(inputsList, buttonElement, settingsObject) {
  if (hasInvalidInput(inputsList)) {
    buttonElement.classList.add(settingsObject.inactiveButtonClass)
    buttonElement.setAttribute("disabled", "disabled")
  } else {
    buttonElement.classList.remove(settingsObject.inactiveButtonClass)
    buttonElement.removeAttribute("disabled")
  }
}




//________________________________________________________прохождение оп массиву форм
function enableValidation(settingsObject) {
  formsList.forEach(function(formElement) {
    const inputsList = Array.from(formElement.querySelectorAll(settingsObject.inputSelector))     //в каждой форме ищим все инпуты
    const buttonElement = formElement.querySelector(settingsObject.submitButtonSelector)
    inputsList.forEach(function(inputElement) {
      inputElement.addEventListener('input', function() {
        isValid(formElement, inputElement, settingsObject)
        changeButtonStatus(inputsList, buttonElement, settingsObject)
      })
    })
  })
};

enableValidation(settingsObject);



