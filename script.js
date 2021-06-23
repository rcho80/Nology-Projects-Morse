import {
  morseLetters
} from "./letters.js";

const textEng = document.getElementById("text__eng");
const textMorse = document.getElementById("text__morse");
const clear = document.getElementById("btn__clear");
const morseTxt = document.getElementById("morseTxt");

// handle English to morse
const handleLetters = (keys) => {
  morseLetters.map(key => {
    if (keys.key === key.key || keys.key === key.cap) {
      return morseTxt.appendChild(document.createTextNode(key.code));
    }
  })
  if (keys.key === "Backspace") {
    morseTxt.removeChild(morseTxt.lastChild)
  }
}
//handle Morse to English
const handleMorse = (keys) => {
  const splitted = morseTxt.value.split(" ");
  const container = [];
  for (let i = 0; i < splitted.length; i++) {
    morseLetters.filter(letter => {
      letter.code = letter.code.trim();
      if (letter.code === splitted[i]) {
        container.push(letter.key)
      }
    });
  }
  textEng.innerText = container.join("");
}
// handle Clear button delete All
const handleClear = () => {
  morseTxt.innerText = "";
  morseTxt.value = "";
  textEng.innerText = "";
  textEng.value = "";
}

clear.addEventListener("click", handleClear);
textEng.addEventListener('keydown', handleLetters);
textMorse.addEventListener('click', handleMorse);