interface AddFn {
    (a: number, b: number): number;
}

// type AddFn = (a: number, b:number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(name?: string) {
        if(name) {
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

let user1: Greetable;

user1 = new Person();

user1.greet();