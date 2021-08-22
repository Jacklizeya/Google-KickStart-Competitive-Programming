const fs = require("fs")

//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync(0, "utf8").trim().split("\n")

for ( i = 1; i <= parseInt(raw[0]); i++) {
   
//******************Donot change above */
    // console.log(string)
    let N = parseInt(raw[i])
    // console.log(InputNumberArray)
    let result = findScore(N)
    console.log(`Case #${i}: ${result}`)  

}

function findScore(N) {
let arrayN = [...Array(N).keys()]


let cardCount = 0
let pathCount = 0

function generateSequence(arrayN, path) {

    if (arrayN.length === 0) {
        pathCount++
        let max = path[0]
        for (let j = 1; j< path.length; j++) {
            if (path[j] > max) { max = path[j]; cardCount++}
        }
    }
    
    arrayN.forEach(element => {
        let arrayCopy = [...arrayN]
        copyWithoutElement = arrayCopy.filter(single => single !== element)
        
        path.push(element)
        generateSequence(copyWithoutElement, path)
        path.pop()
    })
}

generateSequence(arrayN, [])

return (((cardCount + pathCount) / pathCount).toFixed(6))}
