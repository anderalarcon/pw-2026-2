const btnGreen = document.getElementById("btn-green");
const btnPurple = document.getElementById("btn-purple");
const btnDark = document.getElementById("btn-dark");
const btnBlue = document.getElementById("btn-blue");

const body = document.body;
const textElement = document.getElementById("theme-name");

const changeTheme = (theme, text) => {
  body.classList.remove(
    "theme-green",
    "theme-purple",
    "theme-dark",
    "theme-blue",
  );

  body.classList.add(theme);
  textElement.textContent = text;
};

btnGreen.addEventListener("click", () => {
  changeTheme("theme-green", "Tema seleccionado: verde")
});

btnBlue.addEventListener("click", () => {
  changeTheme("theme-blue", "Tema seleccionado: azul")
});


btnPurple.addEventListener("click", () => {
  changeTheme("theme-purple", "Tema seleccionado: morado")
});

btnDark.addEventListener("click", () => {
  changeTheme("theme-dark", "Tema seleccionado: dark")
});

