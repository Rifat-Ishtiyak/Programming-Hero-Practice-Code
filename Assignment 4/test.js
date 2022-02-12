// Problem 1: Ana to Vori
function anaToVori(ana){
    if (ana==undefined){
        return 'null value found';
    }
    else if(typeof(ana)!= 'number'){
        return 'Please enter number only';
    }
    else if (ana<0){
        return 'value of ana cannot be negative';
    }
    else{
        vori=ana/16;
        return vori;
    }
}
console.log(anaToVori(32));


// Problem 2: Panda Cost
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity){
    if (singaraQuantity==undefined || somuchaQuantity==undefined || jilapiQuantity==undefined) {
        return 'null value found';
    }
    else if(singaraQuantity<0 || somuchaQuantity<0|| jilapiQuantity<0){
        return 'Quantity cannot be a negative value';
    }
    else if (typeof(singaraQuantity)!='number' || typeof(somuchaQuantity)!='number' || typeof(jilapiQuantity)!='number') {
        return 'Please enter number only';
    }
    else if (singaraQuantity%1!=0 || somuchaQuantity%1!=0 || jilapiQuantity%1!=0) {
        return 'Quantity cannot be a float value';
    }
    else {
        var singaraPrice=7*singaraQuantity;
        var somuchaPrice=10*somuchaQuantity;
        var jilapiPrice=15*jilapiQuantity;

        var totalPrice=singaraPrice+somuchaPrice+jilapiPrice;
        return totalPrice;
    }
}
console.log(pandaCost(4,5,3)); 


// Problem 3: Picnic Budget
function picnicBudget(memberQuantity){
    if(memberQuantity==undefined){
        return 'null value found';
    }
    else if(memberQuantity<0){
        return 'negative value found';
    }
    else if(typeof(memberQuantity)!='number'){
        return 'Please enter number only';
    }
    else{
        if (memberQuantity<=100) {
            var totalCost=memberQuantity*5000;
            return totalCost;
        }
        else if(memberQuantity>100 && memberQuantity<=200){
            var remainingMember=memberQuantity-100;
            var totalCost=(remainingMember*4000)+(100*5000);
            return totalCost;
        }
        else if(memberQuantity>200){
            var remainingMember=memberQuantity-200;
            var totalCost=(remainingMember*3000)+(100*5000)+(100*4000);
            return totalCost;
        }
    }
}
console.log(picnicBudget(200));


// Problem 3: Odd Friend
function oddFriend(friendsName){
    if (friendsName==undefined) {
        return 'function parameter is empty';
    }
    else if (friendsName.length==0){
        return 'array is empty';
    }
    else{
        var oddName=[];
        for (const element of friendsName) {
            if(typeof(element)!='string'){
                return 'only string type input is expected';
            }
            else if (element.length%2!=0) {
                oddName.push(element);
            }
        }
        if(oddName.length!=0){
            return oddName[0];
        }
        else{
            return 'odd friend not found';
        }
    }
}
var friends=['Modi', 'justin', 'Alex', 'Trump', 'Putin'];
console.log(oddFriend(friends));
