const rows = 50, columns = 50, mines = 240;
const board = [];
const boardObject = document.getElementById("board");
let scale = 1;
let mouseX = 0, mouseY = 0;
let holdX = 0, holdY = 0;
let initHoldX = 0, initHoldY = 0;
let boardX = 0, boardY = 0;
let isDragging = false;
let populated = false;

window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    if (!isDragging) return;
  
    boardX -= mouseX - holdX;
    boardY -= mouseY - holdY;
    holdX = mouseX;
    holdY = mouseY;
    boardObject.style.transform = `translate(${-boardX}px, ${-boardY}px) scale(${scale})`;
});

document.addEventListener("mousedown", () => {
    isDragging = true;
    
    holdX = mouseX;
    initHoldX = mouseX;
    holdY = mouseY;
    initHoldY = mouseY;
});
document.addEventListener("mouseup", () => {
    isDragging = false;
});

window.addEventListener("wheel", (event) => {
    const delta = event.deltaY < 0 ? 1.1 : 1 / 1.1;

    const originX = window.innerWidth / 4;
    const originY = 0;

    const offsetX = mouseX - originX;
    const offsetY = mouseY - originY;

    boardX = originX + (boardX - originX) * delta + offsetX * (delta - 1);
    boardY = originY + (boardY - originY) * delta + offsetY * (delta - 1);

    scale *= delta;

    boardObject.style.transform = `translate(${-boardX}px, ${-boardY}px) scale(${scale})`;
});

class Cell {
    Value = 0;
    Position = { x: 0, y: 0 };
    Object = null;
    Visible = false;
    constructor(x, y) {
        this.Position = { x: x, y: y };

        this.Object = document.createElement("div");
        this.Object.classList.add("cell");
        this.Object.style.top = `calc(50% - ${(this.Position.x + 1 - rows / 2) * 64}px)`;
        this.Object.style.left = `calc(50% - ${(this.Position.y + 1 - columns / 2) * 64}px)`;

        this.Object.addEventListener("mouseup", () => {
            if (mouseX - initHoldX < 2 && mouseY - initHoldY < 2) {
                if (!populated) {
                    populated = true;
                    for (let i = -2; i <= 2; i++) {
                        for (let j = -2; j <= 2; j++) {
                            const nx = this.Position.x + i;
                            const ny = this.Position.y + j;
                            if (nx >= 0 && ny >= 0 && nx < rows && ny < columns) {
                                board[nx][ny].Value = 0;
                            }
                        }
                    }
                    Populate();
                }
                if (!this.Visible)
                    Play(this.Position.x, this.Position.y);
            }
        });

        boardObject.appendChild(this.Object);
    }

    GoVisible() {
        this.Visible = true;

        if (this.Value == -1) {
            this.Object.innerHTML = "<img src=\"/mine.png\">";
        } else {
            this.Object.innerHTML = this.Value;
        }
        if (this.Value == 0) this.Object.innerHTML = "";
        this.Object.style.opacity = 1.0;
    }

    Ready() {
        if (this.Value != -1) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let samplePos = {
                        x: i - 1 + this.Position.x,
                        y: j - 1 + this.Position.y
                    };
                    if ((samplePos.x != this.Position.x || samplePos.y != this.Position.y) && samplePos.x >= 0 && samplePos.y >= 0 && samplePos.x < columns && samplePos.y < rows) {
                        let sample = board[samplePos.x][samplePos.y].Value;
                        if (sample == -1) {
                            this.Value += 1;
                        }
                    }
                }
            }
        }
    }
}

for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
        board[i][j] = new Cell(i, j);
    }
}

for (let i = 0; i < mines; i++) {
    let rand = { 
        x: Math.floor(Math.random() * rows), 
        y: Math.floor(Math.random() * columns) 
    };
    while (board[rand.x][rand.y].Value !== 0) {
        rand = { 
            x: Math.floor(Math.random() * rows), 
            y: Math.floor(Math.random() * columns) 
        };
    }
    board[rand.x][rand.y].Value = -1;
}
function Populate() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j].Ready();
        }
    }
}
function Play(x, y) {
    if (board[x][y].Value > 0 || board[x][y].Value == -1) {
        board[x][y].GoVisible();
    } else {
        FloodFill(x,y);
    }
}

function FloodFill(startX, startY) {
    const rows = board.length;
    const cols = board[0].length;

    const queue = [[startX, startY]];
    const visited = new Set();
    visited.add(`${startX},${startY}`);

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        board[x][y].GoVisible();

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            const key = `${nx},${ny}`;

            try {
                if (
                    nx >= 0 && nx < rows &&
                    ny >= 0 && ny < cols &&
                    !visited.has(key) &&
                    board[nx][ny].Value === 0
                ) {
                    visited.add(key);
                    queue.push([nx, ny]);
                } else if (board[nx][ny].Value > 0) {
                    board[nx][ny].GoVisible();
                }
            } catch { }
        }
    }
}