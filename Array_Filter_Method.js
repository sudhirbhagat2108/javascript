var score = [20, 30, 40, 12, 50, 70]

// Normal for loop to find out even aray value
var evenscore = []

for (let i = 0; i < score.length; i++) {

    if (score[i] % 2 == 0) {

        evenscore.push(score[i])
    }



}

console.log(evenscore)


//find even array value with filter method

let newFilterevenScore = score.filter(score => score % 2 == 0)

console.log(newFilterevenScore)

