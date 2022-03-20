const fs = require("fs")

//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync(0, "utf8").trim().split("\n")

// we can store the result here to speed it up
let resultStorage = {}

for ( i = 1; i <= parseInt(raw[0]); i++) {
   
//******************Donot change above */
    let result = 0
    let stringContainesTwoNumber = raw[i].split(" ");
    let leftNumber = parseInt(stringContainesTwoNumber[0]);
    let rightNumber = parseInt(stringContainesTwoNumber[1]);

    for (let i = leftNumber; i <= rightNumber; i++) {
        // do we have it in Storage?
        if (resultStorage[i] !== undefined) {
            if (resultStorage[i] === true) {result++}
        } else {
            if (isInterested(i)) {
                resultStorage[i] = true;
                result++;} else {resultStorage[i] = false;}
        }
    }
    console.log(`Case #${i}: ${result}`)  
}

function isInterested(number) {
    let numberInArrayFormat = number.toString().split("").map(element => parseInt(element))
    let sum = 0
    let product = 1
    for (let number of numberInArrayFormat) {
        sum += number
        product *= number
    }
    if (product % sum === 0) {return true} else {return false;}
}
