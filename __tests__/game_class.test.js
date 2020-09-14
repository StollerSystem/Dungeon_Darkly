import Game from '../src/js/game_class.js';

describe('Game', () => {
    let rpg; 
    let player1;
    let monster1;
    beforeEach(() => {
      rpg = new Game([],[],[],[])
      player1 = rpg.addPlayer("jake","human","wizard","6","40","20","60","30",[],10,10,10,10,10,10,10);
      monster1 = rpg.addMonster(1,"Monster Jake","monster",1,8,500,[],[],10,10,10,10,10,10,10);
  });

  test('Test 1 should create a game object', () =>{    
    expect(rpg.players).toEqual([])
    expect(rpg.items).toEqual([])
    expect(rpg.monsters).toEqual([])
    expect(rpg.environments).toEqual([])
  });

  test('Test 2 should add a new environment', () =>{    
    rpg.addEnvironment(1,1,1,1,1,1,)
    expect(rpg.environments[0].name).toEqual(1)
  });

  test('Test 3 should create a new player', () =>{
    expect(player1.name).toEqual("jake")
  });

  test('Test 4 should add a player to an environment', () => {
    rpg.addEnvironment("Castle","A dusty castle, long abandoned and full of monsters and secrets.",[],[],[player1],[]);
    expect(rpg.environments[0].players[0]).toEqual(player1);
  });

  test('Test 5 should add a monster to an environment', () => {
    // let monster1 = rpg.addMonster("Monster Jake",1,8,500,[],[],100,[],"stats");
    rpg.addEnvironment("Castle","A dusty castle, long abandoned and full of monsters and secrets.",[],[monster1],[],[]);
    expect(rpg.environments[0].monsters[0]).toEqual(monster1);
  });

  test('Test 6 should add an item to a player', () => {
    let item1 = rpg.addItem("Taco",1,200,70,5,[],[],"rare");
    player1.addItemInv(item1);
    expect(player1.inv[0]).toEqual(item1);
  });  

  test('Test 7 should add an item to an environment', () => {
    let sword = rpg.addItem("Sword",1,1,10,1,[],[],"common");
    rpg.addEnvironment("Castle","A dusty castle, long abandoned and full of monsters and secrets.",[sword],[],[],[]);
    expect(rpg.environments[0].items[0]).toEqual(sword);
  });

  test('test 8 should create a weapon subclass', () => {
    let sword = rpg.addWeapon("mainHand",5,5,"Sword",1,1,10,1,[],[],"common");
    expect(sword.atk).toEqual(5);
    expect(sword.dam).toEqual(5);
    expect(sword.name).toEqual("Sword");
  });
  
  test('test 9 add a weapon to a monsters inventory',() => {
    let sword = rpg.addWeapon("mainHand",5,5,"Sword",1,1,10,1,[],[],"common");
    monster1.addItemInv(sword);
    expect(monster1.inv[0].atk).toEqual(5);
  });

  test('Test 10 should add an item, a player, and a monster to an environment, with items in the player and monsters inventory', () => {
    let sword = rpg.addItem("Sword",1,1,10,1,[],[],"common");
    player1.addItemInv(sword);    
    monster1.addItemInv(sword);    
    rpg.addEnvironment("Castle","A dusty castle, long abandoned and full of monsters and secrets.",[sword],[monster1],[player1],[]);    
    expect(rpg.environments[0].players[0].inv[0]).toEqual(rpg.environments[0].monsters[0].inv[0] && rpg.environments[0].items[0]);
  });

  test('test 11 should create a armor subclass', () => {
    let armor = rpg.addArmor("body",5,"heavy","Chest plate",1,1,10,1,[],[],"common");
    expect(armor.acBonus).toEqual(5);
    expect(armor.type).toEqual("heavy");
    expect(armor.name).toEqual("Chest plate");
  });

  test('test 12 should roll a random number without a modifier', () => {
    let t13d6m5 = rpg.roll(3,6);
    let t23d6m5 = rpg.roll(3,6);
    let t33d6m5 = rpg.roll(3,6);
    expect(t13d6m5 && t23d6m5 && t33d6m5).toBeGreaterThanOrEqual(3);
    expect(t13d6m5 && t23d6m5 && t33d6m5).toBeLessThanOrEqual(18);
  });

  test('test 13 should roll a random number and add a modifier to it', () => {
    let t13d6m5 = rpg.roll(3,6,5);
    let t23d6m5 = rpg.roll(3,6,5);
    let t33d6m5 = rpg.roll(3,6,5);
    let t43d6m5 = rpg.roll(1,6,5,1);
    expect(t13d6m5 && t23d6m5 && t33d6m5).toBeGreaterThanOrEqual(8);
    expect(t13d6m5 && t23d6m5 && t33d6m5).toBeLessThanOrEqual(23);
    expect(t43d6m5).toBeGreaterThanOrEqual(7);
    expect(t43d6m5).toBeLessThanOrEqual(12);
  });

  test('test 14 should generate an accurate baseAc for a player based on their abilityScore.dex value', () => {
    let player14 = rpg.addPlayer("jake","human","wizard","6","40","20","60","30",[],10,13,10,10,10,10,10);
    expect(player14.baseAc).toEqual(11)
  });

  test('test 15 should update a players ac value to include the acBonus values of all items in equipment', () => {
    let player15 = rpg.addPlayer("jake","human","wizard","6","40","20","60","30",[],10,13,10,10,10,10,10);
    let armor = rpg.addArmor("body",5,"heavy","Chest plate",1,1,10,1,[],[],"common");
    console.log(`armor.acBonus: ${armor.acBonus}`)
    player15.addItemEquip(armor);
    player15.equipCheck();
    expect(player15.baseAc).toEqual(16);
  });

  //test for armor slots
  //test for weapon slots
  //test for attack methods
  
});

