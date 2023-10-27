

let $ = document;
let list = $.querySelector(".list");
let items = $.querySelector(".items");
let modalBox = $.querySelector(".modal-box");
let modalMg = $.querySelector(".text");
let newTodo = $.querySelector(".new-todo");
let deleteItem = $.querySelector(".delete");
let addBtn = $.querySelector(".btn");


addBtn.addEventListener("click" , ()=>{
    if(newTodo.value){
        let newItem = $.createElement("li");
        let newTodoName = $.createElement("span");
        let newTodoTrash = $.createElement("i");
        newItem.className = ("items");
        newTodoName.innerHTML = newTodo.value;
        newTodoTrash.className = "fa fa-trash-o delete"
        newTodoTrash.addEventListener("click" , (event)=>{
            event.target.parentElement.remove();
            modalBox.style.display = "block";
            modalBox.style.backgroundColor = "green"
            modalMg.innerHTML = "Todo Removed successfully";

        })
        newItem.append(newTodoName , newTodoTrash)
        // newItem.innerHTML = `<span>${newTodo.value}</span>`;
        // newItem.innerHTML +=  `<i class="fa fa-trash-o delete"></i>`;

        list.append(newItem);
        modalBox.style.display = "block";
        modalBox.style.backgroundColor = "green";
        modalMg.innerHTML = "Your todo add successfully";
        newTodo.value = "";
    }else{
        modalBox.style.display = "block";
        modalMg.innerHTML = "Please enter correct information"
        modalBox.style.backgroundColor = "red"
    }

    setTimeout(()=>{
        modalBox.style.display = "none";
    },3000)
})


newTodo.addEventListener("keydown" , (event)=>{
    // event.preventDefault();
    if(event.keyCode === 13){
        if(newTodo.value){
            let newItem = $.createElement("li");
            let newTodoName = $.createElement("span");
            let newTodoTrash = $.createElement("i");
  
            newTodoName.innerHTML = newTodo.value;
            newTodoTrash.className = "fa fa-trash-o delete";
            newItem.append(newTodoName,newTodoTrash)
            newTodoTrash.addEventListener("click" , (event)=>{
                console.log(event.target)
            })
            // newItem.innerHTML = `<span>${newTodo.value}</span>`;
            // newItem.innerHTML +=  `<i class="fa fa-trash-o delete"></i>`;
            newItem.className = ("items");
            list.append(newItem);
            modalBox.style.display = "block";
            modalBox.style.backgroundColor = "green";
            modalMg.innerHTML = "Your todo add successfully";
            newTodo.value = "";
        }else{
            modalBox.style.display = "block";
            modalMg.innerHTML = "Please enter correct information"
            modalBox.style.backgroundColor = "red"
        }
        setTimeout(()=>{
            modalBox.style.display = "none";
        },3000)
    }

})