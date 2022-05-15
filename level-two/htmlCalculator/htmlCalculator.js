const addForm = document["add-form"]
const subForm = document["sub-form"]
const multiForm = document["multi-form"]

addForm.addEventListener("submit", function(event){
    event.preventDefault()
    const firstNumbera = Number(addForm.afirstNumber.value);
    const secondNumbera = Number(addForm.asecondNumber.value);
    addForm.afirstNumber.value = ""
    addForm.asecondNumber.value = ""

    const ah2 = document.createElement('h2')

    const sumA = firstNumbera + secondNumbera

    ah2.textContent = firstNumbera + " + " + secondNumbera + " = " + sumA

    document.getElementsByTagName("body")[0].append(ah2)
})

subForm.addEventListener("submit", function(event){
    event.preventDefault()
    const firstNumbers = Number(subForm.sfirstNumber.value);
    const secondNumbers = Number(subForm.ssecondNumber.value);
    subForm.sfirstNumber.value = ""
    subForm.ssecondNumber.value = ""

    const sh2 = document.createElement('h2')

    const sumS = firstNumbers - secondNumbers

    sh2.textContent = firstNumbers + " - " + secondNumbers + " = " + sumS

    document.getElementsByTagName("body")[0].append(sh2)
})

multiForm.addEventListener("submit", function(event){
    event.preventDefault()
    const firstNumberm = Number(multiForm.mfirstNumber.value);
    const secondNumberm = Number(multiForm.msecondNumber.value);
    multiForm.mfirstNumber.value = ""
    multiForm.msecondNumber.value = ""

    const mh2 = document.createElement('h2')

    const sumM = firstNumberm * secondNumberm

    mh2.textContent = firstNumberm + " * " + secondNumberm + " = " + sumM

    document.getElementsByTagName("body")[0].append(mh2)
})