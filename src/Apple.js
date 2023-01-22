export default class Apple {
   x = 20; y = 10
   constructor(snake) {
      this.snake = snake
   }

   update(game, ctx){
      const size = game.size - 2
      ctx.fillStyle = "red"
      ctx.fillRect(this.x * game.size, this.y * game.size, size, size)
      return this
   }

   eat(game){
      if(game.x === this.x && game.y === this.y){
         this.snake.length++
         this.x = Math.floor(Math.random() * game.size)
         this.y = Math.floor(Math.random() * game.size)
      }
   }
}
