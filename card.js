export { Card };

class Card {
  constructor(title, url) {
    this.title = title;
    this.url = url;
    this.render();
  }
  render() {
    let element = document.createElement("li");
    element.classList.add("card");
    element.style.backgroundImage = `url("${this.url}")`;
    element.innerHTML = `<h4>${this.title}</h4>`;
    this.element = element;
  }

  appendTo(parent) {
    parent.append(this.element);
  }
}
  