class Car{
    constructor(name,color,speed,currentSpeed){
        //properties
        this.name=name
        this.color=color
        this.speed=speed
        this.currentSpeed=0
    }
    getCurrentSpeed(){
        return this.currentSpeed
    }
    zeroToSixty(){
        setTimeout(()=>{
            console.log('Wow! That was fast!.'); 
            this.currentSpeed+=60;
            console.log(this.currentSpeed);
            
        },3000)
    }
    drive(speed){
        this.currentSpeed=speed;
        console.log(`Driving speed is ${this.currentSpeed} mph`);
        
    }
    brake(){
        console.log('breaking: comming to a break halt');
        this.currentSpeed-=10
        console.log(this.currentSpeed);
        
        
    }
}

const ferrari = new Car('ferrari','red',250)
const porsche = new Car('Porsche','yellow',250)
console.log(porsche.name);
console.log(porsche.color);
porsche.drive(40)
porsche.drive(50)
porsche.drive(60)
porsche.drive(70)

// console.dir(ferrari)
// console.log(ferrari.name);
// console.log(ferrari.color);
// console.log(ferrari.speed);
// console.log(ferrari.currentSpeed);

// ferrari.drive()
// console.log(ferrari.currentSpeed);
// ferrari.brake()
// ferrari.drive()
// console.log(ferrari.currentSpeed);
//  ferrari.zeroToSixty()
//  console.log(ferrari.currentSpeed);
//  ferrari.brake()

const number=[1,2,3]
number.push(4)  //method
number.push('apple')
console.log(number);

Array.prototype.myPush=function(item){
   this[this.length]=item
   return this
}

const fruits=['apple','banana','mango']
console.log(fruits.myPush('Kiwi'));
console.log(fruits.myPush('Papaya'));

