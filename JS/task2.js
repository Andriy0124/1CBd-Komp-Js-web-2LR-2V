function countWords(text) { 
    var wordRegex = /[а-яіїєґ']+/gi;
    var words = text.match(wordRegex);
    if (words !== null) {
        console.log("Кількість слів: " + words.length);
    } 
}
var userInput = prompt("Будь ласка, введіть текст:");
if (userInput !== null && userInput.trim() !== "") {
    countWords(userInput);
} 
