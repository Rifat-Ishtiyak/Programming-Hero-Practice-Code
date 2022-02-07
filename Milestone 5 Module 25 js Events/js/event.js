//! background change by using function
function redBackground(){
    document.body.style.backgroundColor='red';
}

//! background change by using ID
greenButton=document.getElementById('make-green');
greenButton.onclick=greenBackground;
function greenBackground(){
    document.body.style.backgroundColor='green';
}
//! background change by using Anonymous function;
orangeButton=document.getElementById('make-orange');
orangeButton.onclick=function(){
    document.body.style.backgroundColor='orange';
}

//! background change by eventListener
pinkButton=document.getElementById('make-hotPink');
pinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor='hotpink';
})

//! background change shortcut
document.getElementById('make-salmon').addEventListener('click', function(){
    document.body.style.backgroundColor='salmon';
})