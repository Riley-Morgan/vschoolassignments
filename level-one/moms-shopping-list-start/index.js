const form = document.addItem

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const newItemLi = createNewItem()
    //console.log(newItemLi)
    document.getElementById("list").appendChild(newItemLi)
})

function createNewItem(e){
    const newItem = document.createElement("div")
    var newItemValue = document.getElementById("title")
    newItem.textContent = newItemValue.value
    newItemValue.value = ""
    const newItemLi = document.createElement("li")
    

    const newEditBtn = document.createElement("button")
    newEditBtn.textContent = "edit"
    //newEditBtn.className = "editThis"
    const newXBtn = document.createElement("button")
    newXBtn.textContent = "X"
    //newXBtn.className = "deleteThis"

    newItemLi.appendChild(newItem)
    newItemLi.appendChild(newEditBtn)
    newItemLi.appendChild(newXBtn)

        
   newXBtn.addEventListener("click", (event) => {
    document.getElementById("list").removeChild(newItemLi)      
    })
   
    newEditBtn.addEventListener("click", (event) => {

        newEditBtn.textContent = "save"
        newItem.contentEditable = "true"
            
        newEditBtn.addEventListener("click", (event) => {
            
            newEditBtn.textContent = "edit"
            newItem.contentEditable = "false"
        })
        
        //console.log("click")

    })

    return newItemLi

    
}

    
//div changed to input
//edit changed to save
//click save
//change back to edit



