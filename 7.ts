// Create a TypeScript program that declares an array of numbers. 
// Use the spread  operator to pass the elements of the array as arguments to a function 
// that finds the minimum and maximum values of the array. 
// Use destructuring to assign the minimum and maximum values to separate variables, 
// and log them to the console.


const numberOfArray:number[] = [2,3,4,5,1,0];
type minmazTypes = [number,number]

const maxAndMin = (...nums:number[]):minmazTypes=>{
    const min  = Math.min(...nums);
    const max = Math.max(...nums);
    return [min,max];
}
const [min,max] = maxAndMin(...numberOfArray);
console.log(maxAndMin(...numberOfArray));

console.log(`the minimum value is ${min}`)
console.log(`the maximum value is ${max}`)