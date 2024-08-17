//Asynchronous Programming

// const waitingForSoup = ()=>console.log('soup is ready');
// console.log('You start the conva with your friend');

// setTimeout(waitingForSoup,2000);

// console.log('Still speaking');

//Promises
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        isReady=[true,false][Math.floor(Math.random()*2)]
        isReady ? resolve('Soup is ready'):reject('No soup today');
        
    },2000)
})

// console.log(
//     promise1.
//     then(sucess => console.log({sucess}))
//     .catch(error => console.log({error}))
// );

// console.log('fetch:',
//     fetch('https://dog.ceo/api/breeds/image/random ')
//     .then(res =>res.json())
//     .then(data=>console.log(data))
    
// );

//async & wait

//Rules for using async/await
//1. You must create a function 
//2. You must use the keyword async
//3. Use the word await

const getDog = async ()=>{
    const url='https://dog.ceo/api/breeds/image/random '
    const resposne = await fetch(url)
    const data = await resposne.json()
    console.log(data);
    
}
// getDog()

const getSoup = async ()=>{
    const data={rating:0,tip:0,pay:0,review:0}
    try{
        const soup = await promise1
        console.log(soup); 
        data.rating=5
        data.tip=0.2
        data.pay=10
        data.review =5
        // console.log(data);
        return data
    }catch(err){
        console.log(err);
        data.rating=1
        data.tip=0
        data.pay=0
        data.review =1
        return data
        
    }
    
}

getSoup().then(value=>console.log(value))
