var fruits = ['cap', 'banana', 'apple', 'jackfoot']

console.log(fruits.sort())
console.log(fruits.reverse())

var numbergame = [31, 44, 10, 21, 16, 2]
console.log(numbergame.sort()) ///unable to sort correctly  


var numberCustom = numbergame.sort(function (a, b) {

    return a - b //b-a for reverse sorting
})

console.log(numberCustom)

var numberCustom1 = numbergame.sort((a, b) => a-b)   //b-a for reverse sorting
console.log(numberCustom1)


