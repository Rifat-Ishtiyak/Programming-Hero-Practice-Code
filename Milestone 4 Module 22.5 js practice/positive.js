function onlyPositive(arr){
    for (const element of arr) {
        if(element>0){
            console.log(element);
        }
        else if(element<0){
            break;
        }
    }
}

let arr=[12,23,4,16,-23,-3,55,77];

onlyPositive(arr);
