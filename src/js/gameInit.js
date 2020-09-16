import Game from './game_class.js';


// Double check that values are up to date! :D

export default class GameInit {
  static getGame() {
    let game = new Game([], [], [], []);
    // Add CastleRoom
    game.addEnvironment("Castle Room", "  A dark, dank room. The fung shuay in here leaves a lot to be desired... A simple study, a very stained rug, and some very strange paintings occupy this room. There is a stairway leading down in here as well.", [], [], [], []);
    let goblin = game.addMonster(1, "Goblin", "goblin", 1, 5, 0, [], [], 8, 10, 8, 6, 6, 6, 6);
    game.environments[0].monsters.push(goblin);
    let potion = game.addItem("potion", 1, 1, 5, 1, [], [], "common");
    game.environments[0].items.push(potion);
    let dagger = game.addWeapon(3, 6, "dagger", 2, 1, 5, 1, [], [], "common");
    game.environments[0].items.push(dagger);
    let leatherArmor = game.addArmor(3, "leather", "Leather Armor", 3, 5, 5, 1,);
    game.environments[0].items.push(leatherArmor);

    game.addEnvironment("Torture Chamber", "  Considering the amount of blood and strange contraptions, lord only knows the unfortunate things that have occured down here. It sends a shiver down your spine even thinking about it.", [], [], [], []);
    let goblin2 = game.addMonster(1, "Goblin Torturer", "goblin", 1, 5, 0, [], [], 8, 10, 8, 6, 6, 6, 6);
    game.environments[1].monsters.push(goblin2);
    let potion2 = game.addItem("poison", 1, 1, 5, 1, [], [], "common");
    game.environments[1].items.push(potion2);
    let dagger2 = game.addWeapon(3, 6, "Bone Saw", 2, 1, 5, 1, [], [], "common");
    game.environments[1].items.push(dagger2);
    let leatherboots = game.addArmor(3, "leather", "Leather Boots", 3, 5, 5, 1,);
    game.environments[1].items.push(leatherboots);


    game.addEnvironment("Dungeon", "  This room has barely any light to it. A single torch hanging on the wall does little to illuminate this dungeon. Although considering the many hanging chains and the fact that you can hear some type of liquid dripping, maybe that's for the best...", [], [], [], []);
    let zombie = game.addMonster(1, "Zombie", "zombie", 1, 5, 0, [], [], 8, 10, 8, 6, 6, 6, 6);
    game.environments[2].monsters.push(zombie);
    let skeleton = game.addItem("skeleton", 1, 1, 5, 1, [], [], "common");
    game.environments[2].items.push(skeleton);
    let battleaxe = game.addWeapon(3, 6, "battleaxe", 2, 1, 5, 1, [], [], "common");
    game.environments[2].items.push(battleaxe);

    // these are rooms that may or may not be implemented! Add and delete these at your own leisure!
    game.addEnvironment("Castle Entrance", "  Whew! That was quite the trek! But you've finally found it! Ravenhill Castle... You've heard a lot about it. Some strange things have been going on here, including, but not limited to kidnappings, experiments, torture... horrendous interior decorating... such HORRORS! And they must be stopped! Go now my friend! Enter the castle gates with CMD Move!", [], [], [], []);
    game.addEnvironment("Foyer", "  Quite the entrance! The room is filled with grandiose decor, with a huge piano, some suits of armor, a massive chandelier worth more than its weight in gold, and plenty of other trinkets the owner has most likely acquired COMPLETELY legally in their past adventures. There's two stairways and multiple hallways but feel a strange energy towards the corridor in front of you.", [], [], [], []);
    game.addEnvironment("Dining Hall", "  Jeez, the table in here is longer than the distance it took you to get to the castle... Does this guy really have that many friends? Nevertheless the table seemed to be being prepared at some point, but was interrupted. The a fire burns bright in the fireplace and only half of the chairs seem to have any settings. There is some sort of smell in the air though. And there's a door open on the other side of the room...", [], [], [], []);
    game.addEnvironment("Kitchen", "  ", [], [], [], []);
    game.addEnvironment("Stairs Landing", "", [], [], [], []);
    game.addEnvironment("Stairs Landing", "", [], [], [], []);
    return game;
  }
}
