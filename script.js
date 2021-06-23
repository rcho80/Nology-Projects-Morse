import {
  morseLetters
} from "./letters.js";

const textEng = document.getElementById("text__eng");
const textMorse = document.getElementById("text__morse");
const clear = document.getElementById("btn__clear");
const reverse = document.getElementById("reverse");
const section__eng = document.getElementById('section__eng');
const section__morse = document.getElementById("section__morse");


// handle English to morse
const handleLetters = (keys) => {
  morseLetters.map(key => {
    if (keys.key === key.key || keys.key === key.cap) {
      return textMorse.appendChild(document.createTextNode(key.code));
    }
  })
  if (keys.key === "Backspace") {
    textMorse.removeChild(textMorse.lastChild)
  }
}
textEng.addEventListener('keydown', handleLetters);



//handle Morse to English
// const handleMorse = (keys) => {
//   morseLetters.map(key => {
//     if (keys.key === key.code) {
//       return textEng.appendChild(document.createTextNode(key.key));
//     }
//   })

//   if (keys.key === "Backspace") {
//     textEng.removeChild(textEng.lastChild)
//   }
// }
// textMorse.addEventListener('keydown', handleMorse);




// handle Clear button delete All
const handleClear = () => {
  textMorse.innerHTML = "";
  textEng.value = "";
}
clear.addEventListener("click", handleClear);




// handle Reverse Boxes on page
const handleReverse = () => {
  console.log(section__eng.attributes)
  console.log(section__morse.ownerElement.offsetTop)
  // ownerElement.offsetheight
  // offsetTop
  // offsetWidth
  // offsetLeft
}
reverse.addEventListener("click", handleReverse);



//STILL TO DO:
// flip english and morse box to allow for inputs with morse to english
// media queries
// tests