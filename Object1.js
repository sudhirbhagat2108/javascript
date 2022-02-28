let person = {

    firstname : 'sudhir',
    lastname  : 'bhagat',
         age  :  24,
    fullname  : function() {

        console.log(this.firstname+" "+this.lastname)

    }


}

console.log(person.fullname())
/** 
// oneway-call object properties noramlly 
console.log(person.firstname)
console.log(person.lastname)
// secondway-cal object properties like array
console.log(person['firstname'])
console.log(person['lastname'])

//Update object property name
person.firstname = 'priyanka'
console.log(person.firstname)

//add properties in object
person.gender = 'male'
console.log(person)
console.log(person.gender)

// delete object properties
delete person.gender
console.log(person)

console.log('*****print  all the values of object *****')
//print  all the values of object  
*/

