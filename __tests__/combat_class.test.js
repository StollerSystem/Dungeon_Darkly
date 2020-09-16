import Combat from '../src/js/combat_class.js';

describe('Combat', () => {

  test('should create a combat object', () =>{
    let combat1 = new Combat();
    expect(combat1.TEST).toEqual("test")   
  });
})