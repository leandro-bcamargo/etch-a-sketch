const outerContainer = document.querySelector('#outerContainer');

function generateGrid() {
  for (let i = 0; i < 4; i++) {
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('innerContainer'); 
    for (let j = 0; j < 4; j++) {
      const gridUnit = document.createElement('div');
      gridUnit.classList.add('gridUnit');
      gridUnit.addEventListener('mouseenter', (e) => colorGridUnit(e));
      innerContainer.appendChild(gridUnit)
    }
    outerContainer.appendChild(innerContainer);
  }
}

function colorGridUnit(e) {
  const gridUnit = e.target;
  gridUnit.classList.add('colorGridUnit');
}

generateGrid();