import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './js/game_class.js';
import Command from './js/command_parser.js';


//console.log("test1")
$("#userInput").submit(function(event){
  event.preventDefault();
  //console.log($("#input").val())
  displayText(Command.inputParser($("#input").val()));
  $("#input").val("");
});

function displayText(output) {
  $("#output").append("ouput: ",output," ")
}


$(document).ready(function(){
  console.log("test2")
  let game = new Game([],[],[],[]);
  console.log(game)
  // test build out game!

  game.addEnvironment("Castle Room","dark and scary",[],[],[],[]);
  
  let goblin = game.addMonster(1,"Goblin","goblin",1,5,0,[],[],8,10,8,6,6,6,6);
  game.environments[0].monsters.push(goblin)

  let potion = game.addItem("potion",1,1,5,1,[],[],"common");
  game.environments[0].items.push(potion);
 
  let dagger = game.addWeapon(3,6, "dagger",2,1,5,1,[],[],"common");
  game.environments[0].items.push(dagger);
 
  let leatherArmor  = game.addArmor(3,"leather","Leather Armor",3,5,5,1,);
  game.environments[0].items.push(leatherArmor);


// COMMAND LINE TEST!

  









  // Character creation logic 

  $("form").submit(function(event){
    event.preventDefault();
    const nameInput = $("#name").val();
    const raceInput = $("#race").val();
    const pclassInput = $("#pclass").val();
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
    
    let player1 = game.addPlayer(nameInput,raceInput,pclassInput,1,0,hp,mp,0,[],strInput,dexInput,conInput,wisInput,intInput,chrInput,lckInput);
    game.environments[0].players.push(player1);    
  })    

});