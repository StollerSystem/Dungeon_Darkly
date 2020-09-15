// import $ from 'jquery';
import Display from './display_output.js'

export default class Command {

  static inputParser(input) {
    //console.log("cp",input)
    // $("#output").append("CP TEST")
    // return "cp"+input
    Display.output(`<u>${input}</>`);
  }
  
}