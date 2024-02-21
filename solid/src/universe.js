import { Cell, Universe } from "cgol-wasm";
import { memory } from "cgol-wasm/cgol_wasm_bg.wasm";

const canvas = document.getElementById("game-of-life-canvas");
const style = getComputedStyle(canvas)
const CELL_SIZE = 12; // px
const GRID_COLOR = style.borderColor ?? "#EEEEEE";
const DEAD_COLOR = style.backgroundColor ?? '#FFFFFF';
const ALIVE_COLOR = style.color ?? "#C3F4A1";
const getDims = () => [window.innerWidth / (CELL_SIZE + 1), window.innerHeight / (CELL_SIZE + 1)]

let universe = Universe.new_with_dims(...getDims());
// let (width, height) =
let [width, height] = [universe.width(), universe.height()]

// Give the canvas room for all of our cells and a 1px border
// around each of them.
// const canvas = document.getElementById("game-of-life-canvas");
canvas.height = (CELL_SIZE + 1) * height + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;

const ctx = canvas.getContext('2d');

addEventListener("resize", (event) => {
    universe = Universe.new_with_dims(...getDims())
    width = universe.width();
    height = universe.height();
    canvas.height = (CELL_SIZE + 1) * height + 1;
    canvas.width = (CELL_SIZE + 1) * width + 1;
});

const animationSpeed = document.getElementById("animation-speed")

const drawGrid = () => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;

    // Vertical lines.
    for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
    }

    // Horizontal lines.
    for (let j = 0; j <= height; j++) {
        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
    }

    ctx.stroke();
};

const getIndex = (row, column) => {
    return row * width + column;
};

const drawCells = () => {
    const cellsPtr = universe.cells();
    const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

    ctx.beginPath();

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            const idx = getIndex(row, col);

            ctx.fillStyle = cells[idx] === Cell.Dead
                ? DEAD_COLOR
                : ALIVE_COLOR;

            ctx.globalAlpha = cells[idx] === Cell.Dead ? 0.1 : 0.9;

            ctx.fillRect(
                col * (CELL_SIZE + 1) + 1,
                row * (CELL_SIZE + 1) + 1,
                CELL_SIZE,
                CELL_SIZE
            );
        }
    }

    ctx.stroke();
};

const renderLoop = () => {
    universe.tick();

    drawGrid();
    drawCells();

    setTimeout(() => {
        requestAnimationFrame(renderLoop);
    }, 1000 / 30)

};

const start = () => {
    drawGrid();
    drawCells();
    requestAnimationFrame(renderLoop);
}

export {
    start
}
