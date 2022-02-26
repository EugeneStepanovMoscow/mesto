const items = [
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
    title: 'BIOLOID',
    description: 'Это популярная серия программируемых робототехнических конструкторов компании Robotis. Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач. Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания уникального вида собранным моделям.',
    price: '82 000'
  },
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
    title: 'BIOLOID Premium kit',
    description: 'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
    price: '126 000'
  },
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
    title: 'Airwheel',
    description: 'Модель позволяет использовать при движении и педали и электрическую тягу, а также их сочетание. Съемный аккумулятор легко заменяется во время поездки, позволяя тем самым существенно увеличивать ее продолжительность.',
    price: '145 000'
  },
];

const popupElement = document.querySelector('.popup');
const popupImage = document.querySelector('.popup__image');
const popupCloseButton = document.querySelector('.popup__close');

class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }



  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add('popup_is-opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_is-opened');
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }
}

class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._image = data.image;
    this._cardSelector = cardSelector;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();
    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__info').textContent = this._description;
    this._element.querySelector('.card__price-property').textContent = this._price;
    return this._element;
  }
}

class HorizontalCard extends Card {
    constructor(data, cardSelector) {
      super(cardSelector)
      this._title = data.title;
      this._description = data.description;
      this._price = data.price;
      this._image = data.image;
      this._cardSelector = cardSelector;
    }
    generateCard() {
      this._element = super._getTemplate();
      super._setEventListeners();
      this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
      this._element.querySelector('.card__title').textContent = this._title;
      this._element.querySelector('.card__info').textContent = this._description;
      this._element.querySelector('.card__price-property').textContent = this._price;
      return this._element;
    }
}

const cardList = document.querySelector('.card-list__items')
console.log(cardList)
var isGrid = false


function renderElements(isGrid) {

  cardList.innerHTML = ''
  items.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, '.default-card')
      : new HorizontalCard(item, '.horizontal-card');
    const cardElement = card.generateCard();
    cardList.append(cardElement);
  });
}

renderElements(isGrid)
