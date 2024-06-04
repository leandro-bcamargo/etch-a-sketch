const outerContainer = document.querySelector('#outerContainer');


function generateGrid(gridSize) {
  const outerContainerWidth = outerContainer.clientWidth;
  const outerContainerHeight = outerContainer.clientHeight;
  for (let i = 0; i < gridSize; i++) {
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('innerContainer'); 
    for (let j = 0; j < gridSize; j++) {
      const gridUnit = document.createElement('div');
      gridUnit.style.width = `${outerContainerWidth/gridSize}px`;
      gridUnit.style.height = `${outerContainerHeight/gridSize}px`;
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

function setGridSize() {
  outerContainer.innerHTML = '';
  const gridSize = prompt('What grid size would you like to set?');
  if (gridSize > 100) throw new Error('Grid size is too large.')
  generateGrid(gridSize);
}

const setGridSizeBtn = document.querySelector('#setGridSizeBtn');

setGridSizeBtn.addEventListener('click', () => {
  try {
    setGridSize();
  } catch (error) {
    console.error(error.message);
  }
})

window.onload = generateGrid(4);