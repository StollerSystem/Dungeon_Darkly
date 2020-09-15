import Game from './game_class.js';

export default class GameInit {
  static getGame(){
    let game = new Game([],[],[],[]);
    // Add CastleRoom
    game.addEnvironment("Castle Room","dark and scary",[],[],[],[]);
    let goblin = game.addMonster(1,"Goblin","goblin",1,5,0,[],[],8,10,8,6,6,6,6);
    game.environments[0].monsters.push(goblin);
    let potion = game.addItem("potion",1,1,5,1,[],[],"common");
    game.environments[0].items.push(potion);
    let dagger = game.addWeapon(3,6, "dagger",2,1,5,1,[],[],"common");
    game.environments[0].items.push(dagger);
    let leatherArmor  = game.addArmor(3,"leather","Leather Armor",3,5,5,1,);
    game.environments[0].items.push(leatherArmor);

    game.addEnvironment("Torture Chamber","bloody",[],[],[],[]);
    let goblin2 = game.addMonster(1,"Goblin Torturer","goblin",1,5,0,[],[],8,10,8,6,6,6,6);
    game.environments[1].monsters.push(goblin2);
    let potion2 = game.addItem("poison",1,1,5,1,[],[],"common");
    game.environments[1].items.push(potion2);
    let dagger2 = game.addWeapon(3,6, "Bone Saw",2,1,5,1,[],[],"common");
    game.environments[1].items.push(dagger2);
    let leatherboots  = game.addArmor(3,"leather","Leather Boots",3,5,5,1,);
    game.environments[1].items.push(leatherboots);


    game.addEnvironment("Dungeon","Dark room with chains hanging down and something dripping in the corner",[],[],[],[]);
    let zombie = game.addMonster(1,"Zombie","zombie",1,5,0,[],[],8,10,8,6,6,6,6);
    game.environments[2].monsters.push(zombie);
    let skeleton = game.addItem("skeleton",1,1,5,1,[],[],"common");
    game.environments[2].items.push(skeleton);
    let battleaxe = game.addWeapon(3,6, "battleaxe",2,1,5,1,[],[],"common");
    game.environments[2].items.push(battleaxe);
    return game;
  }
}
