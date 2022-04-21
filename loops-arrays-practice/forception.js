var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]

var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {

    var newAlphabet = alphabet.split("")
    var peoAlpha = []

    for(var i = 0; i < people.length; i++) {

         peoAlpha.push(people[i])

        for(var j = 0; j < alphabet.length; j++) {
            peoAlpha.push(alphabet[j])
        }
    }

     console.log(peoAlpha)
}