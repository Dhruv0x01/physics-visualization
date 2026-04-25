// In p5.js draw() runs 60 times per second, so if you change variable each frame, things move
// Concept 3: Motion



// Task: 
// 1. Make a ball move left to right
// 2. When it goes off screen, reset it back 
/*
let x = 0;
function setup(){
    createCanvas(1700, 800);
}
function draw(){
    background(0);

    fill(255, 100, 0);
    noStroke();
    ellipse(x, 100, 100, 100);
    if(x>width){x = 0;} // width can be directly used 
    x += 10;

}
*/

// 3. Make it move diagonal
// 4. When it goes off screen on any edge, reset ut to top left corner
/*
let x = 0;
let y = 0;
function setup(){
    createCanvas(1700, 800);
}
function draw(){
    background(0);

    fill(255, 100, 0);
    noStroke();
    ellipse(x, y, 100, 100);
    x += 4.5;
    y += 2;
    if(x>width | y > height){x=0; y=0;}
}
*/

// Task: Bouncing ball
// 1. One ball 
/*
let x = 200;
let y = 200;
let vx = 4;
let vy = 7;
function setup(){
    createCanvas(1700, 800);
}
function draw(){
    background(0);

    // Update position
    x += vx;
    y += vy;

    // Acceleration
    vx += 0.05;
    vy += 0.1;

    fill(255, 100, 0);
    noStroke();
    ellipse(x, y, 100, 100);

    if(y>=height-50){vy*=-1;}
    if(y<=50){vy*=-1;}
    if(x>=width-50){vx*=-1;}
    if(x<=50){vx*=-1;}
}


// 2. Multiple balls (using multiple variables)

/*
let x1 = 400;
let y1 = 400;
let vx1 = 4;
let vy1 = 6;
let x2 = 800;
let y2 = 300;
let vx2 = 4;
let vy2 = 6;

function setup(){
    createCanvas(1600, 900);
}
function draw(){
    background(0);

    fill(255, 100, 0);
    noStroke();
    ellipse(x1, y1, 100, 100);

    fill(100, 255, 0);
    ellipse(x2, y2, 100, 100);

    x1 = x1 + vx1;
    y1 = y1 + vy1;

    x2 = x2 + vx2;
    y2 = y2 + vy2;

    if(x1 >= width - 50 || x1 <= 50){vx1*=-1;}
    if(y1 >= height - 50 || y1 <= 50){vy1*=-1;}
    if(x2 >= width - 50 || x2 <= 50){vx2*=-1;}
    if(y2 >= height - 50 || y2 <= 50){vy2*=-1;}
}
*/

// 3. Multiple Balls(with objects and arrays)

/*
// Create 1 ball motion using object
let ball = {
    x: 400, 
    y: 300,
    vx: 10,
    vy: 10
};
function setup(){
    createCanvas(1600, 1300);
}
function draw(){
    background(0);

    fill(255, 100, 0);
    noStroke();
    ellipse(ball.x, ball.y, 100, 100);

    ball.x += ball.vx;
    ball.y += ball.vy;

    if(ball.x >= width - 50|| ball.x <= 50){ball.vx*=-1}
    if(ball.y >= height - 50|| ball.y <= 50){ball.vy*=-1}
}
*/


// Creating Multiple Balls Using Object and array
// We need to loop through each of them 
let balls = [
    {x: 400, y: 300,vx: 4,vy: 6, r:255, g:100, b:0},
    {x: 600, y: 300, vx:2, vy: 10, r:100, g:255, b:0},
    {x: 800, y: 300, vx:-4, vy: 10, r:0, g:100, b:255},
    {x: 1000, y: 300, vx:10, vy: 7, r:255, g:0, b:0}
];
function setup(){
    createCanvas(1600, 1300);
}
function draw(){
    background(0);
    
    noStroke();

    for(let i=0; i < balls.length; i++){
        let b = balls[i];
        fill(b.r, b.g, b.b);
        b.x += b.vx;
        b.y += b.vy;
        ellipse(b.x, b.y, 100, 100);
        if(b.x >= width - 50|| b.x <= 50){b.vx*=-1}
        if(b.y >= height - 50|| b.y <= 50){b.vy*=-1}
    }
    
}
