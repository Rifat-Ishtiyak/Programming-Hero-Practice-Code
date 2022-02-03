// Task 1 
let str1="This is string";
let bool1=false;
let num=1226;

console.log(str1,bool1,num);


// Task 2 
let var1=12;
const var2=999;
console.log(var1);
console.log(var2);

var1=124;
console.log(var1);
console.log(var2);

// Task 3 

let num1=10;
let num2=6;

sum=num1-num2;
sub=num1-num2;
mul=num1*num2;
div=num1/num2;
rdmr=num1%num2;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(rdmr);


// task 7
number=7;
while(number<=19){
    if(number%2!=0){
        console.log(number);
    }
    number++;
}

// Task 9
arr=[12,34,54,67,78];
for (const element of arr) {
    console.log(element);
}

//Task 10
arr1=[12,34,94,87,718];
for (const element of arr1) {
    if(element>80){
        console.log(element);
    }
}

//Task 11
function multiplication(num3,num4,num5){
    return num3*num4*num5;
}

console.log(multiplication(12,2,5));

//task 12
let student={
    "name":"Rifat",
    "ID":123,
    "Dept":"CSE"
}
console.log(student.name);
console.log(student.ID);
console.log(student.Dept);

student.Dept="BBA";
console.log(student.name);
console.log(student.ID);
console.log(student.Dept);
