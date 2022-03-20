const fs = require("fs")

//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync(0, "utf8").trim().split("\n")

for ( i = 1; i <= parseInt(raw[0]); i++) {
//******************Donot change above */
    let S = raw[ 2 * i - 1]
    let F = raw[2 * i]
    // console.log(S, F)
    let result 
    if (S.length > F.length) {result = "IMPOSSIBLE"} else {
   
            if (checkMatchExist(S, F)) {result = F.length - S.length;} else {result = "IMPOSSIBLE"}

    }
    console.log(`Case #${i}: ${result}`)  
}

function checkMatchExist(S, F) {
    let sPointer = 0;
    let fPointer = 0;
    while (fPointer < F.length) {
        if (S[sPointer] === F[fPointer]) {sPointer++;}
        fPointer++;
    }
    if (sPointer === S.length) {return true} else {return false}
}



// module.exports = targetfunction;
