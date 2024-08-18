class Bank{
    constructor(balance){
        this.balance=balance
    }

    withdraw(amount){
        if(this.balance-amount <=0){
            console.log('You cannot withdraw money');
            return
        }
        this.balance-=amount
        console.log('Withdraw Amount:',`₹${amount}`);
        console.log('Balance: ',this.balance);
    }
    deposit(amount){
        this.balance+=amount
        console.log('Deposited Amount:',`₹${amount}`);
        console.log('Balance: ',this.balance);
        
    }
}

const bank=new Bank(100)
console.log(bank.balance);
bank.deposit(200)
bank.withdraw(100)
bank.withdraw(100)
bank.withdraw(50)

