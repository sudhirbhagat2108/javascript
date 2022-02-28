
var score = [20, 30, 40, 12, 50, 70]
var triplescore = []

for (let i = 0; i < score.length; i++) {

    newscore = score[i] * 3

    triplescore.push(newscore)

}

console.log(triplescore)
console.log("*****************************************************")
// to multiply  array  value say by 3
let mappedArray = score.map(score => score * 3)

console.log(mappedArray)
console.log("*****************************************************")

var totalsum = mappedArray.reduce((sum,val)=>sum+val,0)

console.log(totalsum)


console.log("*******************All in one**********************************")

var score1 = [20, 30, 40, 12, 50, 70]

var newscore=score1.filter(score1 => score1 % 2 == 0).map(score1 => score1 * 3).reduce((sum1,val1)=>sum1+val1,0)

console.log(newscore)