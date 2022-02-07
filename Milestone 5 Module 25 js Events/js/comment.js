document.getElementById('comment-submit').addEventListener('click', function(){
    let comment=document.getElementById('comment-box').value;
    
    const newComment=document.createElement('p');
    newComment.classList.add('comment'); //! add class to a element
    newComment.innerText=comment;

    const commentConatiner=document.getElementById('comment-container');
    commentConatiner.appendChild(newComment);

    document.getElementById('comment-box').value="";
})