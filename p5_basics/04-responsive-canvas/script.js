// createCanvas(windowWidth, windowHeight) — runs once in setup(). 
// Reads the window size at that moment of launch and creates a canvas to match. 
// This is the initial fit.

// windowResized() — runs every time the window changes size after that. 
// Without it, the canvas is frozen at whatever size createCanvas made it. 
// With it (and resizeCanvas inside), the canvas adapts if we change size of window mid program.

function setup(){
    createCanvas(windowWidth - 50, windowHeight - 50);
}
function draw(){
    background(0);

    fill(255, 100, 0);
    noStroke();
    ellipse(width/2, height/2, 50, 50);
}
function windowResized(){
    resizeCanvas(windowWidth - 50, windowHeight - 50);
    //  anything positioned relative to canvas size needs to be recomputed on resize. 
    //  Eg: Sun in project 2
}