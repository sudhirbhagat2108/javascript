
const College = require('./InheritanceParentClass')
class Student extends College
{

get location()   ///OVerriding 
{

    return "India"
}


constructor(firstname,lastname)
{
    //to call parent class constructor
    super(firstname,lastname)
}



}

let student = new Student("sam","mama")
    student.fullname()
    console.log(student.age)
    console.log(student.location)
    console.log(student.ciy)