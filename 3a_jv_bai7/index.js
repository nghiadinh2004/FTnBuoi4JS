const tiles = document.querySelectorAll('.game-tile');

// Mảng chứa các hình ảnh
const images = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let flippedTiles = [];
let lockBoard = false;

function flipTile() {
    if (lockBoard) return;
    if (this === flippedTiles[0]) return;

    this.classList.add('flipped');

    if (flippedTiles.length === 0) {
        flippedTiles[0] = this;
        return;
    }

    if (this.innerText === flippedTiles[0].innerText) {
        flippedTiles = [];
    } else {
        lockBoard = true;
        setTimeout(() => {
            this.classList.remove('flipped');
            flippedTiles[0].classList.remove('flipped');
            flippedTiles = [];
            lockBoard = false;
        }, 1000);
    }
}

function shuffleTiles() {
    tiles.forEach(tile => {
        const randomPos = Math.floor(Math.random() * images.length);
        tile.innerText = images[randomPos];
        images.splice(randomPos, 1);
    });
}

shuffleTiles();

tiles.forEach(tile => tile.addEventListener('click', flipTile));
