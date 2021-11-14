const fs = require("fs")


//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync("2sample.txt", "utf8").trim().split("\n")

let T = parseInt(raw[0])


for (let c = 1 ; c <= T; c++) {
    let input = raw[c * 2]
    let paintCount = generateThreeStringsAndCountPaint(input)
    console.log(`Case #${c}: ${paintCount}`) 
}

// input is the single point + single plane
function checkContinuous(string) {
    let count = 0
    for (let i = 1; i < string.length; i++) {
        if (string[i] !== string[i - 1]) {count++}
    }
    return count / 2
}

function generateThreeStringsAndCountPaint(inputString) {
    let redString = ""
    let blueString = ""
    let yellowString = ""

    for (let char of inputString) {
        switch(char) {
            case "U": redString += "N"; blueString += "N"; yellowString +="N"; break;
            case "R": redString += "Y"; blueString += "N"; yellowString +="N"; break;
            case "Y": redString += "N"; blueString += "N"; yellowString +="Y"; break;
            case "B": redString += "N"; blueString += "Y"; yellowString +="N"; break;
            case "O": redString += "Y"; blueString += "N"; yellowString +="Y"; break;
            case "P": redString += "Y"; blueString += "Y"; yellowString +="N"; break;
            case "G": redString += "N"; blueString += "Y"; yellowString +="Y"; break;
            case "A": redString += "Y"; blueString += "Y"; yellowString +="Y"; ;
        }
    }

    return checkContinuous("N"+ redString + "N" +  blueString + "N" +  yellowString + "N")
}
