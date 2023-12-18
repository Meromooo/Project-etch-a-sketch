const container = document.querySelector('#container');


function createGrids(size){
    for (let row = 0; row < size; row++) {
        for (let column = 0; column < size; column++) {
            const grids = document.createElement('div');
            grids.classList.add('grid-items');
        
            container.appendChild(grids);
        
            grids.addEventListener('mouseenter', () => {
                grids.style.backgroundColor = 'yellow';
            });
        }
        }
}

createGrids(16);

function createNewGrids() {
    container.innerHTML = '';
    let userInput = prompt("Enter the number of squares per side (maximum 100)");

    userInput = parseInt(userInput);
    if(isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    createGrids(userInput);
}







