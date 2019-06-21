const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myRGB = document.getElementById('myRGB');
const myHex = document.getElementById('myHex');

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});

//create empty array
//loop 3 times and create random numbers between 0 and 255
//join numbers into rgb
myRGB.addEventListener('click', () => {
    let rgbVal = [];
    for (let i = 0; i < 3; i ++) {
        rgbVal.push(Math.floor(Math.random() * 255));
    }
    myHeading.style.color = 'rgb('+ rgbVal.join(', ') +')';
});

//create array for hex numbers
//loop through six times to select random index
//combine # + hex numbers into one string
myHex.addEventListener('click', () => {
    let hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let hexFinal = [];
    for (let i = 0; i < 6; i ++) {
        hexFinal.push(hexChars[Math.floor(Math.random() * 16)]);
    }
    myHeading.style.color = "#" + hexFinal.join("");
})