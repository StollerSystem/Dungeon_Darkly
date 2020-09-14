import {  Status, Equip, Character } from './character_class.js';

export default class Monster extends Character{  
  constructor(id,name,abilityScores,mainType,cr,hp,mp,inv,behaviors) {
    super();
    this.id = id, 
    this.name = name,
    this.abilityScores = abilityScores,
    this.type = {"main":mainType},
    this.cr = cr,
    this.hp = hp,
    this.mp = mp,
    this.status = new Status(),
    this.inv = inv,
    this.equip = new Equip(),
    this.baseAc = 10+ abilityScores.scoreMod('dex'),  
    this.behaviors = behaviors 
  }  
}