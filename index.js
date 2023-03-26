const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const lettersSymbols = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const mainContent = document.getElementById("main");
const body = document.body;
const passwordLength = document.getElementById("length");
const displayFirstPassword = document.getElementById("first-password");
const displaySecondPassword = document.getElementById("second-password");
const symbols = document.getElementById("include-symbols");
const numbers = document.getElementById("include-numbers");
let randomIndex = 0;
let defaultPassLength = 15;
let arrayLength = characters.length;
arrayPlaceholder = [];
let firstPassword = "";
let secondPassword = "";

function lightScreen() {
  mainContent.style.backgroundColor = "#1f2937";
  body.style.backgroundColor = "#5480ce";
  displayFirstPassword.style.backgroundColor = "#1f2937";
  displaySecondPassword.style.backgroundColor = "#1f2937";
}
function darkScreen() {
  mainContent.style.backgroundColor = "#5480ce";
  body.style.backgroundColor = "#1f2937";
  displayFirstPassword.style.backgroundColor = "#5480ce";
  displaySecondPassword.style.backgroundColor = "#5480ce";
}
function getPasswords() {
  if (
    passwordLength.value != "" &&
    passwordLength.value != 0 &&
    passwordLength.value < 1000
  ) {
    defaultPassLength = Number(passwordLength.value);
  }
  if (defaultPassLength > 20) {
    displayFirstPassword.style.width = "fit-content";
    displaySecondPassword.style.width = "fit-content";
  }
  if (defaultPassLength > 100) {
    displayFirstPassword.style.height = "fit-content";
    displaySecondPassword.style.height = "fit-content";
  }
  firstPassword = generatePassword();
  displayFirstPassword.innerText = firstPassword;
  //   console.log(defaultPassLength);
  displaySecondPassword.innerText = firstPassword;
  //   console.log(defaultPassLength);
  console.log("first", displayFirstPassword.innerText.length);
  console.log("second", displaySecondPassword.innerText.length);
  defaultPassLength = 15;
}
function generatePassword() {
  //console.log(characters.indexOf("0"));
  arrayPlaceholder = characters;
  if (!symbols.checked && !numbers.checked) {
    arrayLength = characters.indexOf("0");
  } else if (!symbols.checked && numbers.checked) {
    arrayLength = characters.indexOf("~");
  } else if (symbols.checked && !numbers.checked) {
    arrayLength = lettersSymbols.length;
    // console.log("true");
    arrayPlaceholder = lettersSymbols;
  } else if (symbols.checked && numbers.checked) {
    arrayLength = characters.length;
  }
  let password = "";
  for (let i = 0; i < defaultPassLength; i++) {
    randomIndex = Math.floor(Math.random() * arrayLength);

    password += arrayPlaceholder[randomIndex];
  }
  console.log(password);
  return password;
}

displayFirstPassword.addEventListener("click", function () {
  const text = displayFirstPassword.innerHTML;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

displaySecondPassword.addEventListener("click", function () {
  const text = displaySecondPassword.innerText;
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  console.log("Copied to clipboard!");
});
