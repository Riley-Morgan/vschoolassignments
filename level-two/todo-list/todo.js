function getData(){
    axios.get("https://api.vschool.io/rileymorgan/todo")
    .then(res => listData(res.data))
    .catch(err => console.log(err))
}

 function clearList(){
    const list = document.getElementById("todo-list")
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}

function listData(data){
    clearList()
    for(let i = 0; i < data.length; i++){
        let newTodo = document.createElement('ul')
        const h2 =  document.createElement('h2')
        const h3 = document.createElement('h3')
        const taskPrice = document.createElement('h3')
        const img = document.createElement('img')
        //const editBttn = document.createElement('button')
        const deleteBttn = document.createElement('button')
        const isCompleted = document.createElement('input')

        newTodo.className = "todoItem"
        newTodo.classList.add(data[i]._id)
        h2.textContent = data[i].title
        h3.textContent = data[i].description
        taskPrice.textContent = "$" + data[i].price
        img.src = data[i].imgUrl
        deleteBttn.textContent = "Delete"
        //editBttn.textContent = "Edit"
        isCompleted.type = 'checkbox'

        if(data[i].completed){
            isCompleted.setAttribute("checked", true)
            h2.style.textDecoration = "line-through"
        }

        isCompleted.setAttribute("id", data[i]._id)

        isCompleted.addEventListener("change", (event)=>{
            if(event.target.checked){
                axios.put("https://api.vschool.io/rileymorgan/todo/" + data[i]._id, {
                    completed: true
                })
                .then(response => console.log(response))
                .catch(error => console.log(error))

                h2.style.textDecoration = "line-through"

            } else {
                axios.put("https://api.vschool.io/rileymorgan/todo/" + data[i]._id, {
                completed: false
            })
            .then(response => console.log(response))
            .catch(error => console.log(error))

                h2.style.textDecoration = "none"
            }

        
        })

        document.getElementById('todo-list').appendChild(newTodo)
        newTodo.appendChild(h2)
        newTodo.appendChild(isCompleted)
        newTodo.appendChild(h3)
        newTodo.appendChild(taskPrice)
        newTodo.appendChild(img)
        newTodo.appendChild(deleteBttn)
        //newTodo.appendChild(editBttn)

        
        
        deleteBttn.addEventListener("click", (event) => {
            event.preventDefault()

            axios.delete("https://api.vschool.io/rileymorgan/todo/" + data[i]._id)
                .then(response => {
                    console.log(response.data)
                    newTodo.remove()
                })
                .catch(error => console.log(error))

                
        })  


    }

   

}




const makeTodo = document.todoForm

makeTodo.addEventListener("submit", function(event){
    event.preventDefault()

    const postTodo = {
        title: todoForm.newTitle.value,
        description: todoForm.newDescription.value,
        price: todoForm.newPrice.value,
        imgUrl: todoForm.newImg.value
    }

    axios.post("https://api.vschool.io/rileymorgan/todo", postTodo)
        .then(response => getData() )
        .catch(error => console.log(error))

       
})


getData()

