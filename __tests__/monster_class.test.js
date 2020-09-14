import Monster from '../src/js/monster_class.js';
import { AbilityScores } from '../src/js/character_class.js';


describe('Monster', () => {
  let monster;
  beforeEach(() => {
    let abilityScores = new AbilityScores(1,1,1,1,1,1,1)
    monster = new Monster(1,1,abilityScores,1,1,1,1,1,1);
  });
  
  test('should create a monster object', () =>{    
    expect(monster.id).toEqual(1);
    expect(monster.name).toEqual(1);
    expect(monster.abilityScores.dex).toEqual(1);
    expect(monster.type.main).toEqual(1);
    expect(monster.cr).toEqual(1);
    expect(monster.hp).toEqual(1);
    expect(monster.mp).toEqual(1);
    expect(monster.status.blinded).toEqual(false);
    expect(monster.inv).toEqual(1);
    expect(monster.equip.head).toEqual([]);    
    expect(monster.behaviors).toEqual(1);   
  });
})