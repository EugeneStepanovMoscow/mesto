export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }
  // изначальный вид метода render (до проверок)
  // render() {
  //   this._renderedItems.forEach(item => {
  //     this._renderer(item);
  //   });
  // }
  // при первой проверке метод изменил (он стал принимать массив карточек не из конструктора)
  // сейчас фактически меняю название метода с render на renderItems



}
