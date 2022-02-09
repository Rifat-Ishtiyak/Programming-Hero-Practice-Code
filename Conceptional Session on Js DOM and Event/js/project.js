const inputValue=document.getElementById('input-value');
const submitBtn=document.getElementById('submit-btn');
let count=0;

submitBtn.addEventListener('click', function(){
    if(inputValue.value == ""){
        alert("empty input found");
    }
    else{
        count++;
        tableContainer=document.getElementById('table-conatiner');
        const newRow=document.createElement('tr');
        newRow.innerHTML=`<th scope="row">${count}</th>
                        <td>${inputValue.value}</td>
                        <td>
                            <button class="btn btn-danger delete-btn w-lg-25">Delete</button>
                            <button class="btn btn-success done-btn w-lg-25">Done</button>
                        </td>`;
        tableContainer.appendChild(newRow);
        document.getElementById('input-value').value="";

        //!------------------- Delete Button----------------------
        const deleteButton=document.getElementsByClassName('delete-btn');
        for (const element of deleteButton) {
            element.addEventListener('click', function(event){
                event.target.parentNode.parentNode.style.display='none';
                count--;
            })
        }

        //!------------------- Done Button----------------------
        const doneButton=document.getElementsByClassName('done-btn');
        for (const element of doneButton) {
            element.addEventListener('click', function(event){
                event.target.parentNode.parentNode.style.textDecoration='line-through';
            })
        }  
    }
})



