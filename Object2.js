let person = {

    firstname : 'sudhir',
    lastname  : 'bhagat',
         age  : 24,
    fullname  : function() {

        console.log(this.firstname+" "+this.lastname+" "+this.age)

    }


}

console.log(person.fullname())