export class AbilityScores {
  constructor(str,dex,con,wis,int,chr,lck) {
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.wis = wis;
    this.int = int;
    this.chr = chr;
    this.lck = lck; 
  }

  scoreMod (score) {
    let mod = (this[score]-10)/2;
    if (mod < 0) {
      return Math.floor(mod);
    } else {
      return parseInt(mod);
    }
  }  
}

export class Status{
  constructor(){
    this.blinded = false,
    this.charmed = false,
    this.deafened = false,
    this.dehydrated = false,
    this.enraged = false,
    this.exhausted = false,
    this.flying = false,
    this.freezing = false,
    this.frightened = false,
    this.grappled = false,
    this.hidden = false,
    this.incapacitated = false,
    this.invisible = false,
    this.paralyzed = false,
    this.petrified = false,
    this.poisoned = false,
    this.prone = false,
    this.restrained = false,
    this.starving = false,
    this.stunned = false,
    this.surprised = false,
    this.unconscious = false;
  }
}

export class Equip{
  constructor(){
    this.head = [],
    this.face = [],
    this.torso = [],
    this.back = [],
    this.neck = [],
    this.arm = [],
    this.hand = [],
    this.rings = [],
    this.body = [],
    this.waist = [],
    this.legs = [],
    this.mainHand = [],
    this.offHand = [];
  }
}

export class Character { 
  //super(id,name,abilityScores,hp,mp,inv); ref for eventual add
  addItemInv(item) {
    this.inv.push (item);
  }

  addItemEquip(item) {
    let slot = item.slot;
    this.equip[slot].push(item);
  }

  roll(num,side,mod,adj){
    let total;
    if (!mod){
      total = 0;
    } else {
      total = mod;
    }
    let min;
    if (!adj){
      min = 1;
    } else {
      min = 1 + adj;
    }
    for (let i=0;i<num;i++){
      let roll = ((min-1) + Math.ceil(Math.random() * (side-min + 1)));
      total += roll;
      // console.log(`d${side} rolled: ${roll}`);
    }
    // console.log(`${num}d${side} rolled, with a modifier of ${mod}. Total is: ${total}`);
    return total;
  }

  abilityScoreMatch(score,target) {
    let abilityScores = this.abilityScores;
    let checked = abilityScores[score];
    if (checked >= target){
      return true;
    } else {
      return false;
    }
  }

  abilityScoreCheck(score) {
    let abilityScores = this.abilityScores;
    let mod = abilityScores.scoreMod[score];
    return this.roll(1,20,mod);
  }
  
  equipCheck(){
    let totalAcBonus = 0;
    for (let equipSlot in this.equip){      
      for (let eqpiece of this.equip[equipSlot]){               
        totalAcBonus += eqpiece.acBonus;
      }
    }
    this.baseAc += totalAcBonus;
  }

  attackRoll(){
    let weapon;
    let attackMod;
    if (this.equip.mainHand[0]){
      weapon = this.equip.mainHand[0];
      attackMod = this.abilityScores.scoreMod[weapon.atk[0]]+weapon.atk[1]+this.level;
    } else {
      attackMod = this.abilityScores.scoreMod('str')+this.level; 
    }
    return this.roll(1,20,attackMod);
  }

  damageRoll(){
    let weapon;
    let damageMod;
    let damageDiceNumber;
    let damageDiceSides;
    if (this.equip.mainHand[0]){
      weapon = this.equip.mainHand[0];
      damageMod = this.abilityScores.scoreMod[weapon.atk[0]];
      damageDiceNumber = weapon.dam[0];
      damageDiceSides = weapon.dam[2];
    } else {
      damageMod = this.abilityScores.scoreMod('str'); 
      damageDiceNumber = 1;
      damageDiceSides = 4;
    }
    return this.roll(damageDiceNumber,damageDiceSides,damageMod);
  }

  hide(){
    this.status.hidden = 'true';
  }
} // end Character class