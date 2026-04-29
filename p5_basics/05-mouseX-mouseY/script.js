// mouseX and mouseY are built-in p5 variables that always hold the current cursor position,
// in pixels, relative to the canvas. 

function setup(){
    createCanvas(windowWidth - 50, windowHeight-50);
}
function draw(){
    background(0);

    fill(255, 100, 0);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
    
    fill(255, 100, 0);
    stroke(100);
    line(pmouseX, pmouseY, mouseX, mouseY);
}

