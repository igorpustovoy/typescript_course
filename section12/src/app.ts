import _ from "lodash";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from 'class-validator';

// console.log(_.shuffle([1, 2, 3]));

import Product from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const newProd = new Product("", -12.99);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log("VALID");
    }
});
console.log(newProd.getInformation());

// const p1 = new Product("A Book", 12.99);

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
// console.log(p1.getInformation()); 
