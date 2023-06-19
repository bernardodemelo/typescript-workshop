//let greeting:string = "Hello World";

//console.log(greeting);

// 1st Example : Built-In Types 
let stripeAmountSale : number = 123_456_789; 
let description = "Dundie Awards";
let isBought : boolean = false;

// 2nd Example: Type Any
let theOffice;

//3rd Example: Arrays, Intellisense, Tupples

let creators: string[] = ["Michael", "Phylis", "Angela"];
let numbers : number[] = [1,2,3];

creators.forEach((creator)=>{
    return console.log(creator.toLowerCase());
})

let collection : [number,string, boolean]; 
collection = [21, "Michael", true];

collection.push(2);

// 4th Example (Enums): 

enum SizeAwards {Small="12x12cm", Medium="30x30cm", Big="100x100cm"};

let prizeSize:SizeAwards = SizeAwards.Small; 

console.log(prizeSize);

// 5th Example (Functions):

const registerPurchase = (income : number, year=2023) =>{
    if(year < 2023){
        return console.log("are you a time traveler?")
    } else {
        return console.log(income);
    }
}

registerPurchase(stripeAmountSale);

// 6th Example Type Aliases

type OfficeEmployee = {
    readonly id : number, 
    name: string
}; 

let dwight : OfficeEmployee = {
    id: 123, 
    name: false
}