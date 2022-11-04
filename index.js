const fullCharacters = [
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
const Characters = [
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
];

generateBtn = document.querySelector(".generatorbtn");
copyText1 = document.getElementById("pass1");
copyText2 = document.getElementById("pass2");
copybtn1 = document.querySelector(".copybtn1");
copybtn2 = document.querySelector(".copybtn2");
firstOutput = document.getElementById("pass1");
secondOutput = document.getElementById("pass2");
symbolNum = document.getElementById("userslect");
symbolNum.checked = true;

generatedPasswordOne = "";
generatedPasswordTwo = "";

function passGen(num, list) {
  let finalPasword = "";
  for (i = 0; i < num; i++) {
    id = Math.floor(Math.random() * list.length);
    let randomChar = list[id];
    finalPasword += randomChar;
  }
  return finalPasword;
}

function copytext(dom) {
  dom.select();
  navigator.clipboard.writeText(dom.value);
  alert("Copied the text: " + dom.value);
}

generateBtn.addEventListener("click", function () {
  userInput = document.getElementById("userinput").value;
  if (symbolNum.checked === true) {
    password1 = passGen(userInput, fullCharacters);
    password2 = passGen(userInput, fullCharacters);
    firstOutput.value = password1;
    secondOutput.value = password2;
  } else {
    password1 = passGen(userInput, Characters);
    password2 = passGen(userInput, Characters);
    firstOutput.value = password1;
    secondOutput.value = password2;
  }
});

copybtn1.addEventListener("click", function () {
  copytext(copyText1);
});

copybtn2.addEventListener("click", function () {
  copytext(copyText2);
});
