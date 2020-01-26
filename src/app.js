require("./index.css");

function createElement(text, div) {
  const container = document.createElement(div);
  const textNode = document.createTextNode(text);
  container.appendChild(textNode);
  return container;
}

const title = createElement("Coffee Menu", "h1");
document.getElementById("title").appendChild(title);
