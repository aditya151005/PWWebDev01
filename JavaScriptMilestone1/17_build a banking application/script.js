
let deposit=(user,amount)=>{
  user.balance=user.balance+amount
}

let withdraw=(user,amount)=>{
    if(user.balance>=amount){
        user.balance=user.balance-amount

    }else{
        console.log("Insufficient balance");
        
    }
}
let user={name:"Aditya Ranjan",balance:9}

deposit(user,2)

console.log(user); //{name:"Aditya Ranjan",balance:11}

withdraw(user,6)

console.log(user);//{name:"Aditya Ranjan",balance:4}
