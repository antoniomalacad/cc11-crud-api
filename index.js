// Initial API call to populate HTML elements.

const getMenu = async () => {
  let URL = `http://localhost:3000/api/`;
  const fetchResult = fetch(URL);
  const response = await fetchResult;
  const data = await response.json();
  const drinkNames = data.map(drink => {
    let newDrink = document.createElement("option");
    newDrink.value = drink.drink;
    newDrink.innerText = drink.drink;
    drink_items.appendChild(newDrink);
    return drink.drink;
  });
};

function createElement(text, div) {
  const container = document.createElement(div);
  const textNode = document.createTextNode(text);
  container.appendChild(textNode);
  return container;
}

const title = createElement("Coffee Shop", "h1");
document.getElementById("title").appendChild(title);

const submitButton = document.getElementById("submit");

const sendOrder = input => {
  return fetch("http://localhost:3000/api/orders", {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "POST",
    body: JSON.stringify(input)
  })
    .then(response => response.json())
    .then(json => {
      console.log("success");
    });
};

submitButton.addEventListener("click", e => {
  e.preventDefault();
  const selectedDrink = document.getElementById("drinks");
  const drinkName = selectedDrink[selectedDrink.selectedIndex].value;
  const selectedNum = document.getElementById("amount");
  const drinkAmt = selectedNum[selectedNum.selectedIndex].value;
  const inputName = document.getElementById("name");
  const name = inputName.value;
  const extraInputs = document.getElementById("extras");
  const extras = extraInputs.value;
  console.log("Order submitted", drinkAmt, extras, drinkName, "for", name);
  const orderLog = {
    drink_name: drinkName,
    amount: drinkAmt,
    customer_name: name,
    timestamp: new Date(),
    comments: extras
  };
  sendOrder(orderLog);
  document.getElementById("form").reset();
});

const drink_items = document.getElementById("drinks");
getMenu();
