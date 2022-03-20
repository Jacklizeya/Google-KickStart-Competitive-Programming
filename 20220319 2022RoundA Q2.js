const fs = require("fs")


//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync(0, "utf8").trim().split("\n")

let T = parseInt(raw[0])


for (let c = 1 ; c <= T; c++) {
    let input = raw[c]
    let sumOfSingleDigits = 0
    for (let number of input) {
        sumOfSingleDigits += parseInt(number);
    }
    // using observation #1 to find the right number to insert.
    let result 
    let numberToInsert = 9 - sumOfSingleDigits % 9;
    let indexToInsertMyNumber = 0

    if (numberToInsert === 9) {
        numberToInsert = 0;
        indexToInsertMyNumber = 1;
    }
    
    while (indexToInsertMyNumber < input.length) {
        if (parseInt(input[indexToInsertMyNumber]) <= numberToInsert) { indexToInsertMyNumber++}
        else {break;}
    }
    result = input.substring(0, indexToInsertMyNumber) + numberToInsert + input.substring(indexToInsertMyNumber, input.length)

    console.log(`Case #${c}: ${result}`) 
}

