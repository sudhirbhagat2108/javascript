let newquote = "tuesday a fun day is day"

let count = 0
let value = newquote.indexOf("day")
console.log(value)

while (value !== -1) {
    count++
    value = newquote.indexOf("day", value + 1)

}

console.log("Total day count " + count)