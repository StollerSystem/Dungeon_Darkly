import Game from './game_class.js';

//addMonster(id,name,mainType,cr,hp,mp,[],[],str,dex,con,wis,int,chr,lck)
// Double check that values are up to date! :D

export default class GameInit {
  static getGame() {
    let game = new Game([], [], [], []);
    // Add CastleRoom
    //0
    game.addEnvironment("Castle Entrance", "     Whew! That was quite the trek! But you've finally found it! Ravenhill Castle... You've heard a lot about it. Some strange things have been going on here, including, but not limited to kidnappings, experiments, torture... atrocious interior decorating... such HORRORS! And they must be stopped! Go now my friend!", [], [], [], []);
    let scaryShiz = game.addMonster(2, "Rabid Wolf", "shiz", 1, 20, 0, [], [], 20, 12, 10, 6, 6,
      6, 6);
    game.environments[0].monsters.push(scaryShiz);
    let potion = game.addItem("Health Potion",1,1,5,1,[],[],"common");
    game.environments[0].items.push(potion);
    //1
    game.addEnvironment("Foyer", "     Quite the entrance! The room is filled with grandiose decor, with a huge piano, some suits of armor, a massive chandelier worth more than its weight in gold, and plenty of other trinkets the owner has most likely acquired COMPLETELY legally in their past adventures. There's two stairways and multiple hallways but feel a strange energy towards the corridor in front of you.", [], [], [], []);
    let scaryShiz2 = game.addMonster(2, "Demonic Butler", "shiz", 1, 7, 0, [], [], 6, 12, 10, 6, 6,
      6, 6);
    game.environments[1].monsters.push(scaryShiz2);

    //2
    game.addEnvironment("Dining Hall", "     Jeez, the table in here is longer than the distance it took you to get to the castle... Does this guy really have that many friends? Nevertheless the table seemed to be being prepared at some point, but was interrupted. The a fire burns bright in the fireplace and only half of the chairs seem to have any settings. There is some sort of smell in the air though. And there's a door open on the other side of the room...", [], [], [], []);
    let scaryShiz3 = game.addMonster(2, "Goblin", "shiz", 1, 7, 0, [], [], 6, 12, 10, 6, 6,
      6, 6);
    game.environments[2].monsters.push(scaryShiz3);

    //3
    game.addEnvironment("Kitchen", "     Now that you're in here... That smell is DEFINITELY not appealing... You do not dare to look inside the cauldron boiling with some unknown contents in the corner. Other than this, it seems like a fairly standard kitchen. Surely there's SOMETHING edible in here. The only other door in here leads to an adjacent hallway.", [], [], [], []);
    let scaryShiz4 = game.addMonster(2, "Creepy Chef", "shiz", 1, 7, 0, [], [], 6, 12, 10, 6, 6,
      6, 6);
    game.environments[3].monsters.push(scaryShiz4);
    
    //4
    game.addEnvironment("Castle Room", "     After meandering through the halls for a short time, you come across a dark, dank room. The feng shuay in here leaves a lot to be desired... A simple study, a very stained rug, and some very strange paintings occupy this room. There is a stairway leading down in here as well.", [], [], [], []);
    let scaryShiz5 = game.addMonster(2, "Zombie", "shiz", 1, 7, 0, [], [], 6, 12, 10, 6, 6,
      6, 6);
    game.environments[4].monsters.push(scaryShiz5);
    
    //5
    game.addEnvironment("Stairs Landing", "    The first step you take into this room, you feel a heavy weight on your shoulders. Like someone is pressing down on you. You'd really like to leave, but you've got your quest... It's your job to finish it. The room appears to be a pantry of sorts but there seems to be a long hallway leading somewhere else...", [], [], [], []);
    let scaryShiz6 = game.addMonster(2, "Banshee", "shiz", 1, 7, 0, [], [], 6, 12, 10, 6, 6,
      6, 6);
    game.environments[5].monsters.push(scaryShiz6);

    //6
    game.addEnvironment("Torture Chamber", "     Considering the amount of blood and strange contraptions, lord only knows the unfortunate things that have occured down here. It sends a shiver down your spine even thinking about it.", [], [], [], []);
    let scaryShiz7 = game.addMonster(2, "Goblin Torturer", "shiz", 1, 7, 0, [], [], 6, 12, 10, 6, 6,
      6, 6);
    game.environments[6].monsters.push(scaryShiz7);
    
    //7
    game.addEnvironment("Dungeon", "     This room has barely any light to it. A single torch hanging on the wall does little to illuminate this dungeon. Although considering the many hanging chains and the fact that you can hear some type of liquid dripping, maybe that's for the best...", [], [], [], []);
    let scaryShiz8 = game.addMonster(2, "Large Toad", "shiz", 1, 7, 0, [], [], 6, 12, 10, 6, 6,
      6, 6);
    game.environments[7].monsters.push(scaryShiz8);

    //8
    game.addEnvironment("The Altar", "     The room is massive... way bigger than you'd think to be in a castle by itself... But at the far end you can see it: (THE FINAL BOSS WHICH I HAVE YET TO FIGURE OUT HOLY CRAP BRO-DIDDLY-DADDILY.) This is it! You must do your duty and stop it!", [], [], [], []);
    let scaryShiz9 = game.addMonster(2, "Demon Man", "shiz", 1, 7, 0, [], [], 6, 12, 10, 6, 6,
      6, 6);
    game.environments[8].monsters.push(scaryShiz9);

    return game;
  }
}


