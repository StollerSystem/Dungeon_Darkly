import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {

  $("#char-create").submit(function (event) {
    event.preventDefault();
    const name = $("#char-name").val();
    const race = $("input:radio[name=char-race]:checked").val();
    const charClass = $("input:radio[name=char-class]:checked").val();
    console.log(name, race, charClass);

    $("#main-screen").hide();
    $("#gameplay-screen").show();
  });

  $("#command-form").submit(function(event) {
    event.preventDefault();
    let command = $("#commandLine").val();
    console.log(command);
    $("#terminalOutput").append("<br>" + command);
  })
});