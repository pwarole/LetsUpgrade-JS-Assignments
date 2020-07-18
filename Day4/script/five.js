function commision(value){
    let commision_value = 0;
    if(value>=0 && (value<=5000)){
        commision_value = value*(2/100); 
    }
    else if((value=>5001) && (value<=10000)){
        commision_value = value*(5/100); 
    }
    else if((value=>10001) && (value<=20000)){
        commision_value = value*(7/100); 
    }
    else{
        commision_value = value * (10/100);
    }
    return commision_value; 
}


let amount = prompt("Enter Sales Amount");
let com_value = commision(amount);

console.log(com_value);