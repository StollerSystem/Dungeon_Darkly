import $ from 'jquery';

// delete lines after a while 

export default class Display {
  
  static output(output) {    
    
    $("#terminalOutput").append("<br>>" + output);
  }
}