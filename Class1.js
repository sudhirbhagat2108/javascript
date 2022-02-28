
module.exports = class Person
{

age = 35
//location = "Canada" // ONE WAY TO DECLARE PROPERTIES 

get location()    // other way to delclare properties with getter properties  
{

    return "Canada"
}

//constructor is executed by default if you create object of the class

constructor(firstname,lastname)

{
    this.firstname=firstname
    this.lastname=lastname
}

//metthod
fullname()
{
console.log(this.firstname+" "+this.lastname)

}

}

//let personObject = new Person() //without constructor 

   //let personObject = new Person('Sudhir','Bhagat') //With constructor
  // let personObject1= new Person('Sham', 'Dhable') //With constructor
    //console.log(personObject.fullname())
    //console.log(personObject1.fullname())
    //console.log(personObject.age)
    //console.log(personObject.location)