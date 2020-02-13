'use strict';

const person = {
    fname: 'sohel',
    lname:   'rana',
    full_name: function () {
        console.log(this)
        return this.fname + this.lname;
       
    }
}

console.log(person.full_name());

const full_name = person.full_name.bind(person);
console.log(full_name);
console.log(full_name())