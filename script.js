import { morseLetters } from "./letters.js";

const textEng = document.getElementById("text__eng");
const textMorse = document.getElementById("text__morse");
const clear = document.getElementById("btn__clear");
const morseTxt = document.getElementById("morseTxt");

// handle English to morse
const handleLetters = (keys) => {
  morseLetters.map((key) => {
    if (keys.key === key.key || keys.key === key.cap) {
      morseTxt.value += key.code;
    }
  });

  if (keys.key === "Backspace") {
    const arrStr = morseTxt.value.trim().split(" ");
    const arrPop = arrStr.pop();
    morseTxt.value = arrStr.join(" ");
  }
};
textEng.addEventListener("keydown", handleLetters);

//handle Morse to English
const handleMorse = (keys) => {
  const container = [];
  const splitted = morseTxt.value.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    morseLetters.filter((letter) => {
      letter.code = letter.code.trim();
      if (letter.code === splitted[i]) {
        container.push(letter.key);
      }
    });
  }
  textEng.value += container.join("");
};
text__morse.addEventListener("click", handleMorse);

// handle Clear button delete All
const handleClear = () => {
  morseTxt.innerText = "";
  morseTxt.value = "";
  textEng.innerText = "";
  textEng.value = "";
};

clear.addEventListener("click", handleClear);
