import { numbers , words ,symbols   } from "./data.js";
import {passGen ,copytext} from "./utils.js"



const userInput = document.getElementById("userinput").value;



function genpassword() {
  let password = ""


  for(let i = 0;i<3;i++){
    password += passGen(words,userInput)
  }
  password += passGen(numbers,userInput) +passGen(symbols,userInput)

  if (password.length<userInput){
    password += passGen(symbols,userInput)
  }

  return password;
}

document.addEventListener("click", function(e){
  
  const password1 = document.getElementById("pass1")
  const password2 = document.getElementById("pass2")
  

  if(e.target.id === "genBtn"){
    password1.value = genpassword();
    password2.value = genpassword();
    document.getElementById("pass1label").innerHTML = password1.value.length;
    document.getElementById("pass2label").innerHTML = password2.value.length;

  }else if(e.target.id === "copybtn1"){
    copytext(password1);

  }else if (e.target.id === "copybtn2"){
    copytext(password2);
  
  }

})


