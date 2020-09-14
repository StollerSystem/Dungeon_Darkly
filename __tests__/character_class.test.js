import { AbilityScores } from '../src/js/character_class.js';

describe('AbilityScores', () => {
  
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
});