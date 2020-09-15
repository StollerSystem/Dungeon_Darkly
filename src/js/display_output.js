import $ from 'jquery';

// delete lines after a while 

export default class Display {
  
  static output(html) {    
    
    $("#output").append(`Output: ${html}<br>`);
  }
}