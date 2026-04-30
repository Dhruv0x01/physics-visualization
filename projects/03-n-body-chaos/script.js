// N-body-simulation

let bodies = [];
let dragStart = null;
let dragEnd = null;
let G = 2000; 
// if it feels weak => double G, 
// if it feels strong => half G

function setup(){
    createCanvas(windowWidth - 50, windowHeight - 50);

    // Clear button 
    let clearBtn = createButton('Clear');
    clearBtn.position(20, 20);
    clearBtn.mousePressed(() => {bodies = []; });
}
function draw(){
    background(0);

    // Physics 
    // 1st loop to compute force, force that body i feels due to body j
    for(let i = 0; i < bodies.length; i++){
        bodies[i].fx = 0;
        bodies[i].fy = 0;

        for(let j = 0; j < bodies.length; j++){
            if(i === j) continue; // skip self 

            let a = bodies[i];
            let b = bodies[j];

            let dx = b.x - a.x;
            let dy = b.y - a.y;
            let r = sqrt(dx*dx + dy*dy);

            let F = (G*a.mass*b.mass)/(r*r + 50); 
            a.fx += F * (dx/r);
            a.fy += F * (dy/r);
        }
    }

    // 2nd Loop - update motion + render 
    for(let i = 0; i<bodies.length; i++){
        let b = bodies[i];

        let ax = b.fx/b.mass;
        let ay = b.fy/b.mass;

        b.vx += ax;
        b.vy += ay;
        b.x += b.vx;
        b.y += b.vy;

        // ---Trail---
        b.trail.push({x: b.x, y:b.y});
        if(b.trail.length > 500){
            b.trail.shift();
        }
        for(let j = 0; j < b.trail.length; j++){
            let alpha = map(j, 0, b.trail.length, 0, 200);
            fill(b.color[0], b.color[1], b.color[2], alpha);
            noStroke();
            ellipse(b.trail[j].x, b.trail[j].y, 3, 3);
        }
        // --- end trail ---



        fill(b.color[0], b.color[1], b.color[2]);
        noStroke();
        ellipse(b.x, b.y, 30, 30);
    }

    // Drag indicator
    if(dragStart && dragEnd){
        stroke(255, 255, 255, 200);
        strokeWeight(2);
        line(dragStart.x, dragStart.y, dragEnd.x, dragEnd.y);

        // small circle at the start of drag 
        fill(255, 255, 255, 200);
        noStroke();
        ellipse(dragStart.x, dragStart.y, 10, 10);
    }

}
function windowResized(){
    resizeCanvas(windowWidth - 50, windowHeight-50);
}
function keyPressed(){
    if(key === 'c' || key ==='C'){
        bodies = [];
    }
}

// Remember the start of drag, also reset the end to the same point
// so the indicator doesn't flash from stale position 
function mousePressed(){
    dragStart = {x: mouseX, y: mouseY};
    dragEnd = {x: mouseX, y: mouseY};
}

// Remember where the cursor is now
// update the endpoint 
function mouseDragged(){
    dragEnd = {x: mouseX, y: mouseY};
}

// these x, y, vx, vy, mass, color, trail are part of object hence no need to declare it at top

// compute velocity from the drag and spawn the body 
// fire once the mouse is released 
function mouseReleased(){
    let vx = (dragEnd.x - dragStart.x)*0.1; // 30 pixel to 3 speed 
    let vy = (dragEnd.y - dragStart.y)*0.1; 


    bodies.push({
        x: dragStart.x,
        y: dragStart.y,
        vx: vx,
        vy: vy,
        fx: 0,
        fy: 0,
        mass: 1,
        color: [random(100, 255), random(100, 255), random(100, 255)],
        trail: []
    });

    dragStart = null;
    dragEnd = null;
}
