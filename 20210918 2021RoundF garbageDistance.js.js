const fs = require("fs")

//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync("1sample.txt", "utf8").trim().split("\n")

for ( i = 1; i <= parseInt(raw[0]); i++) {
    
    
//******************Donot change above */
    let stringLength = parseInt(raw[2 * (i - 1) + 1])
    let string = raw[2 * i]
    
    let minStorage = findAllGarbageCans(string)
    // console.log(allGarbageCansInArray)

    let sum = 0
    for (let key in minStorage) {
        sum += minStorage[key]
    }
   
    console.log(`Case #${i}: ${sum}`)  
}

function findAllGarbageCans(input) {
   let leftGarbageBin = "unknown"
   let leftArray = {}

   for (let i = 0; i < input.length; i++) {
       if (input[i] === "0" && leftGarbageBin === "unknown") {leftArray[i] = Infinity}
       else if (input[i] === "1") {leftGarbageBin = i; leftArray[i] = 0}
       else {leftArray[i] = (i - leftGarbageBin)} 
   }
//    console.log("leftArray", leftArray)

   let rightGarbageBin = "unknown"
   let rightArray = {}

   for (let i = input.length - 1; i >=0  ; i--) {
       if (input[i] === "0" && rightGarbageBin === "unknown") {rightArray[i] = (Infinity)}
       else if (input[i] === "1") {rightGarbageBin = i; rightArray[i] = (0)}
       else {rightArray[i] = (rightGarbageBin - i)} 
   }
//    console.log("rightArray", rightArray)

   let result = {}
   for (let k = 0; k < input.length; k++) {
       result[k] = (Math.min(leftArray[k], rightArray[k]))
   }
//    console.log(result)
   return result
}



