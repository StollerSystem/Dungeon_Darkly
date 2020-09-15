import Game from './game_class.js';

export default class GameInit {
  static getGame(){
    let game = new Game([],[],[],[]);
    // Add CastleRoom
    game.addEnvironment("Castle Room","dark and scary",[],[],[],[]);
    let goblin = game.addMonster(1,"Goblin","goblin",1,5,0,[],[],8,10,8,6,6,6,6);
    game.environments[0].monsters.push(goblin)
    let potion = game.addItem("potion",1,1,5,1,[],[],"common");
    game.environments[0].items.push(potion);
    let dagger = game.addWeapon(3,6, "dagger",2,1,5,1,[],[],"common");
    game.environments[0].items.push(dagger);
    let leatherArmor  = game.addArmor(3,"leather","Leather Armor",3,5,5,1,);
    game.environments[0].items.push(leatherArmor);

    return game 
    }
}
