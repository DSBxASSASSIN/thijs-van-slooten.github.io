let ctx = document.querySelector('canvas').getContext('2d');
let CANVAS_WIDTH = 720;
let CANVAS_HEIGHT = 528;

ctx.canvas.width = CANVAS_WIDTH;
ctx.canvas.height = CANVAS_HEIGHT;

let crane = new Entity(100);
// first block vertices 
crane.addDot(100, CANVAS_HEIGHT);
crane.addDot(200, CANVAS_HEIGHT);
crane.addDot(200, CANVAS_HEIGHT - 100);
crane.addDot(100, CANVAS_HEIGHT - 100);

// second block vectices 
crane.addDot(100, CANVAS_HEIGHT - 200);
crane.addDot(200, CANVAS_HEIGHT - 200);

// third block vertices
crane.addDot(100, CANVAS_HEIGHT - 300);
crane.addDot(200, CANVAS_HEIGHT - 300);

// triangle vertices
crane.addDot(150, CANVAS_HEIGHT - 400);
crane.addDot(250, CANVAS_HEIGHT - 400);
crane.addDot(300, CANVAS_HEIGHT - 300);

// rope end vertice
crane.addDot(400, CANVAS_HEIGHT - 300);

// stabilisation vertice
crane.addDot(300, CANVAS_HEIGHT);

// sticks between first block vertices 
crane.addStick(0, 1);
crane.addStick(1, 2);
crane.addStick(2, 3);
crane.addStick(3, 0);

// middle sticks in first block
crane.addStick(1, 3);
crane.addStick(0, 2);


// sticks betweeen second block vertices and first block
crane.addStick(3, 4);
crane.addStick(4, 5);
crane.addStick(5, 2);

// middle sticks in second block
crane.addStick(4, 2);
crane.addStick(5, 3);

// sticks betweeen third block vertices and second block
crane.addStick(4, 6);
crane.addStick(6, 7);
crane.addStick(7, 5);

// middle sticks in third block
crane.addStick(7, 4);
crane.addStick(6, 5);

// sticks for the top triangle 
crane.addStick(6, 8);
crane.addStick(8, 7);

// sticks for the top triangle 
crane.addStick(8, 9);
crane.addStick(9, 7);

// sticks for the top triangle + rope
crane.addStick(9, 10);
crane.addStick(10, 7);
crane.addStick(10, 11);

// sticks for the stabilisation thingy
crane.addStick(1, 12);
crane.addStick(2, 12);


function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  crane.update()

  requestAnimationFrame(animate);
}

animate();