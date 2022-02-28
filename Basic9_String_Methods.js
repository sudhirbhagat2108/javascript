let day = "tuesday "

console.log(day.length)

let subday = day.slice(0,4)

console.log(subday)

console.log(day[1])
console.log(day.indexOf("y"))

//split
let splitday = day.split("s")
console.log(splitday)
console.log(splitday[1].length)
console.log(splitday[1].trim().length)
console.log(splitday[0])


//********************************************* */

let date = '23'
let nextdate = '27'

let diff = parseInt(nextdate)-parseInt(date)  ///String to int

console.log(diff)
console.log(typeof(diff))

 diff = diff.toString()   /// int to string

 console.log(typeof(diff))


 //****************************** */

 let newquote = day+ "a fun day" // concatination
 console.log(newquote)
//***************************************** */
 let val  = newquote.indexOf("day")
 let val1  = newquote.indexOf("day",5)
 console.log(val)
 console.log(val1)
