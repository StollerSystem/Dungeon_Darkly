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
    if (splitString[0] === "attack"||splitString[0] === "at"||splitString[0] === "fight") { 
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

    //move;
    if (splitString[0] === "move") {          
      this.move();
      //onsole.log("test")      
    }
      
    //GET
    if (splitString[0] === "get") {
      let target;
      if (splitString[1]) {
        target = splitString[1];
        this.get(target);
      } else {
        target = "";
        Display.output("Get what?")      
      }
    }
  }
  
  //look(target);
  look(target) {
    Display.displayMonsterStats(this.environments[this.players[0].location].monsters[0]);
    console.log("player look function:",target);
    // this.environments[0].name
    // this.environments[0].description
    console.log(this.environments[this.players[0].location].name);
    //$("#terminalOutput").append("<br>>" + this.environments[0].name);
    Display.output(`<br><span class="blue">${this.environments[this.players[0].location].name}</span>`);
    Display.output(this.environments[this.players[0].location].description);
    if (this.environments[this.players[0].location].items.length > 0) {
      Display.output(`Items in the room:`)
      this.environments[this.players[0].location].items.forEach(function(item){
        Display.output(`${item.name}`)
      });    
    }
    if (this.environments[this.players[0].location].monsters.length > 0) {
      Display.output(`Monster in the room: <span class="red">${this.environments[this.players[0].location].monsters[0].name}</span>`);
    }
    
  }

  //attack(target);
  attack(target) {
    let location = this.environments[this.players[0].location];
    console.log(`player attack function. target: ${target}`);
    if (location.combat.roundCount == 1){
    let targetMonster;     
    this.environments[this.players[0].location].monsters.forEach(function(monster){
      if (monster.name.toLowerCase().includes(target)) {
        targetMonster = monster
      }
    })
    // this.environments[0].monsters[0]
    //$("#terminalOutput").append("<br>>" + this.environments[0].name);
    Display.output(`<br>You join in battle with the ${this.environments[this.players[0].location].monsters[0].name}!`);
    this.combatStart(this.environments[this.players[0].location].players[0],targetMonster);
    } else {
    location.combat.combatTurn(location.combat.turnOrder[0],location.combat.turnOrder[1])
    }
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
    Display.output(`---rolling combat initiative---<br>${participant.name}'s init roll = ${participantInit} / ${target.name}'s init roll = ${targetInit}`)
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

  move() {
    let current_location = this.players[0].location
    if (current_location  >= this.environments.length-1) {
      Display.output(`<br> You can't move anymore!`)
    } else {
      this.players[0].location +=1
      console.log(current_location)
      Display.output("You bravely advance into the next area!")
      this.environments[this.players[0].location].players.push( this.players[0]);
      this.environments[this.players[0].location-1].players.shift();
      this.look("")
      Display.updateMap(this.players[0].location)
    }    
  }

  get(target) {
    let current_location = this.environments[this.players[0].location]
    for (let i=0;i<current_location.items.length;i++) {
      if (current_location.items[i].name.toLowerCase().includes(target)) {        
        //this.look("")
        Display.output(`[+] You pick up the ${current_location.items[i].name}`)
        this.players[0].inv.push(current_location.items[i]);

        current_location.items.splice(i-1,1)
        console.log(current_location.items)
        // current_location.items = newArray        
        break;
      }   
    } 
    this.updateInvDisplay(); 
  } 
  
  updateInvDisplay() {
    this.players[0].inv.forEach(function(item){
      Display.addInv(item.name);
    })
  }
}