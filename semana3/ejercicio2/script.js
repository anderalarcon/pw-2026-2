pokemon.forEach((item) => {
  const containerElement = document.getElementById("cards-container");

  //#1
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  //#2
  const imageContainerElement = document.createElement("div");
  imageContainerElement.classList.add("card-image-container");

  //#3
  const imageElement = document.createElement("img");
  imageElement.classList.add("card-image");
  imageElement.src = item.image

  //#4
  const numberElement = document.createElement("p");
  numberElement.classList.add("card-number");
  numberElement.textContent = item.number;

  const nameElement = document.createElement("h2");
  nameElement.classList.add("card-name");
  nameElement.textContent = item.name;

  const typeElement = document.createElement("span");
  typeElement.classList.add("card-type");
  typeElement.classList.add("type-" + item.type.toLowerCase());
  typeElement.textContent = item.type;

  containerElement.appendChild(cardElement);

  cardElement.appendChild(imageContainerElement);

  imageContainerElement.appendChild(imageElement);

  cardElement.appendChild(numberElement);
  cardElement.appendChild(nameElement);
  cardElement.appendChild(typeElement);
});
