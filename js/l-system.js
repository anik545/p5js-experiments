var angle;
var axiom;
var sentence;
var len;
var start;
var scl;

var rules = [];


function applyRules() {
  len *= scl;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  //createP(sentence);
  turtle();
}

function turtle() {
  background(51);
  resetMatrix();
  translate(start.x,start.y);
  stroke(255, 100);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    //split up to allow different drawing rules
    drawRules(current)
  }
}

function drawRules(letter){
    if (letter == "F" || letter == "G" || letter == "A" || letter == "B") {
      line(0, 0, 0, -len);
      translate(0, -len);
  } else if (letter == "+") {
      rotate(angle);
  } else if (letter == "-") {
      rotate(-angle)
  } else if (letter == "[") {
      push();
  } else if (letter == "]") {
      pop();
    }
}

function setup() {
  createCanvas(1000, 1000);
  background(51);

  len = width/4;
  scl = 0.5;
  start = createVector(0,height/2);
  startAngle = radians(90) // counted anti-clock
  angle = radians(60);

  axiom = "A"
  sentence = axiom;
  rules[0] = {
      a:"A",
      b:"A+B++B-A--AA-B+"
  }
  rules[1] = {
      a:"B",
      b:"-A+BB++B+A--A-B"
  }

  turtle();
  var button = createButton("generate");
  button.mousePressed(applyRules);
}

function draw(){
    turtle()
    //angle = map(mouseX,0,width,radians(0),radians(150))
    //angle = radians(frameCount % 150)
}
