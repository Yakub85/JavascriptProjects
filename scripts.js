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

//find max number is given array code
const maxNumber = (numbers) =>{
    let result=numbers[0];
    for (const number of numbers){
        if(result < number){
            result=number;
        }
    }
    return result;
}
const arr=[2,5,3,7,9,1,8]
console.log(maxNumber(arr));

//count frequency of letter
const letterFrequency = (phrase)=>{
    // 'haahaa'
    console.log(phrase);
    //make a 'frequency' objects{}
    let frequency={}
    for(const letter of phrase){
        //check if letter exists in frequency
        if (letter in frequency){
          // increament the value by +1
          frequency[letter]=frequency[letter]+1;
        }else{
          //otherwised, set the value to 1
          frequency[letter]=1
        }  
    }
    return frequency;
}
console.log(letterFrequency('hahaha'))
// console.log(letterFrequency('lol, what are you doing later tonight lol,haha!'))


// const wordFrequency=(phrase)=>{
//     let frequency={}
//     words = phrase.split(' ');
//     for ( const word of words){
//         if(word in frequency)
//             frequency[word]+=1;
//         else
//             frequency[word]=1;
//     }
//     return frequency;
// }
const wordFrequency=(phrase)=>{
   
    const words = phrase.split(' ');
    return letterFrequency(words);
}
// const userInput = prompt("Enter your sentences")
console.log(wordFrequency('Twinkle Twinkle little star.'))

//higher order function
//map - loops and return  an array
//filter -loops and return  an array
//reduce

//map
const doubleNumber = (numbers)=>{
    return numbers.map((num)=> num*2)
}
let res=[1,2,3,4,5]
console.log(doubleNumber(res));


//filter

const filter = (numbers,greaterThan)=>{
    let result=[];
    for (const number of numbers){
        if (number > greaterThan){
            result.push(number);
        }
    }
    return result;
}
console.log(filter([1,2,3,4,5,6,7],3))

// let nums=[1,2,4,6,3,5,7,8]
// console.log(nums.filter(num => num >3 && num < 6));

//reduce
//sum of the n number
//reduce takes in a function as parameter
//reduce loops and given you back the accumulator

const nums=[1,2,3,4,5]
// const result=nums.reduce(function(prev,curr){
//     return prev * curr   
// })
const result=nums.reduce((prev,curr)=> prev + curr)


console.log(result);


