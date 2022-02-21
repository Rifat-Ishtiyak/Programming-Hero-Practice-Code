const x = 12;
const y = 5;


//! 2 no. problem
const tString = `the value of x is ${x}\nthe value of y is ${y}`;
console.log(tString);


//! 3.1 no. problem
const fiveD = (x) => x/5;
console.log(fiveD(50));


//! 3.2 no. problem
const cal = (x,y) => {
    let plus1 = x+2;
    let plus2 = y+2;
    const result = plus1 * plus2;
    return result;
}
console.log(cal(5,4));


//! 3.3 no. problem
const multi = (x,y,z) => x*y*z;
console.log(multi(5,2,4));


//! 5 no. problem
const array1 = [11,23,4,6,2,5,];
const array2 = array1.map((x)=>x*5)
console.log(array2);

//! 6 no. problem
const oddArray = array1.filter((x)=> x%2);
console.log(oddArray);


//! 7 no. problem
const arrayObj = [
    {
        carName: 'lambo',
        color: 'red',
        price: 2400000
    },
    {
        carName: 'cycle',
        color: 'white',
        price: 5000
    },
    {
        carName: 'premio',
        color: 'white',
        price: 12000
    }
]
// console.log(arrayObj[0].price);
const result2 = arrayObj.find((x)=> arrayObj[x]);
console.log(result2);

//! 9 no. problem
const arrayColor =['red', 'green', 'yellow', 'black'];
const [, ,three] =arrayColor;
console.log(three);


//! 10 no. problem
const threePera = (x,y,z=7)=>x+y+z;
console.log(threePera(2,3));


//! 11 no. problem

const nestedObj={
    fish1:{
        fishName : 'Hilsha',
        price : 2000,
        place : ['padma', 'meghna']
    },
    fish2:{
        fishName : 'Rui',
        price : 500,
        place : 'pond'
    }
}
console.log(nestedObj.fish1?.id?.place);