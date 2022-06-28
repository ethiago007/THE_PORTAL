import $ from 'jquery';

export default function Simon() {
  this.sequenceMade = [];
  this.sequenceUser = [];
  this.levelCounter = 0;
}

//This generates a random number and pushes it to the sequenceMade.
Simon.prototype.nextSequence = function () {
  let randomNumber = Math.floor(Math.random() * 4);
  this.sequenceMade.push(randomNumber);
  this.showSequence(this.sequenceMade[this.sequenceMade.length - 1]);
  this.changeLevel();
  this.sequenceUser = [];
};

//This displays the color  of each option
Simon.prototype.showSequence = function (element) {

  switch (element) {
    case 0:
      $("#green").addClass("dissapear");
      setTimeout(function () {
        $("#green").removeClass("dissapear");
      }, 250);
      break;
    case 1:
      $("#red").addClass("dissapear");
      setTimeout(function () {
        $("#red").removeClass("dissapear");
      }, 250);
      break;
    case 2:
      $("#yellow").addClass("dissapear");
      setTimeout(function () {
        $("#yellow").removeClass("dissapear");
      }, 250);
      break;
    case 3:
      $("#blue").addClass("dissapear");
      setTimeout(function () {
        $("#blue").removeClass("dissapear");
      }, 250);
      break;
  }
};

Simon.prototype.changeLevel = function () {
  this.levelCounter++;
  $("#level-title").text(`Level: ${this.levelCounter}`);

};

//This checks if the sequences is correct so far
Simon.prototype.checkSequence = function (indexOfArray) {

  if (this.sequenceUser[indexOfArray] === this.sequenceMade[indexOfArray]) {

    if (this.sequenceMade.length === this.sequenceUser.length) {
      let me = this;
      setTimeout(function () {
        me.nextSequence();
      }, 1000);
    }
  } else {
    this.launchError();
  }
};

// Launches error sequence
Simon.prototype.launchError = function () {
  $("body").css("background-color", "red");
  $("h1").text("Game Over");
  setTimeout(function () {
    $("h1").text("Press Enter Key to start");
    $("body").css("background-color", "#011F3F");
  }, 1500);

  this.levelCounter = 0;
  this.sequenceMade = [];
};