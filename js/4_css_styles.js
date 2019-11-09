/**
Создать массив CSS-стилей (цвет, размер шрифта, выравнивание,
подчеркивание и т. д.). Каждый элемент массива – это объект,
состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и текст, и
выводит этот текст с помощью document.write() в тегах <p></p>,
добавив в открывающий тег атрибут style со всеми стилями,
перечисленными в массиве.
*/

class CSSProperty {

  constructor(property, value) {
    this.property = property;
    this.value = value;
  }

  toString() {
    return `${this.property}:${this.value};`;
  }

}

let css = [
  new CSSProperty("color", "red"),
  new CSSProperty("font-size", "16px"),
  new CSSProperty("text-align", "left"),
  new CSSProperty("text-decoration", "underline"),
  new CSSProperty("font-weight", "bold"),
];
//console.log(css);

let show = (text, styles) => {
  let cssStyles = styles.reduce((cssStr, prop) => {
    return cssStr + prop.toString();
  }, "");

  //console.log(cssStyles);
  //document.write(`<p style="${cssStyles}">${text}</p>`);

  let p = document.createElement("p");

  p.innerText = text;
  p.setAttribute("style", cssStyles);

  document.body.appendChild(p);
}

show("Hello, World!!!", css);
