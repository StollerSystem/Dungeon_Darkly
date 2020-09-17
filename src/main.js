import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Game from './js/game_class.js';
// import Command from './js/command_parser.js';
import GameInit from './js/GameInit.js';
// import draw from './js/canvas.js';
import Display from './js/display_output';

let game = GameInit.getGame();
console.log(game.environments);

$("#beginBtn").click(function() {
  $("#main-screen").show();
  $(".homeScreen").hide();
});

$("#char-create").submit(function (event) {
  event.preventDefault();

  let nameInput = $("#char-name").val();
  const raceInput = $("input:radio[name=char-race]:checked").val();
  const pclassInput = $("input:radio[name=char-class]:checked").val();
  if (nameInput === "") {
    nameInput = "Nemo the Forgetful"
  }
  console.log(nameInput, raceInput, pclassInput);
  let strInput;
  let dexInput;
  let conInput;
  let wisInput;
  let intInput;
  let chrInput;
  let lckInput;
  let hp;
  let mp;

  switch (pclassInput) {
  case ("Warrior"):
    hp = 6;
    mp = 10;
    strInput = 16;
    dexInput = 13;
    conInput = 14;
    wisInput = 7;
    intInput = 8;
    chrInput = 10;
    lckInput = 9;
    break;

  case ("Paladin"):
    hp = 12;
    mp = 0;
    strInput = 14;
    dexInput = 8;
    conInput = 18;
    wisInput = 14;
    intInput = 10;
    chrInput = 6;
    lckInput = 12;
    break;
  // OTHER CLASSES HERE
  default:
    hp = 10;
    mp = 0;
    strInput = 10;
    dexInput = 10;
    conInput = 10;
    wisInput = 10;
    intInput = 10;
    chrInput = 10;
    lckInput = 10;
    break;
  } 

  let player1 = game.addPlayer(nameInput, raceInput, pclassInput, 1, 0, hp, mp, 0, [], strInput, dexInput, conInput, wisInput, intInput, chrInput, lckInput);
  game.environments[0].players.push(player1);
  game.players.push(player1);
  console.log(player1);
  console.log("Environment: " + game.environments[0].monsters[0].name);
  // Display.displayCharStats(player1);
  //let monster = game.environments[0].monsters[0];
  

  game.look("");
  Display.updateMap(game.players[0].location);

  $("#main-screen").hide();
  $("#gameplay-screen").show();
});

$("#command-form").submit(function (event) {
  event.preventDefault();
  let command = $("#commandLine").val();
  $("#terminalOutput").append(`<br>>>>><span class="cyan">${command}<span>`);
  $("#commandLine").val("");
  game.inputParser(command);
  updateScroll();
});


function updateScroll(){
  let element = document.getElementById("terminalOutput");
  element.scrollTop = element.scrollHeight;
}
// function restartGame(){
//   game = GameInit.getGame();
//   $("#gameplay-screen").hide();
//   $("#main-screen").show();
// }