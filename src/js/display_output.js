import $ from 'jquery';
import draw from './canvas.js';

// delete lines after a while 

export default class Display {

  static output(output) {

    $("#terminalOutput").append("<br>>" + output);
  
  }

  static updateMap(number) {
    draw(number);
  }
}