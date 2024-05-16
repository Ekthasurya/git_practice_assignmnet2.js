var num = 13;
var count =0;
for(var i =1;i<=13;i++){
    if(num % i===0){
        count++;
    }
}

if(count !== 2){
    console.log("it is prime number");
}
else{
    console.("it is not prime number");
}
