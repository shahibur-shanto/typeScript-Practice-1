// Suppose you have an array of tuples, 
// where each tuple represents a product and contains the product name, price, and quantity. 
// Write a TypeScript function that calculates the total cost of all the products in the array, 
// using a generic type for the tuple and a type alias for the array.

type Productt=  [string,number,number];

const costOfProduct = <T>(values:Productt[]):number=>{
    let sum:number = 0;
    const result = values.map(([name,price,quantity])=>{
        sum+=price*quantity;
        
    })
    console.log(sum);
    return sum;
}

const Product12:Productt[] = [
    ['banana',100,3],
    ['mango',100,3],
    ['jackgruit',100,2],
]

costOfProduct(Product12)