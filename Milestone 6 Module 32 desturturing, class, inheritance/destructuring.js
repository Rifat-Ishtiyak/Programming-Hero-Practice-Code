const company = {
    name:"GP",
    ceo:{
        name: "CEO NAME",
        id: "1223",
        phone: "01567798"
    },
    web:{
        work:"remote",
        framework:['react', 'laravel']
    }
}

const fish = {
    name: "hilsha",
    id:23,
    price:2345
}

const {name,id}=company.ceo;
const {nameC}=company;

console.log(name);
console.log(id);