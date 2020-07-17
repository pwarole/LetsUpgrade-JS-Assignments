odd_even = function(num){
    var result = "Odd";
    if(num%2==0){
        result="Even";
    }
    return result;
}
var num = prompt();
var result = odd_even(num);
if(result){
    console.log("The number entered is "+num+" and Number is "+result);
}
else{
    console.log("The number entered is "+num+" and Number is "+result);
}