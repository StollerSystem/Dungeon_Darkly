// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './js/game_class.js';


$(document).ready(function(){
  let game = new Game([],[],[],[])
  game.addEnvironment("Castle Room","dark and scary",[],[],[],[])
  // conditional for class here?
  let player1 = game.addPlayer(name,race,pclass,level,xp,hp,mp,hunger,inv,str,dex,con,wis,int,chr,lck

  game.environments[0].players.push(player1)

});