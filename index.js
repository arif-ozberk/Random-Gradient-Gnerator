let value1Input = document.getElementById("value-1-input");
let value2Input = document.getElementById("value-2-input");
let gradientCode = document.querySelector(".gradient-code");
let randomButton = document.querySelector(".random-btn");
let container = document.querySelector(".container");


//MANUAL CONTROLS
value1Input.addEventListener("input", ()=> {
    updateMessage();
    container.style.backgroundImage = `linear-gradient(90deg, ${value1Input.value}, ${value2Input.value})`;
});

value2Input.addEventListener("input", ()=> {
    updateMessage();
    container.style.backgroundImage = `linear-gradient(90deg, ${value1Input.value}, ${value2Input.value})`;
});


//UPDATE MESSAGE
function updateMessage() {
    gradientCode.innerHTML = `background-image: linear-gradient(90deg, ${value1Input.value}, ${value2Input.value})`;
};


//RANDOM BUTTON
const letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

randomButton.addEventListener("click", generateColor);

let hexCode;

function generateHexCode() {

    hexCode = "#"
    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * letters.length);
        let randomLetter = letters[randomNumber];
        hexCode += randomLetter;
    }
};

function generateColor() {

    generateHexCode();
    gradientCode.innerHTML = `background-image: linear-gradient(90deg, ${hexCode}, ${value2Input.value})`;
    container.style.backgroundImage = `linear-gradient(90deg, ${hexCode}, ${value2Input.value})`;
    value1Input.value = hexCode

    generateHexCode();
    gradientCode.innerHTML = `background-image: linear-gradient(90deg, ${value1Input.value}, ${hexCode})`;
    container.style.backgroundImage = `linear-gradient(90deg, ${value1Input.value}, ${hexCode})`;
    value2Input.value = hexCode;
};