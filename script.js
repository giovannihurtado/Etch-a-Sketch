const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");
const clearBtn = document.querySelector("#btn-clear");

function createGrids(size) {
  container.innerHTML = "";
  const cellSize = `calc(100% / ${size})`;

  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.innerHTML = "";
    grid.classList.add("flex-item", "flex-draw");
    grid.style.backgroundColor = getRandomRGB();

    grid.style.width = cellSize;
    grid.style.height = cellSize;

    container.append(grid);

    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "#020035";
    });

    grid.addEventListener("mouseout", () => {
      grid.style.backgroundColor = "#00FFFF";
    });
  }
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(getRandomRGB());

resizeBtn.addEventListener("click", () => {
  const newSize = parseInt(prompt("Input new Grid size (1-100)"));
  if (newSize === null || isNaN(newSize) || newSize < 1 || newSize > 100) {
    gridSize = newSize;
    alert("Por favor introdusca un tamaño entre 1 y 100");
  } else {
    gridSize = newSize;
    createGrids(gridSize);
  }
});

clearBtn.addEventListener("click", () => {
  container.innerHTML = "";
});
