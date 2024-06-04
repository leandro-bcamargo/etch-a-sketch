const container = document.querySelector('#container');

function generateGrid() {
  for (let i = 0; i < 4; i++) {
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('innerContainer'); 
    for (let j = 0; j < 4; j++) {
      const div = document.createElement('div');
      div.classList.add('gridUnit');
      innerContainer.appendChild(div)
    }
    container.appendChild(innerContainer);
  }
}

generateGrid();