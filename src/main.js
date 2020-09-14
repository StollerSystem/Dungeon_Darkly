// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './js/game_class.js';


$(document).ready(function(){
  let game = new Game([],[],[],[])
  game.addEnvironment("Castle Room","dark and scary",[],[],[],[])
  

  $("form").submit(function(event){
    event.preventDefault();
    const nameInput = $("#name").val();
    const raceInput = $("#race").val();
    const pclassInput = $("#pclass").val();
    const strInput = $("#str").val();
    const dexInput = $("#dex").val();
    const conInput = $("#con").val();
    const wisInput = $("#wis").val();
    const intInput = $("#int").val();
    const chrInput = $("#chr").val();
    const lckInput = $("#lck").val();
    let hp;
    let mp;
    
    switch (pclassInput) {
      case ("Mage"):
        hp = 6;
        mp = 10;
        break;
      case ("Warrior"):
        hp = 12;
        mp = 0;
        break;
      default:
        hp = 10;
        mp = 0;
        break;
    }
    
    let player1 = game.addPlayer(nameInput,raceInput,pclassInput,1,0,hp,mp,0,[],strInput,dexInput,conInput,wisInput,intInput,chrInput,lckInput);
    game.environments[0].players.push(player1);    
  })
  

});