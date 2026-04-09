function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('block1')
}

function draw() {
  let hourhand = map(hour() % 12, 0, 12, 0, 360);
  let minutehand = map(minute(), 0, 60, 0, 360);
  let secondhand = map(second(), 0, 60, 0, 360);
  angleMode(DEGREES);
  background(196, 114, 74);
  translate(width / 2, height / 2);

  strokeWeight(3);
  stroke("black");
  fill("grey");
  circle(0, 0, 260);
  fill("white");
  circle(0, 0, 250);
  //
  //hourhand
  push();
  rotate(hourhand);
  strokeWeight(7);
  line(0, 0, 0, -70);
  pop();
  //
  //minutehand
  push();
  strokeWeight(5);
  rotate(minutehand);
  line(0, 0, 0, -92);
  pop();
  //
  //secondhand
  push();
  stroke("red");
  rotate(secondhand);
  line(0, 0, 0, -100);
  pop();
  //

  //
  for (let ticks = 0; ticks < 61; ticks += 1) {
    strokeWeight(1);
    rotate(6);
    point(0, -112);
  }
  resetMatrix();
  translate(width / 2, height / 2);
  for (let spot = 0, num = 12; spot < 13, num > 0; spot += 1, num -= 1) {
    push();

    translate(0, -112);

    rotate(30 * spot);
    strokeWeight(1);
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(17);
    text(num, 0, 0);
    pop();
    rotate(-30);
  }
  resetMatrix();
}
