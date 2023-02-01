function Person(firstName, lastName){
    const personObject = {
        firstName: firstName,
        lastName: lastName
    }

    Object.defineProperty(personObject, 'fullName', {
        get(){return this.firstName + ' ' + this.lastName},

        set(value){
            if(value.split(' ').lenght == 2){
            let newNames = value.split(' ');

                this.firstName = newNames[0];
                this.lastName = newNames[1];
            }
        }
    });
    
    return personObject;
}


let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesl