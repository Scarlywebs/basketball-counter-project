
let homeStartScore = 0
let guestStartScore = 0 
let homeScore = document.getElementById("home_score");
let guestScore = document.getElementById("guest_score");
let homeAddPoint1 = document.querySelector("#home_add1");
let homeAddPoint2 = document.querySelector("#home_add2");
let homeAddPoint3 = document.querySelector("#home_add3");
let guestAddPoint1 = document.querySelector("#guest_add1");
let guestAddPoint2 = document.querySelector("#guest_add2");
let guestAddPoint3 = document.querySelector("#guest_add3");
homeAddPoint1.onclick = homeAdd1
homeAddPoint2.onclick = homeAdd2
homeAddPoint3.onclick = homeAdd3
guestAddPoint1.onclick = guestAdd1
guestAddPoint2.onclick = guestAdd2
guestAddPoint3.onclick = guestAdd3

function homeAdd1() {     
  homeStartScore += 1 
  homeScore.textContent = homeStartScore 
  addFoulLeft();
}
function homeAdd2() {  
  homeStartScore += 2
  homeScore.textContent = homeStartScore
  addFoulLeft();
}
function homeAdd3() {
  homeStartScore += 3
  homeScore.textContent = homeStartScore
  addFoulLeft();
}
function guestAdd1() {  
  guestStartScore += 1
  guestScore.textContent = guestStartScore
  addFoulRight();
}
function guestAdd2() {  
  guestStartScore += 2
  guestScore.textContent = guestStartScore
  addFoulRight();
}
function guestAdd3() {  
  guestStartScore += 3
  guestScore.textContent = guestStartScore
  addFoulRight();
}

let foulScoreLeft = document.getElementById("scoreboard_foul_left_score");  
let foulLeftCurrentScore = 0;
let foulScoreRight = document.getElementById("scoreboard_foul_right_score");  
let foulRightCurrentScore = 0;

function addFoulLeft() {    
  if (homeStartScore % 6 === 0) {
    foulLeftCurrentScore += 1;
    foulScoreLeft.textContent = foulLeftCurrentScore;
  }
}
function addFoulRight() {    
  if (guestStartScore % 6 === 0) {
    foulRightCurrentScore += 1;
    foulScoreRight.textContent = foulRightCurrentScore;
  }
}

let boardReset = document.getElementById("scoreboard_reset");
boardReset.onclick = resetAll

function resetAll() {
  homeStartScore = 0
  guestStartScore = 0
  foulRightCurrentScore = 0
  foulLeftCurrentScore = 0
  homeScore.textContent = homeStartScore
  guestScore.textContent = guestStartScore 
  foulScoreLeft.textContent = foulLeftCurrentScore
  foulScoreRight.textContent = foulRightCurrentScore
}