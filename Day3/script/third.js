function marks(mark){
    var Grade = "F";
    if(mark>90&&mark<=100){
    Grade = "A";
    }
    if(mark>80&&mark<=90){
    Grade = "B";
    }
    if(mark>70&&mark<=80){
    Grade = "C";
    }
    if(mark>60&&mark<=70){
    Grade = "D";
    }
    if(mark>=50&&mark<=60){
    Grade = "E";
    }
    return Grade;
}
var m = prompt("Enter Marks");
var result = marks(m);
console.log("Marks are "+m+" and Grade is "+result);

// Using Ternary Operator

// let marks = prompt("Enter Marks");
// console.log(marks>90&&marks<=100?"Marks are "+marks+" and Grade is A":"Marks are "+marks+" and Grade is B");