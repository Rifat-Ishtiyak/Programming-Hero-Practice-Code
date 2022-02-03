function bestFriend(friends){
    let highestLength=0;
    let index;
    for (const element of friends) {
        if(element.length>highestLength){
            highestLength=element.length;
            index=friends.indexOf(element)
        }
    }
    return friends[index];
}

let friends=['Alim', 'Galib', 'Justin', 'trump'];

console.log("Best friend is:",bestFriend(friends));