document.getElementById('comment-submit').addEventListener('click', function(){
    let comment=document.getElementById('comment-box').value;
    
    const newComment=document.createElement('p');
    newComment.classList.add('comment'); //! add class to a element
    newComment.innerText=comment;

    const commentConatiner=document.getElementsByClassName('comment-container');
    for (const element of commentConatiner) {
        element.appendChild(newComment);
    }
    // commentConatiner.appendChild(newComment);

    document.getElementById('comment-box').value="";
})