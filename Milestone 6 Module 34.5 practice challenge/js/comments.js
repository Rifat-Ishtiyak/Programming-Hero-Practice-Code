const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => showComments(data))
}

const showComments = (data) =>{
    const data2 = data.slice(0,10)
    const commentField = document.getElementById('comments');
    data2.forEach(comments =>{
        const div = document.createElement('div');
        div.innerHTML = `<h2>Name : ${comments.name}</h2>
                        <p>
                            <b>Comment : ${comments.body}</b>
                        </p>
                        <button onclick="loadDetails(${comments.id})">Details</button>`
        commentField.appendChild(div);
    })
}

const loadDetails = (id)=>{
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(url)
        .then(respose => respose.json())
        .then(data => showDetails(data))
}

const showDetails = (data) =>{
    const detailsField = document.getElementById('details');
    detailsField.innerHTML = '';
    const div = document.createElement('div')
    div.innerHTML = `<h2>ID : ${data.id}</h2>
                    <h2>Email : ${data.email}</h2>
                    <h2>Name : ${data.name}</h2>
                    <p>
                        <b>Comment : ${data.body}</b>
                    </p>`;
    detailsField.style.border = '2px solid green';
    detailsField.style.padding = '20px';
    detailsField.appendChild(div)

}