import $ from 'jquery';
import draw from './canvas.js';

// delete lines after a while 

export default class Display {

  static output(output) {

    $("#terminalOutput").append("<br>>" + output);
  
  }

  static updateMap(number) {
    draw(number);
  }

  static clearInv() {
    $("#inventDisplay").html("output");
  }

  static addInv(output) {
    $("#inventDisplay").append(output);    
  }

  static displayMonsterStats(monster) {
    if (monster === "none") {
      $("#monstStatDisplay").html(`Monster_stats~<br>_No Monsters in area_`);
    } else {
      $("#monstStatDisplay").html(`Monster_stats~<br>`);
      const monsterKeys = Object.keys(monster);
      for (let i = 0; i < monsterKeys.length; i++) {
        if (monsterKeys[i] === "inv" || monsterKeys[i] === "status" || monsterKeys[i] === "equip" || monsterKeys[i] === "hunger" || monsterKeys[i] === "id" || monsterKeys[i] === "type") {
          continue;
        }
        if (monsterKeys[i] === "abilityScores") {
          let abScoreKeys = Object.keys(monster.abilityScores);
          abScoreKeys.forEach(function(key) {
            $("#monstStatDisplay").append("<br>---" + key + ": " + monster.abilityScores[key] + "\n");
          });
        } else {
          $("#monstStatDisplay").append("<br>" + monsterKeys[i] + ": " + monster[monsterKeys[i]] + "\n");
        }
      } 
    }    
  }

  static displayCharStats(player) {
    $("#charStatDisplay").html(`Character_stats~<br>`);
    console.log("player stats refresh!");
    const playerKeys = Object.keys(player);
    console.log(player.inv);
    for (let i = 0; i < playerKeys.length; i++) {
      if (playerKeys[i] === "inv" || playerKeys[i] === "status" || playerKeys[i] === "equip" || playerKeys[i] === "hunger" || playerKeys[i] === "undefined") {
        continue;
      }
      if (playerKeys[i] === "abilityScores") {
        let abScoreKeys = Object.keys(player.abilityScores);
        abScoreKeys.forEach(function(key) {
          $("#charStatDisplay").append("<br>---" + key + ": " + player.abilityScores[key] + "\n");
        });
      }
      else {
        $("#charStatDisplay").append("<br>" + playerKeys[i] + ": " + player[playerKeys[i]] + "\n");
      }
    }
  }


}

