// setTimeout(() => {
//     console.log('I am rifat');
// }, 3000);

const addMoney = () => {
    const number = prompt('Enter a number');
    let amount = parseInt(number);
    amount += 200;
    if (amount) {
        alert('adding after 200, the amount is : '+ amount);
    }
}
    

const confirmHref = () => {
    const response = confirm('Do you want to see the href?');

    if (response) {
        alert('location is : ' + location.href)
    }
}