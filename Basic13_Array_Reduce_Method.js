//to sum of  array by for loop

var marks = [20,30,40,12,50,100]
var sum = 00
for (let i=0;i<marks.length;i++)
{
sum = sum + marks[i]

console.log(sum)
}

console.log("***************************reduceMethod******************************")
//sum of array by reduce method
var totalMark=marks.reduce((sum,mark) =>sum+mark,0)

console.log(totalMark)


