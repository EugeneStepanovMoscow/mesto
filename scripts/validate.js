const settingsObject = {
  formSelector: '.popup__form',                   //+
  inputSelector: '.popup__inp',                   //+
  submitButtonSelector: '.popup__btn-save',       //+
  inactiveButtonClass: 'popup__btn-save_blocked', //+
  inputErrorClass: 'popup__inp_type_error',
  errorClass: 'popup__inp-errmsg_active'          //+
}

function showInputError(frmElm, inpElm) {
  const errElm = frmElm.querySelector(`.inperr-${inpElm.name}`)  //span с текстом ошибки
  //проверка на кол-во символов в строке
  if (inpElm.value.length < 1) {
    errElm.textContent = 'Вы пропустили это поле'
  } else {
    errElm.textContent = `Минимальное количество символов: ${inpElm.attributes.minlength.value}. Длина текста сейчас: ${inpElm.value.length} символ`
  }
  errElm.classList.add(settingsObject.errorClass)
  inpElm.classList.add(settingsObject.inputErrorClass)
};

function hideInputError(frmElm, inpElm) {
  const errElm = frmElm.querySelector(`.inperr-${inpElm.name}`)
  errElm.classList.remove(settingsObject.errorClass)
  inpElm.classList.remove(settingsObject.inputErrorClass)
};

// функция проверки валидности
function isValid(frmElm, inpElm) {
  if (inpElm.validity.valid) {
    hideInputError(frmElm, inpElm)
  } else {
    showInputError(frmElm, inpElm)
  }
};

function hasInvalidInput (inputsList) {
  return inputsList.some((inputElement) => {return !inputElement.validity.valid})
}

function changeButtonStatus(inputsList, buttonElement) {
  if (hasInvalidInput(inputsList)) {
    buttonElement.classList.add(settingsObject.inactiveButtonClass)
    buttonElement.setAttribute("disabled", "disabled")
  } else {
    buttonElement.classList.remove(settingsObject.inactiveButtonClass)
    buttonElement.removeAttribute("disabled")
  }
}


function enableValidation() {
  const formsList = Array.from(document.forms)                                                    //ищем все форма в документе перекидываем в массив
  formsList.forEach(function(formElement) {
    const inputsList = Array.from(formElement.querySelectorAll(settingsObject.inputSelector))     //в каждой форме ищим все инпуты
    const buttonElement = formElement.querySelector(settingsObject.submitButtonSelector)          //добавляем кнопку из формы
    inputsList.forEach(function(inputElement) {
      inputElement.addEventListener('input', function() { //добавляем всем инпутам слушателей на input
        isValid(formElement, inputElement)
        changeButtonStatus(inputsList, buttonElement)
      })
    })
  })
};

enableValidation();



