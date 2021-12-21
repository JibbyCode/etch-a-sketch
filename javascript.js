const grid = document.getElementById('grid-container');
let cellsPerSide = 16;
let cell= [];



function removeCells(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}



function newGrid(cellsPerSide){
    removeCells();
    grid.style.gridTemplateColumns = (`repeat(${cellsPerSide}, 1fr)`);
    grid.style.gridTemplateRows = (`repeat(${cellsPerSide}, 1fr)`);
    let cells = cellsPerSide * cellsPerSide;
    for(let i = 0; i < cells; i++){
        cell[i] = document.createElement('div');
        cell[i].classList.add('cell');
        cell[i].addEventListener('mouseover', sketch);
        grid.appendChild(cell[i]);
    }
}

function sketch(){
    let box = document.querySelectorAll('.cell');
    for(let i=0; box.length; i++){
        box[i].style.backgroundColor = "black";
    }
}

newGrid(cellsPerSide);