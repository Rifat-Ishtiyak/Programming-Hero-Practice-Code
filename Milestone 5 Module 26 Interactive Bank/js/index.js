const loginButton=document.getElementById('login-btn');

loginButton.addEventListener('click', function(){
    const email=document.getElementById('email-input');
    const password=document.getElementById('password-input');

    if(email.value=="" || password.value==""){
        alert("input cannot be empty");
    }
    else if(email.value=="rifat@gmail.com" && password.value=="1234"){
        window.location.href="bank.html";
    }
    else{
        alert("Please enter correct Email and Password !");
    }
})