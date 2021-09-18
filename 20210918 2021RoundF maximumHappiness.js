const fs = require("fs")


//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync("2sample.txt", "utf8").trim().split("\n")

let T = parseInt(raw[0])

let startRow = 1


for (i = 1 ; i <= T; i++) {
    let matrixInfo = raw[startRow].split(" ").map(data => parseInt(data))
    let days = matrixInfo[0]
    let rows = matrixInfo[1]
    let options = matrixInfo[2]
    let dataRowStart = startRow + 1
    let dataRowFinish = startRow + rows
    // console.log(`Case #${i}, START, FINISH, ${dataRowStart}, ${dataRowFinish}`)  

//*******************Donot change this line *******/       
    let daySummary = {}
    for (let s = 1 ; s <= days; s++) {
        daySummary[s] = []
    }

    for ( let j = dataRowStart; j <= dataRowFinish; j++) {
        let eventInfo = raw[j].split(" ").map(data => parseInt(data))
        let happiness = eventInfo[0]
        let startDay = eventInfo[1]
        let finishDay = eventInfo[2]
        // console.log("line", j, happiness)
        for (let k = startDay; k <= finishDay; k++) {
            daySummary[k].push(happiness)
        }
    }

    let max = -Infinity
    // console.log("daySummary", daySummary)
    for (let key in daySummary) {
        daySummary[key] = daySummary[key].sort((a, b)=>{return b - a})
        max = Math.max(findSum(daySummary[key], options), max)
    }
    // console.log("daySummary", daySummary)

    console.log(`Case #${i}: ${max}`)  
    startRow = startRow + rows + 1
}

function findSum(sortedArray, count) {
    let sum = 0
    // here is up to K
    for (let s = 0; s < count; s++) {
        if (sortedArray[s]) {sum += sortedArray[s]}
        else {break;}
    }
    return sum
}
