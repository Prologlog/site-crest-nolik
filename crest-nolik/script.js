let cells = document.querySelectorAll('#field td');
let itog = document.querySelector('#itog')
let x = document.querySelector('#crest')
let o = document.querySelector('#nolik')
let playerx = 0
let playero = 0
start(cells);

function start(cells) {
    let i = 0;
 for (let cell of cells) {
  cell.addEventListener('click', function step() {
    this.textContent = ['X', 'O'][i % 2];
    this.removeEventListener('click', step);
     let winner = win(cells);
     if (winner === "X") {
      playerx++
        x.textContent = playerx
        itog.textContent = 'Крестики выиграли!'
       clear(cells);

     } 
     else if (winner === 'O') {
      playero++
        o.textContent = playero
        itog.textContent = 'Нолики выиграли!';
        clear(cells);
    }
     else if (!gamestatus(cells)) {
        itog.textContent = 'Ничья'
       clear(cells);
     } 
    i++
  });
 }
}

function gamestatus(cells) {
  for (let cell of cells) {
    if (cell.textContent === '') {
      return true;
    }
  }
  return false;
}

function win(cells) {
  let lines = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6] 
  ];

  for (let line of lines) {
    let [a,b,c] = line;
    if (cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
      return cells[a].textContent;
    }
  }
}



function clear(cells) {
    for (let cell of cells) {
        cell.textContent = '';
         }
    start(cells)
}

    
