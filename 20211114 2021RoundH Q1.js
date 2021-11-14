const fs = require("fs")

//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync("1sample.txt", "utf8").trim().split("\n")

for ( i = 1; i <= parseInt(raw[0]); i++) {
//******************Donot change above */
    let S = raw[ 2 * i - 1]
    let F = raw[2 * i]
    // console.log(S, F)
    let totalCaseGap = 0
    for (let s of S) {
        let minimumGap = Infinity
        for (let f of F) {
            if (calculateDistance(s, f) < minimumGap) {minimumGap = calculateDistance(s, f)}
        }
        totalCaseGap += minimumGap
    }
    console.log(`Case #${i}: ${totalCaseGap}`)  
}

function calculateDistance(char1, char2) {
    let string = 'abcdefghijklmnopqrstuvwxyz'
    let index1 = string.indexOf(char1)
    let index2 = string.indexOf(char2)
    let rawDistance = Math.abs(index1 - index2)
    if (rawDistance <= 13) {return rawDistance} else {return 26 - rawDistance}
    }


