import { Status, Equip, Character } from './character_class.js';

export class Player extends Character{
  constructor(name,abilityScores,race,pclass,level,xp,hp,mp,hunger,inv) {
    super();
    this.name = name
    this.abilityScores = abilityScores
    this.race = race
    this.pclass = pclass
    this.level = level
    this.xp = xp
    this.hp = hp
    this.mp = mp
    this.status = new Status()
    this.hunger = hunger
    this.inv = inv
    this.equip = new Equip()
    this.baseAc = 10+ abilityScores.scoreMod('dex')
  }  
};