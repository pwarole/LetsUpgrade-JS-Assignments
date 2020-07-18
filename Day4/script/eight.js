function ask(question,yes,no){
    if(confirm(question))yes()
    else no();
}

ask(
    "Do You Agree?",
    function(){alert("You agreed.");},
    function (){alert("You cancelled the execution.");}
);