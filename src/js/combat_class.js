import Display from './display_output.js';
export default class Combat {
  constructor(){
    this.roundCount = 1;
    this.turnOrder = [];
    this.turnIndex = 0;
    // this.currentTurn = this.turnOrder[0];
  }

  // use arr.indexOf(searchElement[, fromIndex]) for finding the index of an element, or in this case, of a character in the turnOrder array
  combatTurn(participant,target){ // begin turn
    // let participantOrderNumber = this.turnOrder[0]//index of participant
    Display.output(`[${participant.name}'s turn!]`)
    Display.output(`***<span class="purple">combatTurn function running.  ${participant.name}, is moving to attack target: ${target.name}***</span>`)
    if (participant.status.surprised === false){
      //make attack roll
      let attack = participant.attackRoll();
      Display.output(`${participant.name}'s ATK ROLL: ${attack} vs ${target.name}'s AC: ${target.baseAc}`)
      if (attack >= target.baseAc){
        //make damage roll
        Display.output(`<span class="red">*** HIT! ***</span>`)
        let damage = participant.damageRoll();
        //inflict the damage
        Display.output(`${participant.name}'s DMG ROLL = ${damage}`)
        target.hp -= damage;
      } else {
        Display.output(`<span class="red">*** MISS! ***</span>`)
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
    return this.combatTurn(target,participant)
  } // end turn

  roundEnd(participant,target){
    //perform end of round actions
    participant.status.hidden = false;
    participant.status.surprised = false;
    target.status.hidden = false;
    target.status.surprised = false;
    //display end of round options to player and await command
    Display.output(`Combat round ${this.roundCount} has ended. Continue to <span class="yellow">fight</span>, or <span class="yellow">flee</span> instead?`);
    this.roundCount += 1;
    this.turnIndex = 0;
  }

  combatEnd(characterArray){
    console.log(`combatEnd has been triggered. characterArray: ${characterArray}`)
    this.deathCheck(characterArray);
    //perform end of combat functions
    this.turnOrder = [];
    this.roundCount = 1;
    //display end of combat details to player and await command
    console.log(`combatEnd has been completed. this.turnOrder: ${this.turnOrder} and this.roundCount: ${this.roundCount} now, after resetting.`)

  }

  deathCheck(characterArray){
    console.log(`deathCheck has been triggered. characterArray: ${characterArray}`)
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
    console.log(`deadCharacter: ${deadCharacter}, aliveCharacter: ${aliveCharacter}`)
    if (deadCharacter.class){
      return this.playerDeath(aliveCharacter,deadCharacter);
    } else {
      this.monsterDeath(aliveCharacter,deadCharacter);
    }
  }

  playerDeath(aliveCharacter,deadCharacter){
    Display.output(`Bummer ${deadCharacter.name}, you died to the ${aliveCharacter.name}!`);
    deadCharacter.status.dead = true;
    // restartGame();
  }

  monsterDeath(aliveCharacter,deadCharacter){
    Display.output(`Congrats ${aliveCharacter.name}, you killed the ${deadCharacter.name}!`);
    deadCharacter.status.dead = true;
    //exp and etc that go to the player
    this.corpsification(deadCharacter);
  }

  corpsification(deadCharacter){
    Display.output(`The ${deadCharacter.name} falls to the floor in a limp and bloody pile. Their life is now empty, but their pockets may be full! Loot corpse?`);
    //create an array of all items in the dead monsters inv and equip
    //move weapons into the environment
    //create a container body item that is holding the item/equip array, inside of the environment
  }
}