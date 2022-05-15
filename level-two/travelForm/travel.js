const travelForm = document.travelForm

travelForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const firstName = travelForm.firstName.value
    const lastName = travelForm.lastName.value
    const ageName = travelForm.age.value
    const genderOption = travelForm.gender.value
    const cityOption = travelForm.city.value
    const checkedDiet = []

    for(let i = 0; i < travelForm.diet.length; i++){
        if(travelForm.diet[i].checked){
            checkedDiet.push(travelForm.diet[i].value)
        }
    }

    let readThis = "Name: " + firstName + " " + lastName + "\r\nAge: " + ageName + "\r\nGender: " + genderOption + "\r\nLocation: " + cityOption + "\r\nDiet: " + checkedDiet

    alert(readThis);
})