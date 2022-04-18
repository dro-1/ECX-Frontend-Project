const X_CLASS = 'x'
const O_CLASS = 'o'
const WINNING_COMBINATIONS = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('game-board')
const winningMessageElement = document.getElementById('winning-message')
const restartButton = document.getElementById('restart-button')
const winningMessageTextElement = document.querySelector('[data-winning-text-element]')
let oTurn
let evaluation


restartButton.addEventListener('click', startGame)

function startGame(){ 
  if(player.you == "X"){
  oTurn  = false
  }
  else if (player.you =="O"){oTurn = true}
  setBoardHoverClass()

  cellElements.forEach(cell => {
  cell.classList.remove(X_CLASS)
  cell.classList.remove(O_CLASS)
  cell.removeEventListener('click', handleClick)

  cell.addEventListener('click', handleClick,{once: true})
  winningMessageElement.classList.remove('show')
});
}





function handleClick(e){
  const cell = e.target
  const currentClass = oTurn ? O_CLASS : X_CLASS

  // placemark
    placeMark(cell, currentClass)

  if(opponent === "Friend"){
      // check for win or draw
    if(checkWin(currentClass)){
      endGame(false,currentClass)
    }
    else if(isDraw()){
      endGame(true,currentClass)
    }
    else{
      // switchturns
      swapTurns()
      setBoardHoverClass()
    }
  }
  else if(opponent === "Computer AI"){
    const emptySpaces = []
    // 
    if(checkWin(currentClass)){
      setBoardHoverClass()
      endGame(false)
      return
    }
    else if(isDraw()){
      endGame(true)
    }
    getEmptySpaces(cellElements, emptySpaces)
    console.log(emptySpaces)
    const otherClass =  oTurn ? X_CLASS : O_CLASS
    placeMark(emptySpaces[0], otherClass)
    if(checkWin(otherClass)){
      setBoardHoverClass()
      endGame(false,otherClass)
      return
    }
    // minimax(cellElements, player)

    


  }
  
}






function placeMark(cell, currentClass){
  cell.classList.add(currentClass)
}
function swapTurns(){
  oTurn = !oTurn
}
function setBoardHoverClass(){
  board.classList.remove(X_CLASS)
  board.classList.remove(O_CLASS)
  if(oTurn){
    board.classList.add(O_CLASS)
  }
  else{
    board.classList.add(X_CLASS)
  }
} 
function checkWin(playerClass){
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(playerClass)
    })
  })
}
function isDraw(){
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
  })
}
function endGame(draw,playerClass,currentClass){
  if(playerClass === currentClass){
    if(draw){
      winningMessageTextElement.innerText = "Draw!"
    }
    else{
      winningMessageTextElement.innerText = `${oTurn ? "O's" : "X's"} Win!`
    }
  }
  else if(playerClass !== currentClass){
    if(draw){
      winningMessageTextElement.innerText = "Draw!"
    }
    else{
      winningMessageTextElement.innerText = `${oTurn ? "X's" : "O's"} Win!`
    }
  }
  winningMessageElement.classList.add('show')
}

function getEmptySpaces(array,emptyArray){
  array.forEach(element => {
    if(element.classList.contains('x')||element.classList.contains('o')){
      return
    }
    else{
      emptyArray.push(element)
    }
  });
}

function minimax(cellElements, player){
  //BASE
  if(isWinner(cellElements, player.computer)) return(evaluation = +10);
  if(isWinner(cellElements, player.you)) return (evaluation = -10);
  if(isDraw()) return (evaluation = 0);

  //Look for empty spaces
  getEmptySpaces(cellElements, emptySpaces)

  //save all moves and their evaluation
  let moves

}