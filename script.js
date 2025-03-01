window.onload = function () {
    createGrid(10); // Default 10x10 grid on load
};

function createGrid(size) {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; // Clear previous grid
    canvas.style.gridTemplateColumns = `repeat(${size}, 30px)`; 
    canvas.style.gridTemplateRows = `repeat(${size}, 30px)`;

    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = "#fff"; // Default white
        pixel.addEventListener('click', function () {
            pixel.style.backgroundColor = pixel.style.backgroundColor === 'black' ? '#fff' : 'black';
            updateLanguage();
        });
        canvas.appendChild(pixel);
    }
}

document.getElementById('gridSizeSelector').addEventListener('change', function () {
    const gridSize = parseInt(this.value);
    createGrid(gridSize);
});

function updateLanguage() {
    const pixels = document.querySelectorAll('#canvas div');
    let languageCode = '';
    pixels.forEach((pixel, index) => {
        if (pixel.style.backgroundColor === 'black') {
            languageCode += `Pixel ${index + 1} is black\n`;
        }
    });
    document.getElementById('languageOutput').textContent = languageCode;
}
