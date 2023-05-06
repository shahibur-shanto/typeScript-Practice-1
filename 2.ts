// Write a TypeScript function that takes in two arrays of numbers as parameters. 
// The function should compare the elements in both arrays and return
//  a new array that contains only the elements that are present in both arrays.

// For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8],
// the function should return a new array with the elements 2 and 4 because 
// they are present in both arrays.

// The function should handle arrays of any length and should return 
// the resulting array in the same order as they appear in the first array.




const array1:number[]  = [1, 2, 3, 4, 5,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const array2:number[] = [2, 4, 6, 8,5];
const compareArray = (array1:number[], array2:number[]):number[]=>{
    let result:number[] = [];
    array1.forEach(element1=>{
        array2.forEach(element2=>{
            if(element1===element2){
                result.push(element1)
            }
        })
    })
    
    return result;
}

console.log(compareArray(array1,array2));