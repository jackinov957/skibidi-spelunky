// Setup canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Tile size
const TILE_SIZE = 40;

// Player object
const player = {
    x: 1,
    y: 1,
    width: TILE_SIZE,
    height: TILE_SIZE,
    color: 'yellow',
    speed: 2 // Number of tiles per movement
};

// Cave dimensions
const COLS = 20;
const ROWS = 15;

// Generate the cave: 0 = empty space, 1 = wall
let cave = [];
for (let row = 0; row < ROWS; row++) {
    cave[row] = [];
    for (let col = 0; col < COLS; col++) {
        cave[row][col] = (Math.random() > 0.2) ? 0 : 1; // 80% empty, 20% walls
    }
}

// Ensure player's starting position is clear
cave[player.y][player.x] = 0;

// Function to draw the cave
function drawCave() {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            ctx.fillStyle = cave[row][col] === 1 ? '#555' : '#222';
            ctx.fillRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }
}

// Function to draw the player
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x * TILE_SIZE, player.y * TILE_SIZE, player.width, player.height);
}

// Handle player movement
function handleMovement(e) {
    let newX = player.x;
    let newY = player.y;

    if (e.key === 'ArrowUp' || e.key === 'w') {
        newY -= player.speed;
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        newY += player.speed;
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        newX -= player.speed;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
        newX += player.speed;
    }

    // Ensure the player doesn't walk into walls
    if (newX >= 0 && newX < COLS && newY >= 0 && newY < ROWS && cave[newY][newX] === 0) {
        player.x = newX;
        player.y = newY;
    }
}

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    drawCave();
    drawPlayer();
    requestAnimationFrame(gameLoop);
}

// Listen for keypresses
window.addEventListener('keydown', handleMovement);

// Start the game loop
gameLoop();
// Setup canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Tile size
const TILE_SIZE = 40;

// Player object
const player = {
    x: 1,
    y: 1,
    width: TILE_SIZE,
    height: TILE_SIZE,
    color: 'yellow',
    speed: 2 // Number of tiles per movement
};

// Cave dimensions
const COLS = 20;
const ROWS = 15;

// Generate the cave: 0 = empty space, 1 = wall
let cave = [];
for (let row = 0; row < ROWS; row++) {
    cave[row] = [];
    for (let col = 0; col < COLS; col++) {
        cave[row][col] = (Math.random() > 0.2) ? 0 : 1; // 80% empty, 20% walls
    }
}

// Ensure player's starting position is clear
cave[player.y][player.x] = 0;

// Function to draw the cave
function drawCave() {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            ctx.fillStyle = cave[row][col] === 1 ? '#555' : '#222';
            ctx.fillRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }
}

// Function to draw the player
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x * TILE_SIZE, player.y * TILE_SIZE, player.width, player.height);
}

// Handle player movement
function handleMovement(e) {
    let newX = player.x;
    let newY = player.y;

    if (e.key === 'ArrowUp' || e.key === 'w') {
        newY -= player.speed;
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        newY += player.speed;
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        newX -= player.speed;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
        newX += player.speed;
    }

    // Ensure the player doesn't walk into walls
    if (newX >= 0 && newX < COLS && newY >= 0 && newY < ROWS && cave[newY][newX] === 0) {
        player.x = newX;
        player.y = newY;
    }
}

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    drawCave();
    drawPlayer();
    requestAnimationFrame(gameLoop);
}

// Listen for keypresses
window.addEventListener('keydown', handleMovement);

// Start the game loop
gameLoop();
