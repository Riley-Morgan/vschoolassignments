var capandlow = "HelLo"

function newWord() {
    var capUp = capandlow.toUpperCase()
    var lowDown = capandlow.toLocaleLowerCase()
    var bothOnes = capUp.concat(lowDown)
    console.log(bothOnes)
}

newWord()

var hello = "Hello"
var helloLong = "Hello World"

function lengthMath() {
    var newLength = hello.length
    console.log(Math.floor(newLength/2))

    var newLongLength = helloLong.length
    console.log(Math.floor(newLongLength/2))
}

lengthMath()

function sliceThis() {
    var justFirstHalf = hello.slice(0,2)
    console.log(justFirstHalf)

    var justFirstSecond = helloLong.slice(0,5)
    console.log(justFirstSecond)
}

sliceThis()

function capHalf() {
    var newhello1 = hello.slice(0,(Math.floor(hello.length/2) ) )
    var newhello2 = hello.slice((Math.floor(hello.length/2)))
    var uphello1 = newhello1.toUpperCase()
    var newnewhello = uphello1.concat(newhello2)
    console.log(newnewhello)

    var newhellolong1 = helloLong.slice(0,(Math.floor(helloLong.length/2) ) )
    var newhellolong2 = helloLong.slice((Math.floor(helloLong.length/2)))
    var uphellolong1 = newhellolong1.toUpperCase()
    var newnewhellolong = uphellolong1.concat(newhellolong2)
    console.log(newnewhellolong)
}

capHalf()