export class Combat {
  constructor(){
    this.turnOrder = [];
    this.roundCount = 1;
    this.currentTurn;
    this.playerTarget;
  }

  combatTurn(participant,target){ // begin turn
    let participantOrderNumber = this.turnOrder[0]//index of participant
    if (participant.status.surprised === 'false'){
      //make attack roll
      attack = participant.attackRoll();
      if (attack >= target.ac){
      //make damage roll
      damage = participant.damageRoll();
      //inflict the damage
      target.hp -= damage;
      }
    };
    //perform any remaining turn actions
    //check if dead
    if (participant.hp <= 0 || target.hp <= 0){
      return this.combatEnd(participant,target);
    }
    //check if all participants have had a turn
    if (this.currentTurn == (this.turnOrder.length -1)){
      return this.roundEnd(participant,target);
    }
    //action the next participant's turn
    return this.combatTurn(this.turnOrder[[]])
  } // end turn

  roundEnd(participant,target){
    //perform end of round actions
    participant.status.hidden = 'false';
    target.status.surprised = 'false';
    this.roundCount += 1;
    //display end of round options to player and await command
  }

  combatEnd(participant,target){
    //perform end of combat functions
    this.turnOrder = [];
    this.roundCount = 1;
    //display end of combat details to player and await command
  }
}