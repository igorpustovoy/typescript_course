"use strict";
// type AddFn = (a: number, b:number) => number;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    greet() {
        if (this.name) {
            console.log("Hello, I am " + this.name);
        }
        else {
            console.log("Hello");
        }
    }
}
let user1;
user1 = new Person();
user1.greet();
