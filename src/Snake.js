export default class Snake {
   tail = []
   defaultLength = 3
   length = this.defaultLength

   update(game, ctx) {
      const size = game.size -2
      ctx.fillStyle = "lime" //  show snake
      this.tail.forEach((i, _)=>{
         ctx.fillRect(i.x * game.size, i.y * game.size, size, size)
         if (i.x === game.x && i.y === game.y) {
            if(this.tail.length > this.defaultLength){
               game.score = this.tail.length - this.defaultLength 
               game.stop()
            }
            this.length = this.defaultLength
         }
      })
      this.tail.push({ x: game.x, y: game.y })
      return this
   }

   removeOverTail() {
      while (this.tail.length > this.length) this.tail.shift()
      return this
   }

}
