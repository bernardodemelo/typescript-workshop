"use strict";
let greeting = "Hello World";
// greeting = 10; --> would lead to an TS error
console.log(greeting);
//  TypeScript Bult-in Types 
let amountSale = 123456789;
let isBought = false;
// Type Any
let ironhack;
let variable = "John";
variable = 123;
// Arrays
let creators = ["Brad", "Pete", "Arnold"];
let amount = [1, 2, 3];
// Intellisense (definition from VSCode Website): 
// IntelliSense is a general term for various code editing features including: code completion, parameter info, quick info, and member lists. IntelliSense features are sometimes called by other names such as "code completion", "content assist", and "code hinting."
// In this Example, if we type 'creator.' we check that we have an autocomplete only for string methods.
creators.forEach((creator) => {
    return console.log(creator.toLowerCase());
});
// Tupples 
let collection = [21, "Michael", true, false];
// Functions Example 
const registerPurchase = (income, year = 2023) => {
    if (year < 2023) {
        return console.log("Are you a time traveler?");
    }
    else {
        return console.log(income);
    }
};
registerPurchase(123456, 2010);
let dwight = {
    id: 123,
    name: 'Dwight'
};
// Extra Example: Enums
var SizeAwards;
(function (SizeAwards) {
    SizeAwards["Small"] = "12x12cm";
    SizeAwards["Medium"] = "30x30cm";
    SizeAwards["Big"] = "100x100cm";
})(SizeAwards || (SizeAwards = {}));
;
let prizeSize = SizeAwards.Small;
