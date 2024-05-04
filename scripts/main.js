document.addEventListener("DOMContentLoaded", function() {
    // Geração da estrutura do labirinto
    generateMaze();

    // Adicionando um ouvinte de eventos ao elemento desafio
    const challengeElement = document.querySelector('#challenge');
    challengeElement.addEventListener('click', function() {
        alert('Congratulations! You completed the challenge!');
    });
});

function generateMaze() {
    const mazeElement = document.querySelector('#maze');
    // Coordenadas detalhadas para as paredes do labirinto
    const walls = [
        // Contorno externo
        { x: -5, z: -5 }, { x: -5, z: -4 }, { x: -5, z: -3 }, { x: -5, z: -2 }, { x: -5, z: -1 }, { x: -5, z: 0 }, { x: -5, z: 1 }, { x: -5, z: 2 }, { x: -5, z: 3 }, { x: -5, z: 4 },
        { x: 5, z: -5 }, { x: 5, z: -4 }, { x: 5, z: -3 }, { x: 5, z: -2 }, { x: 5, z: -1 }, { x: 5, z: 0 }, { x: 5, z: 1 }, { x: 5, z: 2 }, { x: 5, z: 3 }, { x: 5, z: 4 },
        { x: -4, z: 5 }, { x: -3, z: 5 }, { x: -2, z: 5 }, { x: -1, z: 5 }, { x: 0, z: 5 }, { x: 1, z: 5 }, { x: 2, z: 5 }, { x: 3, z: 5 }, { x: 4, z: 5 },
        { x: -4, z: -5 }, { x: -3, z: -5 }, { x: -2, z: -5 }, { x: -1, z: -5 }, { x: 0, z: -5 }, { x: 1, z: -5 }, { x: 2, z: -5 }, { x: 3, z: -5 }, { x: 4, z: -5 },
        // Paredes internas mais densas
        { x: -4, z: -3 }, { x: -3, z: -3 }, { x: -1, z: -3 }, { x: 0, z: -3 }, { x: 1, z: -3 },
        { x: 3, z: -1 }, { x: 4, z: -1 }, { x: 0, z: 0 }, { x: -3, z: 1 }, { x: -4, z: 1 },
        { x: 2, z: 1 }, { x: 3, z: 2 }, { x: 4, z: 3 }, { x: 3, z: 4 },
        { x: -3, z: 3 }, { x: -2, z: 2 }, { x: -2, z: 3 }, { x: -2, z: 1 }, { x: -3, z: 0 }, { x: -1, z: 0 },
        { x: 1, z: -2 }, { x: 2, z: -2 }, { x: 1, z: -4 }, { x: 2, z: -4 }, { x: -4, z: 2 }, { x: -4, z: 1 }
    ];

    // Gerando as paredes do labirinto
    walls.forEach(function(wallCoords) {
        const wall = document.createElement('a-box');
        wall.setAttribute('position', `${wallCoords.x} 1 ${wallCoords.z}`);
        wall.setAttribute('width', '1');
        wall.setAttribute('height', '2');
        wall.setAttribute('depth', '1');
        wall.setAttribute('color', '#555');
        wall.setAttribute('static-body', '');
        mazeElement.appendChild(wall);
    });
}
