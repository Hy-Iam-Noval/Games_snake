import Snake from './Snake.js';
import Apple from './Apple.js';

const snake = new Snake()
const apple = new Apple(snake)

export default class Game {
   x = 10; y = 10 // player
   xv = 0; yv = 0
   size = 20; tx = 45; ty = 25
   score = 0
   constructor(ctx, canvas){
      this.ctx = ctx
      this.canvas = canvas
   }

   updateMove(evt){
      const keyCode = (key) => evt.keyCode === key
      const {score, xv, yv} = this
      if (score > 0) {
         this.resetV()
         return
      }
      if (keyCode(37) && xv !== 1) {
         this.xv = -1
         this.yv = 0
      }
      if (keyCode(38) && yv !== 1) {
         this.xv = 0
         this.yv = -1
      }
      if (keyCode(39) && xv !== -1) {
         this.xv = 1
         this.yv = 0
      }
      if (keyCode(40) && yv !== -1) {
         this.xv = 0
         this.yv = 1
      }
   }
   
   /**
    * Move coordinat
    * @returns this
   */
   update(){
      this.x += this.xv
      this.y += this.yv
      this.hitCorner()
      this.showScore()
      return this
   }

   resetV(){
      this.xv = 0
      this.yv = 0
   }

   action(){
      this.ctx.fillStyle = "black"
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      snake.update(this, this.ctx).removeOverTail()
      apple.update(this, this.ctx).eat(this)
      return this
   }

   showScore(){
      const elem = document.getElementById("score")
      elem.innerHTML = snake.tail.length - snake.defaultLength 
   }

   
   hitCorner(){
      const tx = this.tx -1 
      const ty = this.ty -1 
      if (this.x < 0) {
         this.x = tx
      }
      if(this.x > tx) {
         this.x = 0 
      }
      if (this.y < 0) {
         this.y = ty
      }
      if(this.y > ty) {
         this.y = 0 
      }
   }

   stop(){
      this.resetV()
      this.x = 10 
      this.y = 10

      const elem = document.getElementById("gameover")
      const score = document.getElementById("last-score")
      elem.style.visibility = "visible"
      score.innerHTML = this.score
   }
}
