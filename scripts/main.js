document.addEventListener("DOMContentLoaded", function() {
    // Geração da estrutura do labirinto
    generateMaze();

    // Adicionando um ouvinte de eventos ao elemento desafio, !!!por enquanto não ta funcionando!!!
    const challengeElement = document.querySelector('#challenge');
    challengeElement.addEventListener('click', function() {
        alert('Parabéns! Você completou o desafio!');
    });
});

function generateMaze() {
    const mazeElement = document.querySelector('#maze');

    // Gerando as coordenadas das paredes do labirinto
    const walls = generateOuterWalls().concat(generateInnerWalls());

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

    function generateOuterWalls() {
        // Função para gerar as coordenadas das paredes externas de limite do labirinto
        const outerWalls = [];
        for (let i = -13; i <= 13; i++) {
            outerWalls.push({ x: -12, z: i });
            outerWalls.push({ x: 12, z: i });
            outerWalls.push({ x: i, z: -13 });
            outerWalls.push({ x: i, z: 13 });
        }
        return outerWalls;
    }
    
    function generateInnerWalls() {
        // Função para gerar as coordenadas das paredes internas do labirinto
        const innerWalls = [
            { x: -10, z: 12 }, { x: -10, z: 11 }, { x: -10, z: 10 }, { x: -10, z: 9 }, { x: -9, z: 9 }, { x: -8, z: 9 }, { x: -8, z: 10 }, { x: -8, z: 11 }, 
            { x: -11, z: 7 }, { x: -10, z: 7 }, { x: -9, z: 7 }, { x: -8, z: 7 }, { x: -7, z: 7 }, { x: -6, z: 7 }, { x: -6, z: 8 }, { x: -6, z: 9 }, 
            { x: -6, z: 11 }, { x: -5, z: 11 }, { x: -4, z: 11 }, { x: -4, z: 10 }, { x: -3, z: 10 }, { x: -2, z: 10 }, { x: -1, z: 10 }, { x: -2, z: 12 }, 
            { x: 0, z: 10 }, { x: 0, z: 11 }, { x: 1, z: 11 }, { x: 2, z: 11 }, { x: 3, z: 11 }, { x: 4, z: 11 }, { x: 4, z: 10 }, { x: -4, z: 1 }, 
            { x: -3, z: 0 }, { x: -4, z: 2 }, { x: -4, z: 1 }, { x: -3, z: 0 }, { x: -4, z: 2 }, { x: -4, z: 1 }, { x: -3, z: 0 },
        ];
        return innerWalls;
    }
}
