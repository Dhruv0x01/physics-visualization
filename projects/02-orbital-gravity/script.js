let sun; 
let planets = []; 
let G = 1;

// for drag visualization
let dragStart = null;
let dragEnd = null; 


function setup(){
    createCanvas(windowWidth-100, windowHeight-100);

    let clearBtn = createButton('Clear');
    clearBtn.position(20, 20);
    clearBtn.mousePressed(() => {planets = []; });

    sun = {
        x: width/2,
        y: height/2, 
        mass: 10000
    };

}
function draw(){
    background(0);
    

    // Draw Sun
    fill(255, 100, 0);
    noStroke();
    ellipse(sun.x, sun.y, 150, 150);

    // ====Physics for all planets====

    for (let i=0; i<planets.length; i++){
        let p = planets[i];

        let dx = sun.x - p.x;
        let dy = sun.y - p.y;
        let r = sqrt(dx*dx + dy*dy);
        let F = (G*sun.mass*p.mass) / (r*r);

        let fx = F*(dx/r);
        let fy = F*(dy/r);

        let ax = fx/p.mass;
        let ay = fy/p.mass;

        p.vx += ax;
        p.vy += ay;
        p.x += p.vx;
        p.y += p.vy;

        // Trail
        p.trail.push({x: p.x, y: p.y});
        if (p.trail.length > 200){
            p.trail.shift();
        }
        // draw trail
        for (let j = 0; j < p.trail.length; j++){
            let alpha = map(j, 0, p.trail.length, 0, 200);
            fill(p.color[0], p.color[1], p.color[2], alpha);
            noStroke();
            ellipse(p.trail[j].x, p.trail[j].y, 3, 3);
        }

        // Draw the planet 
        fill(p.color[0], p.color[1], p.color[2]);
        noStroke();
        ellipse(p.x, p.y, 30, 30);
    }
    // show drag indicator while user is draggin
    if (dragStart && dragEnd){
        // Radial line - from spawn point to sun (reference)
        stroke(255, 100, 0, 100);
        strokeWeight(1);
        line(dragStart.x, dragStart.y, sun.x, sun.y);

        // Velocity line - drag direction (launch vector)
        stroke(255, 255, 255, 200);
        strokeWeight(2);
        line(dragStart.x, dragStart.y, dragEnd.x, dragEnd.y);

        // spawn point direction
        fill(255, 255, 255, 100);
        noStroke();
        ellipse(dragStart.x, dragStart.y, 10, 10);

        // Angle Readout
        // vector from spawn to sun
        let rx = sun.x - dragStart.x;
        let ry = sun.y - dragStart.y;

        // vector from spawn to cursor (drag direction)
        let dx = dragEnd.x - dragStart.x;
        let dy = dragEnd.y - dragStart.y;


        // angle between two vectors using dot product:
        // cos(θ) = (a·b) / (|a| |b|)
        let dot = rx*dx + ry*dy;
        let magR = sqrt(rx*rx + ry*ry);
        let magD = sqrt(dx*dx + dy*dy);
    
        if (magR > 0 && magD > 0) {
            let cosTheta = dot / (magR * magD);
            let angleDeg = degrees(acos(cosTheta));
        
            // color: green when close to 90°, red otherwise
            let off = abs(angleDeg - 90);
            if (off < 5) {
                fill(0, 255, 0);
            } else {
                fill(255, 200, 100);
            }
            noStroke();
            textSize(16);
            text(floor(angleDeg) + '°', dragEnd.x + 15, dragEnd.y);
    }
}
    // Instruction overlay
    fill(255, 255, 255, 150);
    noStroke();
    textSize(13);
    text('Click and drag to launch a planet . Press C or click clear to reset', 20, 60);
}
function mousePressed(){
    dragStart = {x: mouseX, y: mouseY};
    dragEnd = {x: mouseX, y: mouseY};
}
function mouseDragged(){
    dragEnd = {x: mouseX, y: mouseY};
}
function mouseReleased(){
    // velocity is proportional to drag distance
    // scale factor of 0.1 means a 30px drag -> speed of 3
    let vx = (dragEnd.x - dragStart.x)*0.1;
    let vy = (dragEnd.y - dragStart.y)*0.1;
    planets.push({
        x: dragStart.x,
        y: dragStart.y,
        vx: vx, 
        vy: vy,
        mass: 1,
        color: [random(100, 255), random(100, 255), random(100, 255)],
        trail: []
    });

    dragStart = null;
    dragEnd = null; 
}
function keyPressed(){
    if(key === 'c' || key === 'C'){
        planets = [];
    }
}
function windowResized(){
    resizeCanvas(windowWidth - 100, windowHeight - 100);
    sun.x = width / 2; 
    sun.y = height / 2;
}