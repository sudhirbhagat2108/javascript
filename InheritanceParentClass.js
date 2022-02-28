

module.exports = class College



{
    age = 35
    ciy = "Pune"
    get location()   
{

    return "Canada"
}

//constructor
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