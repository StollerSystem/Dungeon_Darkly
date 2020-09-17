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
    $("#inventDisplay").html("output")
  }

  static addInv(output) {
    $("#inventDisplay").append(output)    
  }

  static displayMonsterStats(monster) {
    if (monster === "none") {
      $("#monstStatDisplay").text("No monsters...")
    } else {
      $("#monstStatDisplay").text("")
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
      }
      else {
        $("#monstStatDisplay").append("<br>" + monsterKeys[i] + ": " + monster[monsterKeys[i]] + "\n");
      }
     } 
    }    
  }


}

