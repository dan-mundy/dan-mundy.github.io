
//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 50;
var positionY = 50;
var velocity = 100;
var r = Math.floor(255*(Math.random()));
var g = Math.floor(255*(Math.random()));
var b = Math.floor(255*(Math.random()));   



var inputValue = 100;
var reverse = false;
var color = 'rgb(' + 0 + ', ' + 0 + ', ' + 0 + ')';
var ball = document.getElementById("mball");
const inputNode = document.getElementById('input');
const buttonNode = document.getElementById('button');

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 50;
  var Xmax = 350;

  // two y-axis coordinates
  var Ymin = 50;
  var Ymax = 350;

  

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

function colorBall() {

    r = Math.floor(255*(Math.random()));
    g = Math.floor(255*(Math.random()));
    b = Math.floor(255*(Math.random()));  

    color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    ball.style.background = color;
  
    
}


buttonNode.addEventListener('click', () => {
    
    inputValue = document.querySelector("input").value;
    var test = document.body.childNodes.length;
    console.log(test)


    if (Number(test) > 11) {
       clearBalls();
 }

   // inputvalue = document.getElementById("input").value;
    console.log(inputValue);
    for (let i = 0; i < Number(inputValue); i++) {
        create();
    }
   // console.log(inputNode.inputValue);
   // inputValue = Number(inputNode.inputValue)
  // inputValue = parseInt(inputNode.inputValue,10);
})

var create = function(){
    // random x and y
    var width = window.innerWidth;
    var height = window.innerHeight;
    var x = Math.floor(Math.random()*width);
    var y = Math.floor(Math.random()*height);
    if (x>(width-50)) x = width - 50;
    if (y>(height-50)) y = height - 50;

    // random color
    var r = Math.floor(255*(Math.random()));
    var g = Math.floor(255*(Math.random()));
    var b = Math.floor(255*(Math.random()));        
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    // set div attributes
    var div = document.createElement('div');
    div.id = 'ball';
    div.className = "ball";
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '50px';    
    div.style.height = '50px';    
    div.style.borderRadius = '50%';
    div.style.background = color;    

    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);

    // default start position
    div.x = x;
    div.y = y;
    return div;        
}

var clearBalls = function(){
   
   const balls = document.querySelectorAll('[id^="ball"]');
    for (let i = 0; i< balls.length; i++){
        balls[i].remove();
    }
//document.getElementById('ball').remove();
}

setInterval(moveBall, 100);
setInterval(colorBall, 500);
