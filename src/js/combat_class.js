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
    console.log(`combatTurn function running. participant: ${participant}, target: ${target}`)
    if (participant.status.surprised === 'false'){
      //make attack roll
      let attack = participant.attackRoll();
      if (attack >= target.ac){
      //make damage roll
      let damage = participant.damageRoll();
      //inflict the damage
      target.hp -= damage;
      }
    }
    //perform any remaining turn actions
    //check if dead
    if (participant.hp <= 0 || target.hp <= 0){
      return this.combatEnd(participant,target);
    }
    //check if all participants have had a turn
    if (this.turnIndex == (this.turnOrder.length -1)){
      return this.roundEnd(participant,target);
    }
    //action the next participant's turn
    this.turnIndex += 1;
    return this.combatTurn(target,participant)
  } // end turn

  // roundEnd(participant,target){
  //   //perform end of round actions
  //   participant.status.hidden = 'false';
  //   target.status.surprised = 'false';
  //   this.roundCount += 1;
  //   //display end of round options to player and await command
  // }

  // combatEnd(participant,target){
  //   //perform end of combat functions
  //   this.turnOrder = [];
  //   this.roundCount = 1;
  //   //display end of combat details to player and await command
  // }
}