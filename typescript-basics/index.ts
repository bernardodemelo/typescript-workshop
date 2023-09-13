let greeting:string = "Hello World";
// greeting = 10; --> would lead to an TS error
console.log(greeting);

//  TypeScript Bult-in Types 
let amountSale:number = 123_456_789;
let isBought:boolean = false; 

// Type Any
let ironhack; 

let variable:any = "John"; 
variable = 123; 

// Arrays
let creators: string[] = ["Brad", "Pete", "Arnold"]; 
let amount : number[] = [1,2,3];

// Intellisense (definition from VSCode Website): 
// IntelliSense is a general term for various code editing features including: code completion, parameter info, quick info, and member lists. IntelliSense features are sometimes called by other names such as "code completion", "content assist", and "code hinting."

// In this Example, if we type 'creator.' we check that we have an autocomplete only for string methods.

creators.forEach((creator)=>{
    return console.log(creator.toLowerCase())
});


// Tupples 
let collection : [number, string, boolean, boolean] = [21, "Michael", true, false];


// Functions Example 
const registerPurchase = (income: number, year=2023) => {
    if(year < 2023){
        return console.log("Are you a time traveler?")
    }
    else {
        return console.log(income);
    }
}

registerPurchase(123456, 2010);

// Type Aliases - Type Aliases allow defining types with a custom name (an Alias).
// They can be used for primitives like string or more complex types such as objects and arrays 

type OfficeEmployee = {
    id: number, 
    name: string
}

let dwight : OfficeEmployee = {
    id: 123, 
    name: 'Dwight'
}

// Extra Example: Enums
enum SizeAwards {Small="12x12cm", Medium="30x30cm", Big="100x100cm"};

let prizeSize:SizeAwards = SizeAwards.Small; 
