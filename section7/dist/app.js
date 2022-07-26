"use strict";
// const names = ['Max', 'Manuel'];
// const names: Array<string> = []; // string[]
// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(11);
//     }, 2000);
// });
// promise.then(data => {
//     data.split(' ');
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// console.log(merge({name: 'MAx'}, {age: 30}));
const mergedObj = merge({ name: "MAx", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj.hobbies);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Adam" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'}
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());
