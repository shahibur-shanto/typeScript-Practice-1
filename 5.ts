// Suppose you have an array of numbers in TypeScript, 
// and you want to find the sum of all the even numbers in the array. 
// How would you approach this problem and write code to solve it?

type NumberArray = number[];


const sumOfEven = <T>(values:NumberArray):number => {
    let result:number = 0; 
    values.map(value=>{
        if(value%2==0){
            result+=value;
        }
    })
    console.log(result);
    return result;
}

const number1 = [1,2,3,4,5,6,7,8];
sumOfEven(number1)