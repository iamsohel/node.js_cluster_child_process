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

//arrow function don't rebind this keyword

//in arrow function this is inherit it's context where it's code is defined

const man = {
    walk() {
        console.log(this) // it will refer man object;

        setTimeout(function () {
            console.log(this); // it will refer global object cause setTime out er moddhe func ta anonymous function. eta stand alone hisabe kaj korbe
        }, 1000) // so ami jodi arrow func use kori taile o ei function ke standalone hote dibe na. current man object refer dhoere  eta ke prit korbe
    }
}

man.walk();