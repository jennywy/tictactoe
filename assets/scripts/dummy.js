
// turn off event listener after 9 clicks
// why I can still flip over my boxes
// check for match logic for the rest of the matches

// can I check for match by assigning 8 classes horizontal1, h2, h3, vertical1, v2, v3, diag1, d2
// and then selecting them and assessing them for a match?

gameMoves[$(this).data('id')] = $(this).text()

gameMoves[$(this).data('class')

console.log(gameMoves)

checkWinner()

const checkWinner = function () {
  if (gameMoves[0] === 'X' && gameMoves[1] === 'X' && gameMoves[2] === 'X') {
    console.log('winner')
  } else {
    console.log('nope')
  }
}


// tie
const tie = function () {
  // nine clicks and no match
  if (gameMoves.length === 9) {
    console.log('tie game')
  }
}


//clearBoard
const clearBoard = function {
  // if there are 9 clicks
}


let gameMoves = [0,1,2,3,4,5,6,7,8]
let playerXMoves = []
let playerOMoves = []

let playerArray = function (gameMoves) {
  for (let i = 0; i < gameMoves.length; i++) {
  if (gameMoves[i] % 2 === 1) {
    playerOMoves.push(gameMoves[i])
  } else {
    playerXMoves.push(gameMoves[i])
  }
}
}
playerArray(gameMoves)
console.log(playerXMoves)
console.log(playerOMoves)

// if the playerMoves array is larger than 3, check for a match
// if some of the numbers match all any of the matchid elements...
const match = [0, 1, 2]
const user = [0, 2, 1, 4]
const bad = [3, 1, 2]
const wrong = bad.sort()
const sorted = user.sort()

let sortPlayer = function (playerMoves) {
  playerMoves = playerMoves.sort()
  return playerMoves
}

const check = function (sortPlayer) {
  for (let i = 0; i < match.length; i++) {
    if (match[i] === sortedset[i]) {
      return true
    } else {
      // actually want this to loop to the next set of matches in matchID....
      return false
    }
  }
}

check(sortedPlayer)

//

const matchIds = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
match = matchIds[i]
x
const checkForMatch = function (playerMoves) {
  if (playerMoves.length >= 3) {
    //go through each item of the matchIds to check if


// adding player moves into their array

let game = function (player, index) {
  let playerX
  let playerO
}


// create an incrimenter
// if we click nine times and there is no match, then it's a tie and the game ends
// every even click is O, every odd click is X
