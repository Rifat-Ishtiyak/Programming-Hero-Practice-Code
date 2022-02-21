function getUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => showUser(data))
}

function showUser(data){
    for (const user of data) {
        // console.log(`Name : ${user.name}  |  Email : ${user.email}`);

        const userList = document.getElementById('user-list');
        const list = document.createElement('li');
        list.innerHTML = `<b>Name</b> : ${user.name}  |  <b>Email</b> : ${user.email}`;
        userList.appendChild(list);
    }
}