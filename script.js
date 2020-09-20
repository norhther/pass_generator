const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const footerEl = document.getElementById("footer");


const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "1234567890"
const specialCharacters = "|@#~€!$%&/()=?¿"


function randomUpper() {
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function randomNumbers() {
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function randomSpecial() {
    return specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
}

function randomLower() {
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}


function generateChunk() {
    const xs = [];
    xs.push(randomLower());
    if (upperEl.checked) {
        xs.push(randomUpper());
    }
    if (numberEl.checked) {
        xs.push(randomNumbers());
    }
    if (symbolEl.checked) {
        xs.push(randomSpecial());
    }
    return xs[Math.floor(Math.random()*xs.length)];
}


function generatePassword() {
    const len = lenEl.value;
    let password = "";
    for (let i = 0; i < len; i++) {
        password += generateChunk();
    }
    pwEl.innerText = password;
}

function copy() {
    var textArea = document.createElement("textarea");
    textArea.value = pwEl.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    //adding class to transition 
    footerEl.innerText = "Succesfully copied to clipboard!";
    footerEl.classList.add("footer-active");
    setTimeout(() => {
        footerEl.classList.remove("footer-active");
    }, 1000)
    setTimeout(() => {
        footerEl.innerText = "";
    }, 1200);
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", copy);