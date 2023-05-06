// // You have an interface for Product, containing the product's id, name, price, and category.
// // You want to filter an array of Products based on a specific criterion and value.

// // Write a TypeScript generic function that takes this array, a criterion , and returns 
// // a new array containing only the products that match the given criterion and value. 
// // Use a generic type parameter in the function signature to ensure type safety.

interface Product {
    id:number
    name:string
    price:number
    category:string
}

const Product1:Product[] = [
    {id:1, name:'shanto', price:100, category:"normal"},
    {id:2, name:'minhax', price:50, category:"economy"},
    {id:3, name:'sonia', price:200, category:"primium"},
    {id:4, name:'noumi', price:200, category:"primium"},
    {id:5, name:'safwan', price:200, category:"normal"},

]

const findProduct = <T, S extends keyof T> (products:T[],criteria:S, value:T[S]):T[] => {
    const result  = products.filter(product=>product[criteria]===value)
    console.log(result);
    return result
}

findProduct(Product1,'price',200)