function getValue(value){
    document.getElementById('input-field').value+=value;
}

function removeAll(){
    document.getElementById('input-field').value='';
}

function result(){
    inputField=document.getElementById('input-field');
    inputValue=inputField.value;

    let result=eval(inputValue);
    document.getElementById('input-field').value=result;
}