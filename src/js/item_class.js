export class Item {
  constructor(name,Id,worth,Hp,level,status,flags,rarity) {
    this.name = name
    this.Id = Id
    this.worth = worth
    this.Hp = Hp
    this.level = level
    this.status = status
    this.flags = flags
    this.rarity = rarity 
  }
}

export class Weapon extends Item {
  constructor(slot,atk,dam,name,Id,worth,Hp,level,status,flags,rarity) {
    super(name,Id,worth,Hp,level,status,flags,rarity)
    this.atk = atk
    this.dam = dam
    this.slot = slot
  }
}

export class Armor extends Item {
  constructor(slot,acBonus,type,name,Id,worth,Hp,level,status,flags,rarity) {
    super(name,Id,worth,Hp,level,status,flags,rarity)
    this.acBonus = acBonus  
    this.type = type  
    this.slot = slot
  }
}