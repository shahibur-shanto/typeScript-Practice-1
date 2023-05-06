// Create a TypeScript program that declares a function that takes a string parameter 
// with a literal type of "red", "green", or "blue", and an optional boolean parameter.
// If the boolean parameter is true, log the string parameter in uppercase. 
// If the boolean parameter is false or not provided, log the string parameter in lowercase.


type colorType = "red" | "green" | "blue"

const upperLower = (color:colorType,isgiven?:boolean):string=>{
    
    
    return isgiven ? color.toUpperCase() : color.toLowerCase();
}

console.log(upperLower("green",true));
console.log(upperLower("blue",false));
console.log(upperLower("red"));