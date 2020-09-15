import Command from '../src/js/command_parser.js';

describe('Command Parser', () => {


  test('return input', () =>{
    expect(Command.inputParser("test")).toEqual("test")
  });

})  