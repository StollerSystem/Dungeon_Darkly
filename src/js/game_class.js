import Environment from './environment_class.js';
import { Player } from './player_class.js'; 
import Monster from './monster_class.js'; 
import { Item, Weapon, Armor } from './item_class.js';
import { AbilityScores } from './character_class.js';
import Display from './display_output.js';

export default class Game {
  constructor(players,items,monsters,environments) {
    this.players = players;
    this.items = items;
    this.monsters = monsters;
    this.environments = environments;
    this.gameClock = 0;       
  }

  addEnvironment(name,description,items,monsters,players,exits) {
    let newEnvironment = new Environment(name,description,items,monsters,players,exits);
    this.environments.push(newEnvironment);
  }  
  
  addPlayer(name,race,pclass,level,xp,hp,mp,hunger,inv,str,dex,con,wis,int,chr,lck) {
    let abilityScores = new AbilityScores(str,dex,con,wis,int,chr,lck);
    let newPlayer = new Player(name,abilityScores,race,pclass,level,xp,hp,mp,hunger,inv);
    return newPlayer;
  }
  
  addMonster(id,name,mainType,cr,hp,mp,inv,behaviors,str,dex,con,wis,int,chr,lck) {
    let abilityScores = new AbilityScores(str,dex,con,wis,int,chr,lck);
    let newMonster = new Monster(id,name,abilityScores,mainType,cr,hp,mp,inv,behaviors);
    return newMonster;
  }
    
  addItem(name,Id,worth,Hp,level,status,flags,rarity) {
    let newItem = new Item(name,Id,worth,Hp,level,status,flags,rarity);
    return newItem;
  }

  addWeapon(slot,atk,dam,name,Id,worth,Hp,level,status,flags,rarity) {
    let newWeapon = new Weapon(slot,atk,dam,name,Id,worth,Hp,level,status,flags,rarity);
    return newWeapon;
  }

  addArmor(slot,acBonus,type,name,Id,worth,Hp,level,status,flags,rarity) {
    let newArmor = new Armor(slot,acBonus,type,name,Id,worth,Hp,level,status,flags,rarity);
    return newArmor;
  }

  roll(num,side,mod,adj){
    let total;
    if (!mod){
      total = 0;
    } else {
      total = mod;
    }
    let min;
    if (!adj){
      min = 1;
    } else {
      min = 1 + adj;
    }
    for (let i=0;i<num;i++){
      let roll = ((min-1) + Math.ceil(Math.random() * (side-min + 1)));
      total += roll;
      console.log(`d${side} rolled: ${roll}`);
    }
    console.log(`${num}d${side} rolled, with a modifier of ${mod}. Total is: ${total}`);
    return total;
  }

  inputParser(input) {
    let splitString = input.toLowerCase().split(" ");


    // LOOK
    if (splitString[0] === "look"||splitString[0] === "l") {
      let target;
      if (splitString[1]) {
        target = splitString[1];
      } else {
        target = "";
      }
      //console.log("look function:",target)
      this.look(target);
    } 

    //attack(target);
    if (splitString[0] === "attack"||splitString[0] === "at") { 
      let target;
      if (splitString[1]) {
        target = splitString[1];
        this.attack(target);
      } else {
        target = "";
        Display.output("Attack what?")
      }
      //console.log("look function:",target)
      // this.attack(target);
    } 
  }


  
  //look(target);
  look(target) {
    console.log("player look function:",target);
    // this.environments[0].name
    // this.environments[0].description
    console.log(this.environments[0].name);
    //$("#terminalOutput").append("<br>>" + this.environments[0].name);
    Display.output(`<span class="blue">${this.environments[0].name}</span>`);
    Display.output(this.environments[0].description);
    Display.output(`!!! Monster in the room: <span class="red">${this.environments[0].monsters[0].name}</span> !!!`);
  }

  //attack(target);
  attack(target) {
    //Display.output(target);
    console.log(`player attack function. target: ${target}`);
    // this.environments[0].players[0]
    let targetMonster;     
    this.environments[0].monsters.forEach(function(monster){
      if (monster.name.toLowerCase().includes(target)) {
        targetMonster = monster
      }
    })
    // this.environments[0].monsters[0]
    //$("#terminalOutput").append("<br>>" + this.environments[0].name);
    Display.output(`You begin attacking the ${this.environments[0].monsters[0].name}!`);
    this.combatStart(this.environments[0].players[0],targetMonster);
  }

  combatStart(participant,target){
    let turnOrder = [];
    // stealth-surprise check
    // if (this.status.some(status => status.hidden === 'true')){
    //   let stealthCheck = this.abilityScoreCheck('dex');
    //   let perceptionCheck = [target].abilityScoreCheck('wis');
    //   if (stealthCheck > perceptionCheck){
    //   [target].status.surprised = 'true';
    //   }
    // }
    // roll for initiative, fill turnOrder
    let participantInit = participant.abilityScoreCheck('dex');
    let targetInit = target.abilityScoreCheck('dex');
    console.log(`targetInit: ${targetInit}`);
    if (participantInit >= targetInit){
      turnOrder.push(participant);
      turnOrder.push(target);
    } else {
      turnOrder.push(target);
      turnOrder.push(participant);
    }
    let location = this.environments[participant.location];
    // set the Combat turnOrder
    location.combat.turnOrder = turnOrder;
    // begin the combatTurn!
    location.combat.combatTurn(location.combat.turnOrder[0],location.combat.turnOrder[1]);
  } // end combatStart
}