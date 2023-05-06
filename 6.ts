// Create an interface called Person that includes properties for 
// name (string), age (number), and email (string). 
// Then create an array of Person objects and write a function that takes
//  the array and a string email as parameters, and 
// returns the Person object that matches the email or null if no match is found.

interface Person{
    name:string
    age:number
    email:string
}
const Persons:Person[]=[
    {name:"shanto",age:35,email:'abc@gmail.com'},
    {name:"minhaz",age:37,email:'def@gmail.com'},
    {name:"sonia",age:34,email:'ghi@gmail.com'},
]

const matchPerson = (persons:Person[], email:string): Person | null=>{
    let result:Person[]=[];
    persons.map(person=>{
        if(person.email===email){
            result.push(person);
}
    })
    return result ? result[0] : null
    

    //another way to sesoleved the problem using "find"

    // let result = persons.find(person=>person.email===email)
    // return result ? result : null
}

console.log(matchPerson(Persons,'abc@gmail.com'))