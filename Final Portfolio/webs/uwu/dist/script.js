var canvas = document.querySelector('canvas');
var menuBtn = document.getElementById('btn');
var initialX = 0;
var finalX = 2000;
var currentX = initialX;

var initialR = 2000;
var finalR = 0;
var currentR = initialR;

var width = window.innerWidth;
var height = window.innerHeight;
var midX = window.innerWidth/2;
var midY = window.innerHeight/2;
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animate(){
    requestAnimationFrame(animate);
    c.beginPath();
    c.fillStyle = "orange";
    c.arc(midX, midY, currentX, 0, 2 * Math.PI);
    c.strokeStyle = 'red';
    c.fill();
    if(currentX<finalX){
      currentX=currentX+40;
    }
    if(currentX >= 2000){
      return;
    }
    console.log(currentX);
}

function unAnimate(){
    c.clearRect(0, 0, width, height);
    requestAnimationFrame(unAnimate);
    c.beginPath();
    c.fillStyle = "orange";
    c.arc(midX, midY, currentR, 0, 2 * Math.PI);
    c.strokeStyle = 'orange';
    c.fill();
    if(currentR > finalR){
      currentR = currentR-40;
    }
    if(finalR <= 0){
      return;
    }
  console.log(currentR);
}

function test(){
  requestAnimationFrame(animate);
  document.getElementById( "btn" ).setAttribute( "onClick", "javascript: test2();");
  menuBtn.classList.add("afterAn");
  menuBtn.classList.remove("menu");
  console.log(currentX +" 1st click");
  currentX = 0;
}
function test2(){
  currentX = 0;
  requestAnimationFrame(unAnimate);
  document.getElementById( "btn" ).setAttribute( "onClick", "javascript: test();");
  menuBtn.classList.add("menu");
  menuBtn.classList.remove("afterAn");
  console.log("hi");
  console.log(currentR + " 2nd Click");
  currentR = 2000;
}