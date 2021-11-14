const fs = require("fs")


//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync("3sample.txt", "utf8").trim().split("\n")

for (i = 2; i < raw.length; i = i + 2) {
    input = raw[i]
    //******************Donot change above */
    let result = replaceSpecial(input)


    //*******************Donot change this line *******/       

    console.log(`Case #${i / 2}: ${result}`)
}



function replaceSpecial(string) {
    let status = "justDidSomething"

    while (status === "justDidSomething") {
        status = "exploring...."
        // for (let i = 0; i < string.length - 1; i++) { let subset = string.substring(i, i + 2);  if(subset === "01") {string = string.substring(0, i) + "2" + string.substring(i + 2, string.length); status = "justDidSomething";}}
        // for (let i = 0; i < string.length - 1; i++) { let subset = string.substring(i, i + 2);  if(subset === "12") {string = string.substring(0, i) + "3" + string.substring(i + 2, string.length); status = "justDidSomething";}}
        // for (let i = 0; i < string.length - 1; i++) { let subset = string.substring(i, i + 2);  if(subset === "23") {string = string.substring(0, i) + "4" + string.substring(i + 2, string.length); status = "justDidSomething";}}
        // for (let i = 0; i < string.length - 1; i++) { let subset = string.substring(i, i + 2);  if(subset === "34") {string = string.substring(0, i) + "5" + string.substring(i + 2, string.length); status = "justDidSomething";}}
        // for (let i = 0; i < string.length - 1; i++) { let subset = string.substring(i, i + 2);  if(subset === "45") {string = string.substring(0, i) + "6" + string.substring(i + 2, string.length); status = "justDidSomething";}}
        // for (let i = 0; i < string.length - 1; i++) { let subset = string.substring(i, i + 2);  if(subset === "56") {string = string.substring(0, i) + "7" + string.substring(i + 2, string.length); status = "justDidSomething";}}
        // for (let i = 0; i < string.length - 1; i++) { let subset = string.substring(i, i + 2);  if(subset === "67") {string = string.substring(0, i) + "8" + string.substring(i + 2, string.length); status = "justDidSomething";}}
        // for (let i = 0; i < string.length - 1; i++) { let subset = string.substring(i, i + 2);  if(subset === "78") {string = string.substring(0, i) + "9" + string.substring(i + 2, string.length); status = "justDidSomething";}}
        // for (let i = 0; i < string.length - 1; i++) { let subset = string.substring(i, i + 2);  if(subset === "89") {string = string.substring(0, i) + "0" + string.substring(i + 2, string.length); status = "justDidSomething";}}
        // for (let i = 0; i < string.length - 1; i++) { let subset = string.substring(i, i + 2);  if(subset === "90") {string = string.substring(0, i) + "1" + string.substring(i + 2, string.length); status = "justDidSomething";}}
        let i = 0
        while (i < string.length - 1) {
            let subset = string.substring(i, i + 2);
            if (subset === "01") { string = string.substring(0, i) + "2" + string.substring(i + 2, string.length); if (i >=1) {i--}; status = "justDidSomething"; }
            subset = string.substring(i, i + 2);
            if (subset === "12") { string = string.substring(0, i) + "3" + string.substring(i + 2, string.length); if (i >=1) {i--}; status = "justDidSomething"; }
            subset = string.substring(i, i + 2);
            if (subset === "23") { string = string.substring(0, i) + "4" + string.substring(i + 2, string.length); if (i >=1) {i--}; status = "justDidSomething"; }
            subset = string.substring(i, i + 2);
            if (subset === "34") { string = string.substring(0, i) + "5" + string.substring(i + 2, string.length); if (i >=1) {i--}; status = "justDidSomething"; }
            subset = string.substring(i, i + 2);
            if (subset === "45") { string = string.substring(0, i) + "6" + string.substring(i + 2, string.length); if (i >=1) {i--}; status = "justDidSomething"; }
            subset = string.substring(i, i + 2);
            if (subset === "56") { string = string.substring(0, i) + "7" + string.substring(i + 2, string.length); if (i >=1) {i--}; status = "justDidSomething"; }
            subset = string.substring(i, i + 2);
            if (subset === "67") { string = string.substring(0, i) + "8" + string.substring(i + 2, string.length); if (i >=1) {i--}; status = "justDidSomething"; }
            subset = string.substring(i, i + 2);
            if (subset === "78") { string = string.substring(0, i) + "9" + string.substring(i + 2, string.length); if (i >=1) {i--}; status = "justDidSomething"; }
            subset = string.substring(i, i + 2);
            if (subset === "89") { string = string.substring(0, i) + "0" + string.substring(i + 2, string.length); if (i >=1) {i--}; status = "justDidSomething"; }
            subset = string.substring(i, i + 2);
            if (subset === "90" ) { if (string[i + 2] !== "1") {string = string.substring(0, i) + "1" + string.substring(i + 2, string.length); if (i >=1) {i--};} status = "justDidSomething"; }
            
            i++
        }
    }
        return string
    }
