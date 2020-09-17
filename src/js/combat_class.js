import Display from './display_output.js';
import { Container } from './item_class.js';

export default class Combat {
  constructor(){
    this.roundCount = 1;
    this.turnOrder = [];
    this.turnIndex = 0;
    this.loot = [];
  }

  // use arr.indexOf(searchElement[, fromIndex]) for finding the index of an element, or in this case, of a character in the turnOrder array
  combatTurn(participant,target){ // begin turn
    // let participantOrderNumber = this.turnOrder[0]//index of participant
    Display.output(`[${participant.name}'s turn!]`);
    Display.output(`***<span class="purple">combatTurn function running.  ${participant.name}, is moving to attack target: ${target.name}***</span>`);
    if (participant.status.surprised === false){
      //make attack roll
      let attack = participant.attackRoll();
      Display.output(`${participant.name}'s ATK ROLL: ${attack} vs ${target.name}'s AC: ${target.baseAc}`);
      if (attack >= target.baseAc){
        //make damage roll
        Display.output(`<span class="red">*** HIT! ***</span>`);
        let damage = participant.damageRoll();
        //inflict the damage
        Display.output(`${participant.name}'s DMG ROLL = ${damage}`);
        target.hp -= damage;
        Display.output(`${target.name} took ${damage} damage, leaving them with ${target.hp} HP`);
      } else {
        Display.output(`<span class="red">*** MISS! ***</span>`);
      }
    }
    //perform any remaining turn actions
    //check if dead
    if (participant.hp <= 0 || target.hp <= 0){
      return this.combatEnd(this.turnOrder);
    }
    //check if all participants have had a turn
    if (this.turnIndex == (this.turnOrder.length -1)){
      return this.roundEnd(participant,target);
    }
    //action the next participant's turn
    this.turnIndex += 1;
    return this.combatTurn(target,participant);
  } // end turn

  roundEnd(participant,target){
    //perform end of round actions
    participant.status.hidden = false;
    participant.status.surprised = false;
    target.status.hidden = false;
    target.status.surprised = false;
    //display end of round options to player and await command
    if (participant.type) {
      console.log("DISPLAY MONSTER TRUE");
      Display.displayMonsterStats(participant);
      Display.displayCharStats(target);
    } else {
      Display.displayMonsterStats(target);
      Display.displayCharStats(participant);
    } 
    //Display.displayMonsterStats(target);
    Display.output(`Combat round ${this.roundCount} has ended. Continue to <span class="yellow">fight</span>, or <span class="yellow">flee</span> instead?`);
    this.roundCount += 1;
    this.turnIndex = 0;
  }

  combatEnd(characterArray){
    console.log(`combatEnd has been triggered. characterArray: ${characterArray[0].name} and ${characterArray[1].name}`);
    this.deathCheck(characterArray);
    //perform end of combat functions
    this.turnOrder = [];
    this.roundCount = 1;
    //display end of combat details to player and await command
    console.log(`combatEnd has been completed. this.turnOrder: ${this.turnOrder} and this.roundCount: ${this.roundCount} now, after resetting.`);
    // if (target.type) { //from merge. needs change with characterArray vs target variable usage
    //   Display.displayMonsterStats("none");
    // }
    // Display.output(`Congrats ${participant.name}, you killed the ${target.name}!`);
  }

  deathCheck(characterArray){
    console.log(`deathCheck has been triggered. characterArray: ${characterArray[0].name} and ${characterArray[1].name}`);
    let deadCharacter;
    let aliveCharacter;
    for (let character of characterArray){
      if (character.hp <= 0){
        deadCharacter = character;
      }
      if (character.hp >= 0){
        aliveCharacter = character;
      }
    }
    console.log(`deadCharacter: ${deadCharacter.name}, aliveCharacter: ${aliveCharacter.name}`);
    if (deadCharacter.pclass){
      return this.playerDeath(aliveCharacter,deadCharacter);
    } else {
      this.monsterDeath(aliveCharacter,deadCharacter);
    }
  }

  playerDeath(aliveCharacter,deadCharacter){
    console.log(`playerDeath has been triggered. ${deadCharacter.name} died to ${aliveCharacter.name}`);
    Display.output(`Bummer ${deadCharacter.name}, you died to ${aliveCharacter.name}!`);
    deadCharacter.status.dead = true;
    console.log(`deadCharacter.status.dead = ${deadCharacter.status.dead}`);

    // restartGame();
  }

  monsterDeath(aliveCharacter,deadCharacter){
    console.log(`monsterDeath has been triggered. ${deadCharacter.name} died to ${aliveCharacter.name}`);
    Display.output(`Congrats ${aliveCharacter.name}, you killed ${deadCharacter.name}!`);
    deadCharacter.status.dead = true;
    console.log(`deadCharacter.status.dead = ${deadCharacter.status.dead}`);
    //exp and etc that go to the player
    this.corpsification(deadCharacter);
  }

  corpsification(deadCharacter){
    Display.output(`${deadCharacter.name} falls to the floor in a limp and bloody pile. Their life is now empty, but their pockets may be full! <span class="yellow">Loot corpse</span>?`);
    //create a container body item that will hold all of deadCharacter's inv and equip
    let newCorpse = new Container(`corpse`,100,`Corpse of ${deadCharacter.name}`,6,1,1,1,[],[],"common");
    //newCorpse.description = `The fresh corpse of a ${deadCharacter.mainType}.`
    //move weapons into the environment
    if (deadCharacter.equip.mainHand[0]){
      console.log(`about to push the deadCharacter's weapon into the combat.loot. the weapon's name is: ${deadCharacter.equip.mainHand[0].name}`);
      this.loot.push(deadCharacter.equip.mainHand[0]);
    } else {
      console.log(`deadCharacter has no weapon to pass into the combat.loot. Moving onto corpsemaking`);
    }
    //push items from deadCharacter into corpse
    for (let item of deadCharacter.inv){
      newCorpse.contents.push(item);
    }
    //push equip from deadCharacter into corpse
    for (let equipSlot in deadCharacter.equip){      
      for (let eqpiece of deadCharacter.equip[equipSlot]){ 
        newCorpse.contents.push(eqpiece);              
      }
    }
    //push corpse into combat.loot for later migration into environment.items
    this.loot.push(newCorpse);
  }
}