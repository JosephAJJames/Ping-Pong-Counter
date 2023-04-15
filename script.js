const player1 = document.getElementById("player1") //Get player 1 score increase button
const player2 = document.getElementById("player2") //Get player 2 score increase button
const reset = document.getElementById("reset") //Get reset button
var scoreP = document.getElementById("score") //Get h2 element displaying score
var dropDown = document.getElementById("select") //Get drop down box
var p1Score = 0 //variable holding player 1's score
var p2Score = 0 //variable holding player 2's score

const updateP = () => { //function updating the text of the score h2 element
    scoreP.innerText = p1Score + " " + "to" + " " + p2Score
    console.log("done")
}

const checkValues = (p, score) => { //function to check if score can be increased or not for a given player
    if (score + 1 <= dropDown.value) {
        if (p == 1) {
            p1Score++
        } else {
            p2Score++
        }
        updateP()
    }
}

player1.addEventListener("click", () => {
    if (dropDown.value != "empty") {
        checkValues(1, p1Score) //run checkValues for player 1
    }

})

player2.addEventListener("click", () => {
    if (dropDown.value != "empty") { //if player has chosen
        checkValues(2, p2Score) //run checkValues for player 2 
    }
})

reset.addEventListener("click", () => {
    p1Score = 0 //reset p1Score to 0
    p2Score = 0 //reset p2Score to 0
    updateP()
})