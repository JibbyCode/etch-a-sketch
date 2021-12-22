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
    for(let i=0; i <box.length; i++){
        box[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = "black";
        });
    }
}





document.getElementById('clear').addEventListener('click', function(){
    let newSize = prompt("What size would you like to see? (MAX: 100)");
    if(parseInt(newSize) >100 && parseInt(newSize) < 1){
        alert("Not a valid number, Please clear again");
    }
    else if(parseInt(newSize) < 100 && parseInt(newSize) > 0){
        cellsPerSide = newSize;
        newGrid(cellsPerSide);
    }
    else{
        alert("Not a valid number, Please clear again");
    }
});

newGrid(cellsPerSide);