import { Item } from '../src/js/item_class.js';

describe('Item', () => {

  test('should create an item object', () =>{
    const item = new Item("test",1,5,5,1,[],[],"common")
    expect(item.name).toEqual("test")
    expect(item.Id).toEqual(1)
    expect(item.worth).toEqual(5)
    expect(item.Hp).toEqual(5)
    expect(item.level).toEqual(1)
    expect(item.status).toEqual([])
    expect(item.flags).toEqual([])
    expect(item.rarity).toEqual("common")    
  });
})