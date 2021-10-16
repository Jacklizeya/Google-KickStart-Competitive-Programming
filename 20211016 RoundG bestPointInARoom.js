const fs = require("fs")


//    in real google, change smaple.txt to 0 ! 
//    if numbers, remember to convert by using parseInt, input is string, how to extrac tnumbers!
//    do not repeat i, j, k index, interference
const raw = fs.readFileSync("2sample.txt", "utf8").trim().split("\n")

let T = parseInt(raw[0])

let startRow = 1
for (let c = 1 ; c <= T; c++) {
    let followingRows = parseInt(raw[startRow])
    
    // process all the points
    let planes = []
    let [x1Min, y1Min, x2Max, y2Max] = [Infinity, Infinity, -Infinity, -Infinity]
    
    for (line = startRow + 1; line <= startRow + followingRows; line++) {
        let string = raw[line]
        let pointsInArray = string.split(" ").map(element => parseInt(element))
        x1Min = Math.min(x1Min, pointsInArray[0])
        y1Min = Math.min(y1Min, pointsInArray[1])
        x2Max = Math.max(x2Max, pointsInArray[2])
        y2Max = Math.max(y2Max, pointsInArray[3])
        planes.push(pointsInArray)
    }

    let minSum = Infinity
    let targetI
    let targetJ
    for (i =x1Min ; i < x2Max; i++) {
        for (j =y1Min; j < y2Max; j++) {
            let sumDistance = 0
            for (k =0; k < planes.length; k++) {
                sumDistance += distanceFromPointToPlane(i, j, planes[k])
            }
            if (sumDistance < minSum) {
                minSum = sumDistance
                targetI = i
                targetJ = j
            }
            minSum = Math.min(minSum, sumDistance)

        }
    }
    console.log(`Case #${c}:`, targetI, targetJ) 
    startRow = startRow + followingRows + 1
}

// input is the single point + single plane
function distanceFromPointToPlane(x, y, plane) {
    let x1 = plane[0]
    let y1 = plane[1]
    let x2 = plane[2]
    let y2 = plane[3]
    // console.log(x, y, x1, y1, x2, y2)
    let xDistance
    if (x >= x1 && x <= x2 ) {
        xDistance = 0
    } else {
        xDistance = Math.min(Math.abs(x - x1), Math.abs(x - x2))
    }
    
    let yDistance
    if (y >= y1 && y <= y2 ) {
        yDistance = 0
    } else {
        yDistance = Math.min(Math.abs(y - y1), Math.abs(y - y2))
    }
    
    let result = xDistance + yDistance
    // console.log(result)
    return result
    }
    
