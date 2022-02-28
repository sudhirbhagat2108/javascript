var value =[2,4,6,8]

var finalvalue = value.filter(value => value%2 ==0).map(value => value*3).reduce((sum,val) => sum+val,0)

console.log()
