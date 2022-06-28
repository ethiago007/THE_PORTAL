import Simon from './simon.js';
import './css/styles.css';
import $ from 'jquery';

let simon = new Simon;
//Press key to start
/* green = 0, red= 1, yellow =2, blue=3 */
$(document).on("keydown", function (e) {
  if (e.keyCode === 13) {
    simon.nextSequence();
  }
});

//This converts the clicks into numbers and pushes it to a new array.
$(".btn").click(function () {
  let userClicked = $(this).attr("id");
  switch (userClicked) {
    case "green":
      simon.sequenceUser.push(0);
      simon.showSequence(0);
      break;

    case "red":
      simon.sequenceUser.push(1);
      simon.showSequence(1);
      break;

    case "yellow":
      simon.sequenceUser.push(2);
      simon.showSequence(2);
      break;

    case "blue":
      simon.sequenceUser.push(3);
      simon.showSequence(3);
      break;
  }
  simon.checkSequence(simon.sequenceUser.length - 1);
});

