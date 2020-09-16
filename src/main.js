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
$("#char-create").submit(function (event) {
  event.preventDefault();


  const nameInput = $("#char-name").val();
  const raceInput = $("input:radio[name=char-race]:checked").val();
  const pclassInput = $("input:radio[name=char-class]:checked").val();
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
  displayCharStats(player1);
  let monster = game.environments[0].monsters[0]
  displayMonsterStats(monster);

  game.look("");
  Display.updateMap(game.players[0].location)
  // FOR MAKING THE SCROLLBAR START AT THE BOTTOM! TO BE IMPLEMENTED LATER! :)
  // let messageBody = document.querySelector('#messageBody');
  // messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

  $("#main-screen").hide();
  $("#gameplay-screen").show();
});

$("#command-form").submit(function (event) {
  event.preventDefault();
  let command = $("#commandLine").val();
  $("#terminalOutput").append(`<br>>>>><span class="yellow">${command}<span>`);
  $("#commandLine").val("");
  game.inputParser(command);
});


function displayCharStats(player) {
  const playerKeys = Object.keys(player);
  console.log(player.abilityScores.str);
  //playerKeys.forEach(function (key) {
  for (let i = 0; i < playerKeys.length; i++) {
    if (playerKeys[i] === "inv" || playerKeys[i] === "status" || playerKeys[i] === "equip" || playerKeys[i] === "hunger" || playerKeys[i] === "undefined") {
      continue;
    }
    else {
      $("#charStatDisplay").append("<br>" + playerKeys[i] + ": " + player[playerKeys[i]] + "\n");
    }
  }
}

function displayMonsterStats(monster) {
  const monsterKeys = Object.keys(monster);
  console.log(monster.abilityScores.str)
  for (let i = 0; i < monsterKeys.length; i++) {
    if (monsterKeys[i] === "inv" || monsterKeys[i] === "status" || monsterKeys[i] === "equip" || monsterKeys[i] === "hunger" || monsterKeys[i] === "id") {
      continue;
    }
    else {
      $("#monstStatDisplay").append("<br>" + monsterKeys[i] + ": " + monster[monsterKeys[i]] + "\n");
    }
  }
}

// function displayMonsterStats(monster) {
//   console.log("Passed into function: " + monster.name);
//   const monsterKeys = Object.keys(monster);
//   monsterKeys.forEach(function (key) {
//     $("#monstStatDisplay").append("<br>" + key + ": " + monster[key] + "\n");
//   });
// }

// Canvas


