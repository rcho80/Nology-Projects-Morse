import { morseLetters } from "./letters.js";

const textEng = document.getElementById("text__eng");
const textMorse = document.getElementById("text__morse");
const submitMorse = document.getElementById("submit__morse");
const clear = document.getElementById("btn__clear");

// handle English to morse
const handleLetters = (keys) => {
    morseLetters.map((key) => {
        if (keys.key === key.key || keys.key === key.cap) {
            textMorse.value += key.code;
        }
    });

    if (
        keys.key === "Backspace" ||
        keys.key === "Delete" ||
        keys.key === "Insert"
    ) {
        keys.preventDefault();
    }
};
textEng.addEventListener("keydown", handleLetters);

//handle Morse to English
let anotherGroup = [];

const handleMorse = (keys) => {
    if (textEng.value !== "") {
        return false;
    }

    const splitted = textMorse.value.split(" ");

    for (let i = 0; i < splitted.length; i++) {
        anotherGroup.push(`${splitted[i]} `);
    }

    for (let j = 0; j < anotherGroup.length; j++) {
        morseLetters.filter((letter) => {
            if (letter.code === anotherGroup[j]) {
                textEng.value += letter.key;
            }
        });
    }
};
submitMorse.addEventListener("click", handleMorse);

//handle preventdefault of delete in morseBox
const handleMorseBox = (keys) => {
    if (
        keys.key === "Backspace" ||
        keys.key === "Delete" ||
        keys.key === "Insert"
    ) {
        keys.preventDefault();
    }
};

textMorse.addEventListener("keydown", handleMorseBox);

// handle Clear button delete All
const handleClear = () => {
    textMorse.value = "";
    textEng.value = "";
    anotherGroup = [];
};

clear.addEventListener("click", handleClear);
