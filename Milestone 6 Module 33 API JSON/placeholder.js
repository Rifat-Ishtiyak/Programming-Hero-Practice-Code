function getUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => showUser(data))
}

function showUser(data){
    for (const user of data) {
        const userList = document.getElementById('user-list');
        const list = document.createElement('li');
        list.innerHTML = `<b>Name</b> : ${user.name}  |  <b>Email</b> : ${user.email}`;
        userList.appendChild(list);
    }
}


function getPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response =>  response.json())
    .then(data => showPhotos(data))
}

function showPhotos(data){
    const photoCon = document.getElementById('photo');
    
    for(const photo of data){
        console.log(photo.url)
        const photoDiv = document.createElement('div');
        photoDiv.classList.add("images");
        photoDiv.innerHTML=`<img src="${photo.url}" width='150' alt="">
                            <h2>${photo.id}</h2>
                            <h2>${photo.title}</h2>`
        photoCon.appendChild(photoDiv);
        photoDiv.style.border='1px solid red';
    }
}