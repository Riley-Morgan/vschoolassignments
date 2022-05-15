const startBtn = document.getElementById("start")
const resetBtn = document.getElementById("reset")
const clicker = document.getElementById("clicker")
const waitHere = document.getElementById("waitplease")

let count = 0



let intervalId
clicker.textContent = count

countDownCount = 10
waitHere.textContent = countDownCount

function incrementClicker(){
    count++
    clicker.textContent = count
}

function countDown(){
    countDownCount--
    waitHere.textContent = countDownCount
    if(countDownCount === 0){
        waitHere.textContent = "Start clicking!"
    }
}

let intervalCD = setInterval(countDown, 1000)

function downDone(){
    clearInterval(intervalCD)
}

setTimeout(downDone, 10500)

startBtn.addEventListener("click", function(event){
    incrementClicker()
})

resetBtn.addEventListener("click", function(event){
    count = 0
    clicker.textContent = count
})

localStorage.setItem("theclicks", count)