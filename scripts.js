// const person={
//     name:"John",
//     shirt:"white",
//     color:['red','blue','green']
// }
// console.log(person);
// console.log(person.name);
// person.name="Yakub";
// console.log(person.name);
// console.log(person.color[1]);

// const introducer =(name,shirt)=>{
//     const person1={
//         name:name,
//         shirt:shirt
//     }
    
//     const intro =`Hi, my name is ${person1.name} and the color of my shirt is ${person1.shirt}.`

//     return intro;
// }

// console.log(introducer("Yakub","white"));

// const numbers = [1,2,3,4,5,6];
// let result=[]

// for (const number of numbers){
//     console.log(number *2)
//     result.push(number*2);

// }
// console.log(result)

//code for sum of array
const sumArray =(numbers)=>{
    let result=0;
    for (const number of numbers){
        result+=number;
    }
    return result;
}

const num=[1,2,3,4,5,6];
console.log(sumArray(num))