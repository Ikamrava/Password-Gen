

function passGen(list,userInput) {
    let password = "passowrd";
  
      while (password.length > userInput/3){
        for (let i = 0; i < 1; i++) {
          let id = Math.floor(Math.random() * list.length);
          password = list[id];
      }
    }
    const capPass = capitalize(password)
    return capPass;
  }

  function capitalize(word) {
    return word
      .split('')
      .map((letter, index) =>
        index ? letter.toLowerCase() : letter.toUpperCase(),
      )
      .join('');
  }



  function copytext(dom) {
    const snakBar = document.getElementById("snackbar");
    dom.select();
    navigator.clipboard.writeText(dom.value);
    snakBar.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      snakBar.className = snakBar.className.replace("show", "");
    }, 3000);
  }

  export {passGen , copytext}