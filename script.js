const player = document.getElementById('player');
const archeryGame = document.getElementById('archery-game');
const target = document.getElementById('target');
const startArcheryButton = document.getElementById('start-archery');
//blah blah
let playerX = 0;
let playerY = 0;

// Player Movement
document.addEventListener('keydown', (event) => {
    const speed = 10;
    switch (event.key) {
        case 'ArrowUp':
            playerY -= speed;
            break;
        case 'ArrowDown':
            playerY += speed;
            break;
        case 'ArrowLeft':
            playerX -= speed;
            break;
        case 'ArrowRight':
            playerX += speed;
            break;
    }
    player.style.top = `${playerY}px`;
    player.style.left = `${playerX}px`;
});

// Archery Mini-Game
startArcheryButton.addEventListener('click', () => {
    archeryGame.style.display = 'flex';
    placeTarget();
});

function placeTarget() {
    const x = Math.random() * (window.innerWidth - 30);
    const y = Math.random() * (window.innerHeight - 30);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

target.addEventListener('click', () => {
    alert('You hit the target!');
    placeTarget();
});
