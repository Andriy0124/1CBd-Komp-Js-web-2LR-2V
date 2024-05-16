function FrequentNumbers(array) {
    var frequency = {};
    var maxFrequency = 0;

    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        frequency[num] = (frequency[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequency[num]);
    }

    var mostFrequent = [];
    for (var key in frequency) {
        if (frequency.hasOwnProperty(key) && frequency[key] === maxFrequency) {
            mostFrequent.push(parseInt(key));
        }
    }

    return { numbers: mostFrequent, frequency: maxFrequency };
}


function generateRandomArray(length, min, max) {
    var array = [];
    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomNumber);
    }
    return array;
}

var arrayLength = 20; 
var minNumber = 1; 
var maxNumber = 10; 

var randomArray = generateRandomArray(arrayLength, minNumber, maxNumber);
console.log("Згенерований масив:", randomArray);

var result = FrequentNumbers(randomArray);
console.log("Найчастіше зустрічаються числа:", result.numbers, "Кількість зустрічей:", result.frequency);
