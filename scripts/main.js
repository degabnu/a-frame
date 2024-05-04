document.addEventListener("DOMContentLoaded", function() {
    // Generate maze structure
    generateMaze();

    // Add event listener to the challenge element
    const challengeElement = document.querySelector('#challenge');
    challengeElement.addEventListener('click', function() {
        alert('Congratulations! You completed the challenge!');
    });
});

function generateMaze() {
    const mazeElement = document.querySelector('#maze');
    const mazeSize = 5; // Adjust maze size as needed

    // Generate maze walls and paths
    for (let i = -mazeSize; i <= mazeSize; i++) {
        for (let j = -mazeSize; j <= mazeSize; j++) {
            if (Math.abs(i) === mazeSize || Math.abs(j) === mazeSize || (i !== 0 && j % 2 === 0 && Math.random() > 0.7) || (j !== 0 && i % 2 === 0 && Math.random() > 0.7)) {
                const wall = document.createElement('a-box');
                wall.setAttribute('position', `${i} 0.5 ${j}`);
                wall.setAttribute('width', '1');
                wall.setAttribute('height', '2');
                wall.setAttribute('depth', '1');
                wall.setAttribute('color', '#555');
                wall.setAttribute('static-body', 'shape: box'); // Add static-body component to walls for collision
                mazeElement.appendChild(wall);
            }
        }
    }
}
