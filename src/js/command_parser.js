import $ from 'jquery';

export default class Command {

  static inputParser(input) {
    //console.log("cp",input)
    $("#output").append("CP TEST")
    return "cp"+input
  }
  
}