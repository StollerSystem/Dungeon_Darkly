import Environment from '../src/js/environment_class.js'; 

describe('Environment', ()=> {
  
  test('should creat an environment object', () => {
      const environment = new Environment(1,1,1,1,1,1)
      expect(environment.name).toEqual(1)
      expect(environment.description).toEqual(1)
      expect(environment.items).toEqual(1)
      expect(environment.monsters).toEqual(1)
      expect(environment.players).toEqual(1)
      expect(environment.exits).toEqual(1) 
  });
});

