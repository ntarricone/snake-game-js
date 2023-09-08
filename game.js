import { SNAKE_SPEED, draw as drawSnake, update as updateSnake } from "./snake.js"

let lastRenderTime = 0
const gameBoard = document.getElementById("game-board")
function main(currentTime) { //game loop -> looping forever that goes frame by frame in the browser
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 // to convert to seconds
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update() // updates logic
    draw() //renders updated logic
}

function update() {
    updateSnake()
}

function draw() {
    drawSnake(gameBoard)
}

window.requestAnimationFrame(main)