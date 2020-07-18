var num = prompt("Enter a Number");
console.log("Prime Numbers Between 2 to 10");
for(let i=2;i<=num;i++){
    let flag=1;
    for (let j=2;j<i;j++){
        if(i%j==0){
            flag=0;
        }
    }
    if(flag==1){
        console.log(i);
    }
}