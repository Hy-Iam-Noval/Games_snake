import Game from './src/Game.js';

const canvas = document.getElementById("canvas") 
const ctx = canvas.getContext("2d")
const game = new Game(ctx, canvas)
const reset = document.getElementById("reset")
const gameOver = document.getElementById("gameover")

document.addEventListener('keydown', (key)=>{
   game.updateMove(key)
})

reset.addEventListener('click', ()=>{
   gameOver.style.visibility = "hidden"
   game.score = 0
})

setInterval(()=>{
   game.update().action()
}, 100)
