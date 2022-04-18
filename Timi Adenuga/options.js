
const computerBtn = document.getElementById('computer-button')
const friendBtn = document.getElementById('friend-button')
const nextBtn = document.getElementById('next-button')
const xBtn = document.getElementById('x-button')
const oBtn = document.getElementById('o-button')
const playBtn = document.getElementById('play-button')
const menuBtn = document.getElementById('menu-button')
const firstScreen = document.querySelector(".first-screen")
const secondScreen = document.querySelector(".second-screen")
const gameBoard = document.querySelector(".game-board")
const player = new Object
let opponent




computerBtn.addEventListener('click', () =>{
  resetButtonColor(computerBtn,friendBtn)
  switchActive(friendBtn,computerBtn)
  opponent = "Computer AI"
})
friendBtn.addEventListener('click', () =>{
  resetButtonColor(computerBtn,friendBtn)
  switchActive(computerBtn,friendBtn)
  opponent = "Friend"
})
nextBtn.addEventListener('click', () =>{
  if(!opponent){
    computerBtn.style.backgroundColor = "rgb(97, 0, 0)"
    friendBtn.style.backgroundColor = "rgb(97, 0, 0)"
    return
  }
  firstScreen.classList.remove("show")
  secondScreen.classList.add("show")
})
xBtn.addEventListener('click', () =>{
  resetButtonColor(oBtn,xBtn)
  switchActive(oBtn,xBtn)
  player.you = "X"
  if(opponent === "Computer AI")player.computer = "O"
  else if(opponent === "Friend")player.friend = "O"
})
oBtn.addEventListener('click', () =>{
  resetButtonColor(xBtn,oBtn)
  switchActive(xBtn,oBtn)
  player.you = "O"
  if(opponent === "Friend")player.computer = "X"
  else if(opponent === "Computer AI")player.friend = "X"
})
playBtn.addEventListener('click', () => {
  if(!player.you){
    xBtn.style.backgroundColor = "rgb(97, 0, 0)"
    oBtn.style.backgroundColor = "rgb(97, 0, 0)"
    return
  }
  secondScreen.classList.remove("show")
  gameBoard.classList.add("show")
  startGame()
})
menuBtn.addEventListener('click', () => {
  firstScreen.classList.add("show")
  gameBoard.classList.remove("show")
  opponent = ""
  player.you = ""
  resetButtonColor(computerBtn,friendBtn)
  resetButtonColor(xBtn,oBtn)
  removeActiveClasses(computerBtn,friendBtn,oBtn,xBtn)
})


function switchActive(off,on){
  off.classList.remove("active")
  on.classList.add("active")
}
function removeActiveClasses(a,b,c,d){
  a.classList.remove("active")
  b.classList.remove("active")
  c.classList.remove("active")
  d.classList.remove("active")
}
function resetButtonColor(x,y) {
  x.style.backgroundColor = "#070929"
  y.style.backgroundColor = "#070929"
}