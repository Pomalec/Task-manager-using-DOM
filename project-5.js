// Variables

const addtask=document.getElementById('add-task');
const taskcont=document.getElementById('task-container');
const inputask=document.getElementById('input-task');

addtask.addEventListener('click',function(){
    let task=document.createElement('div');
    task.classList.add('task');

    let li=document.createElement('li');
     li.innerText = `${inputask.value}`;
    task.appendChild(li);

    let checkbtn=document.createElement("button");
    checkbtn.innerHTML='<i class="fa-solid fa-check"></i>';
    checkbtn.classList.add('checkTask');
    task.appendChild(checkbtn);

    let delbtn=document.createElement("button");
    delbtn.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    delbtn.classList.add('deleteTask');
    task.appendChild(delbtn);

    if(inputask.value===""){
        alert("please enter a task");
    }else{
        taskcont.appendChild(task);
    }

   inputask.value = "";

   checkbtn.addEventListener('click',function (){
    checkbtn.parentElement.style.textDecoration="line-through";
   })

   delbtn.addEventListener('click',function(e){
    let target =e.target;
    target.parentElement.remove();
   })

   
 

});