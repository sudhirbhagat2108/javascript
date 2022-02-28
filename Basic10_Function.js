

//***********One way to create function */
function add(a, b) {

    return a + b
}

var sumOfNumber = add(2, 3,)

console.log(sumOfNumber)

//**********Second way to create function*************/
//Anyonymus function -without name
let sumOfNumber1 = function (a, b) {

    return a + b
}

console.log(sumOfNumber1(4, 4))

//*************third way to create function */

let fatPipeSortHandOperator = (a, b) => a + b

console.log(fatPipeSortHandOperator(5, 5))