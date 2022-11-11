import { numbers } from "./data.js";
import { capitalwords } from "./data.js";
import { words } from "./data.js";
import { symbols } from "./data.js";

let copyText1 = document.getElementById("pass1");
let copyText2 = document.getElementById("pass2");
const copybtn1 = document.querySelector(".copybtn1");
const copybtn2 = document.querySelector(".copybtn2");
let firstOutput = document.getElementById("pass1");
let secondOutput = document.getElementById("pass2");
let pass1label = document.getElementById("pass1label");
let pass2label = document.getElementById("pass2label");
const snakBar = document.getElementById("snackbar");
let userInput = (document.getElementById("userinput").value = 16);
const generateBtn = document.getElementById("generatorbtn");

let generatedPasswordOne = "";
let generatedPasswordTwo = "";

function passGen(list) {
  let finalPasword = "";
  for (let i = 0; i < 1; i++) {
    let id = Math.floor(Math.random() * list.length);
    let randomChar = list[id];
    finalPasword += randomChar;
  }
  return finalPasword;
}

function genpassword() {
  let firstword = passGen(words);
  let secondword = passGen(capitalwords);
  let number = passGen(numbers);
  let symbol = passGen(symbols);
  let password = firstword + secondword + number + symbol;
  while (password.length < userInput) {
    password = passGen(words) + password;
  }
  return password;
}

function copytext(dom) {
  dom.select();
  navigator.clipboard.writeText(dom.value);
  snakBar.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    snakBar.className = snakBar.className.replace("show", "");
  }, 3000);
}

generateBtn.addEventListener("click", function () {
  userInput = document.getElementById("userinput").value;
  let password1 = genpassword();
  let password2 = genpassword();
  firstOutput.value = password1;
  pass1label.innerHTML = password1.length;
  secondOutput.value = password2;
  pass2label.innerHTML = password2.length;
});

copybtn1.addEventListener("click", function () {
  copytext(copyText1);
});

copybtn2.addEventListener("click", function () {
  copytext(copyText2);
});
