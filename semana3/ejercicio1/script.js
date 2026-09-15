const button = document.getElementById("generate-button");
const nameElement = document.getElementById("character-name");
const levelElement = document.getElementById("character-level");
const strengthElement = document.getElementById("character-strength");
const agilityElement = document.getElementById("character-agility");
const intelligenceElement = document.getElementById("character-intelligence");
const healthElement = document.getElementById("character-health");
const rankElement = document.getElementById("character-rank");
const imageElement = document.getElementById("character-avatar");

button.addEventListener("click", () => {
  const name = "ANDER";

  const level = Math.floor(Math.random() * 20) + 1;

  const strength = Math.floor(Math.random() * 100) + 1;
  const agility = Math.floor(Math.random() * 100) + 1;
  const intelligence = Math.floor(Math.random() * 100) + 1;

  const health = 100 + level * 10;

  let rank;

  if (level <= 5) {
    rank = "NOVATO";
  } else if (level <= 10) {
    rank = "AVENTURERO";
  } else if (level <= 15) {
    rank = "GUERRERO";
  } else {
    rank = "ELITE";
  }

  const imageNumber = Math.floor(Math.random() * 3) + 1;

  nameElement.textContent = name;
  levelElement.textContent = level;
  strengthElement.textContent = strength;
  agilityElement.textContent = agility;
  intelligenceElement.textContent = intelligence;
  healthElement.textContent = health;
  rankElement.textContent = rank;
  imageElement.src = `./images/${imageNumber}.jpg`;
});
