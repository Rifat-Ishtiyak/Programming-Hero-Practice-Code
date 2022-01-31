
function arrayLargest(num){
    let largestElement;
    for(let i=0; i<num.length; i++){
        if(num[i]>num[i+1]){
            largestElement=num[i];
        }
    }
    return largestElement;
}

let arr1=[-3,-43,-12,34,23];

console.log(arrayLargest(arr1))