const depositButton=document.getElementById('deposit-btn');
const withdrawButton=document.getElementById('withdraw-btn');

const balanceField=document.getElementById('balance');
let balanceAmount=parseFloat(balanceField.innerText);

let count=0;
depositButton.addEventListener('click', function(){
    const depositField=document.getElementById('deposit-field');
    if (depositField.value=="") {
        alert('plz enter a amount');
    }
    else{
        let currentDeposit=parseFloat(depositField.value);
        const depositTotalShow=document.getElementById('deposit-total');
        let totalDeposit=parseFloat(depositTotalShow.innerText);

        balanceAmount+=currentDeposit;
        balanceField.innerText=balanceAmount;

        totalDeposit=totalDeposit+currentDeposit;
        depositTotalShow.innerText=totalDeposit;

        document.getElementById('deposit-field').value="";


        //! ------- table Code-------------
        const newRow=document.createElement('tr');
        const tableBody=document.getElementById('table-body');
        count++;
        newRow.innerHTML=`<th scope="row">${count}</th>
                        <td>Withdraw</td>
                        <td>+${currentDeposit}</td>
                        <td>${Date().slice(0,24)}</td>`;

        tableBody.appendChild(newRow);
    }
})

withdrawButton.addEventListener('click', function(){
    const withdrawField=document.getElementById('withdraw-field');
    if (withdrawField.value=="") {
        alert('plz enter a amount');
    }
    else{
        let currentWithdraw=parseFloat(withdrawField.value);
        const withdrawTotalShow=document.getElementById('withdraw-total');
        let totalWithdraw=parseFloat(withdrawTotalShow.innerText);

        balanceAmount-=currentWithdraw;
        balanceField.innerText=balanceAmount;

        totalWithdraw+=currentWithdraw;
        withdrawTotalShow.innerText=totalWithdraw;

        document.getElementById('withdraw-field').value="";


        //! ------- table Code-------------
        const newRow=document.createElement('tr');
        const tableBody=document.getElementById('table-body');
        count++;
        newRow.innerHTML=`<th scope="row">${count}</th>
                        <td>Deposit</td>
                        <td>-${currentWithdraw}</td>
                        <td>${Date().slice(0,24)}</td>`;

        tableBody.appendChild(newRow);


    }
})

