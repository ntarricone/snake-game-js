export const SNAKE_SPEED = 1
const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 },
]

export function update() {
    for (let i = snakeBody.length - 2; i >= 0; i--) { // TODO - Why -2?
        console.log(i + 1)
        console.log(snakeBody[i])
        snakeBody[i + 1] = { ...snakeBody[i] }

    }
    console.log("update snake")
}
export function draw(gameBoard) {
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add("snake")
        gameBoard.appendChild(snakeElement)
    })
}