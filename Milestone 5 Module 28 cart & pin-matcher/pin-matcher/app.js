function getPin(){
    const random = Math.round(Math.random()*10000)+'';
    if(random.length<4){
        getPin();
    }
    else{
        document.getElementById('gen-display').value = random;
    }
    
}

function generatePin(){
    const randomPIN = getPin();
    console.log(randomPIN);
}
let countTry=3;

document.getElementById('cal-body').addEventListener('click', function(event){
    const number = event.target.innerText;
    
    if (isNaN(number)) {
        
        if (number == 'C') {
            document.getElementById('pin-display').value = '';
            document.getElementById('no-match').style.display = 'none';
            document.getElementById('matched').style.display = 'none';
        }
        else if(number == '<'){
            const typedValueField = document.getElementById('pin-display');
            const typedValue = typedValueField.value;

            document.getElementById('pin-display').value = typedValue.slice(0, typedValue.length-1);
        }
        else if(number == 'Submit'){
            const genDisplay = document.getElementById('gen-display');
            const genValue = parseInt(genDisplay.value);

            const typedValueField = document.getElementById('pin-display');
            const typedValue = parseInt(typedValueField.value);

            if (countTry<=0) {
                alert('maximum try reached');
            }
            else{
                if(genValue == typedValue){
                    countTry=3;
                    document.getElementById('matched').style.display = 'block';
                    document.getElementById('no-match').style.display = 'none';
                    document.getElementById('try-left').innerText = countTry;
                }
                else{
                    countTry -= 1;
                    document.getElementById('no-match').style.display = 'block';
                    document.getElementById('matched').style.display = 'none';
                    document.getElementById('try-left').innerText = countTry;
                }
            }
            
        }
    }
    else{
        document.getElementById('pin-display').value += number
    }
})