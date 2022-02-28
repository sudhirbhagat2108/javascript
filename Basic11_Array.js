var mark = Array(6)  //1st way
console.log(mark)

var mark = new Array(20, 30, 40, 12, 50, 100)    //2nd way
console.log(mark)

var mark = [20, 30, 40, 12, 50, 100] //3rd way
console.log(mark)
console.log(mark[2])
console.log(mark.indexOf(100))

console.log(submark = mark.slice(2, 5))
mark[3] = 14

console.log(mark)
console.log(mark.length)
mark.push(200)
console.log(mark)

mark.pop()
console.log(mark)

mark.unshift(5)
console.log(mark)

