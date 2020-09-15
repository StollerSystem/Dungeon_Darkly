import { AbilityScores } from '../src/js/character_class.js';
import Game from '../src/js/game_class.js';

describe('AbilityScores', () => {
    let rpg; 
    let player1;
    let monster1;
    beforeEach(() => {
      rpg = new Game([],[],[],[])
      player1 = rpg.addPlayer("jake","human","wizard","6","40","20","60","30",[],10,10,10,10,10,10,10);
      monster1 = rpg.addMonster(1,"Monster Jake","monster",1,8,500,[],[],10,10,10,10,10,10,10);
  });

  test('test 1 should create ability score', () => {
  const ability1 = new AbilityScores (2,3,4,5,6,7,8)
  expect(ability1.str).toEqual(2)
  expect(ability1.dex).toEqual(3)
  expect(ability1.con).toEqual(4)
  expect(ability1.wis).toEqual(5)
  expect(ability1.int).toEqual(6)
  expect(ability1.chr).toEqual(7)
  expect(ability1.lck).toEqual(8)
  });

  test('test 2 should calculate an ability score modifier from raw score', () => {
    const ability1 = new AbilityScores (7,8,9,11,12,13,14)
    expect(ability1.scoreMod('str')).toEqual(-2)
    expect(ability1.scoreMod('dex')).toEqual(-1)
    expect(ability1.scoreMod('con')).toEqual(-1)
    expect(ability1.scoreMod('wis')).toEqual(0)
    expect(ability1.scoreMod('int')).toEqual(1)
    expect(ability1.scoreMod('chr')).toEqual(1)
    expect(ability1.scoreMod('lck')).toEqual(2)
  });

  test('test 3 should roll an ability score check from a player object', () => {
    let player3 = rpg.addPlayer("jake","human","wizard","6","40","20","60","30",[],16,10,10,10,10,10,10);
    let player3StrCheck = player3.abilityScoreCheck('str');
    expect(player3StrCheck).toBeGreaterThanOrEqual(4);
    expect(player3StrCheck).toBeLessThanOrEqual(23);
  });

  test('test 4 should roll an attack roll from a player object', () => {
    let player4 = rpg.addPlayer("jake","human","wizard","6","40","20","60","30",[],16,10,10,10,10,10,10);
    let player4AttackRoll = player4.attackRoll();
    expect(player4AttackRoll).toBeGreaterThanOrEqual(4);
    expect(player4AttackRoll).toBeLessThanOrEqual(23);
  });
});