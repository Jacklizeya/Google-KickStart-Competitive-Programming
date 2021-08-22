// Not running fast enough, run time error

const fs = require("fs")

//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync(0, "utf8").trim().split("\n")

for ( i = 1; i <= parseInt(raw[0]); i++) {
    // console.log(3 * (i-1) + 1, 3 * (i-1) + 2, 3 * (i-1) + 3)
    
//******************Donot change above */
    // console.log(string)
    let string = raw[i]
    // console.log(InputNumberArray)
    let result = check(string)
    console.log(`Case #${i}: ${result}`)  
}

function check(input) { 
    let result = ""
    let options = {}
    for (let char of input) {
        if (!options[char]) {options[char] = 1} else {options[char] ++}
    }
    // console.log(options)
    
    function generateAnagram(index, possible, cumulative) {
        // console.log("index", index, "possible", possible, "cumulative", cumulative)
        if (result !== "") {return}
        if (cumulative.length === input.length) {result = cumulative; return}
    
        let avoid = input[index]
        
        for (let key in possible) {
            if (key !== avoid && possible[key] >= 1) {
                // everyone should get a fresh copy
                let possibleCopy = {...possible}
                possibleCopy[key]--
                generateAnagram(index + 1, possibleCopy, cumulative + key)
            } 
        }
    }
    
    generateAnagram(0, options, "")
    if (result === "") {return("IMPOSSIBLE")} else {return (result)}}
