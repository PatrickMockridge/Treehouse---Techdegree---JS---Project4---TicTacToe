
// invoking the module pattern
(function () {
// use strict
'use strict'
// append start screen div
$('body').append("<div class='screen screen-start' id='start'><header><h1>Tic Tac Toe</h1><br><p class='message'>Enter Player 1 Name: </p><input type='text' class='player1Name' name='player1Name'><br><p class='message'>Enter Player 2 Name: </p><input type='text' class='player2Name' name='player2Name'><br><label><input type='checkbox' class='AI' /> Play the Computer?</label><br><a href='#' class='button start'>Start game</a></header></div>");
// append player 1 wins screen div
$('body').append("<div class='screen screen-win-one' id='finish'><header><h1>Tic Tac Toe</h1><p class='message'> Wins!</p><a href='#' class='button'>New game</a></header></div>");
// append player 2 wins screen div
$('body').append("<div class='screen screen-win-two' id='finish'><header><h1>Tic Tac Toe</h1><p class='message'> Wins!</p><a href='#' class='button'>New game</a></header></div>");
// append it's a tie div
$('body').append("<div class='screen screen-win-draw' id='finish'><header><h1>Tic Tac Toe</h1><p class='message'>It's a Tie!</p><a href='#' class='button'>New game</a></header></div>");
//make text box look nicey
$(':text').css({
    "width": "30%",
    "padding": "12px 20px",
    "margin": "8px 0",
    "box-sizing": "border-box",
    "border-radius": "6px"
});

$('label').css({
    'display': 'block',
    'padding-left': '15px',
    'text-indent': '-15px',
  });

$(':checkbox').css ({
    'width': '13px',
    'height': '13px',
    'padding': '0',
    'margin': '0',
    'vertical-align': 'bottom',
    'position': 'relative',
    'top': '-1px',
    '*overflow': 'hidden'
});
// when checkbox toggled, engage AI or not
var computerPlay = false;
$(".AI").change(function() {
    if(this.checked) {
      computerPlay = true;
      console.log(computerPlay);
      return computerPlay;
    }
    else {
      computerPlay = false;
      return computerPlay;
    }
});

//set count variable to zero modulo of count variables decides whose turn it is
var count = 0;
//declare all initial box state variables
var a1o = false;
var a1x = false;
var a2o = false;
var a2x = false;
var a3o = false;
var a3x = false;
var b1o = false;
var b1x = false;
var b2o = false;
var b2x = false;
var b3o = false;
var b3x = false;
var c1o = false;
var c1x = false;
var c2o = false;
var c2x = false;
var c3o = false;
var c3x = false;
// no winners yet but need global variables declared
var player1Win = false;
var player2Win = false;


// set IDs of Boxes in order to be able to see who's won
var boxCount = 1;
$('.boxes > .box').each(function(index) {
  $(this).attr("id", boxCount)
  boxCount++
});
// declare winner
var winner = function () {
  if (player1Win) {
    $('.board').hide();
    $('.screen-win-one').show();
    }
  else if (player2Win) {
      $('.board').hide();
      $('.screen-win-two').show();
    }
  };
var itsATie = function () {
  $('.board').hide();
  $('.screen-win-draw').show();
}
// hide everything but the start screen on first load
$('.screen-win-one').hide();
$('.screen-win-two').hide();
$('.screen-win-draw').hide();
$('.board').hide();
// if text has been entered for player names, replaced O and X in the board page header with the names entered and change the winning screens
$('.button').click(function() {
  var player1Name = $(".player1Name").val();
  if (player1Name) {
  $('#player1').html("<p style='color:black;'>" + player1Name + "</p>");
  $('.screen-win-one').find('.message').html(" " + player1Name + " Wins!");
  }
  var player2Name = $(".player2Name").val();
  if (player2Name) {
  $('#player2').html("<p style='color:black;'>" + player2Name + "</p>");
  $('.screen-win-two').find('.message').html(" " + player2Name + " Wins!");
  }
});

// clicking on a button either starts or restarts the game
$('.button').click(function() {
  count = 0;
  $('.box').removeClass('box-filled-1 box-filled-2');
  $('.screen').hide();
  $('.board').show();
  $('#player1').addClass('active');
  $('#player2').removeClass('active');
  console.log(count);
  return count;
});
// reset winning boolean values
$('.button').click(function() {
  player1Win = false;
  return player1Win;
});
$('.button').click(function() {
  player2Win = false;
  return player2Win;
});
// set hover state with mouover/mouseout
$( ".box" ).mouseover( function() {
  //don't adjust boxes with existing state
  if (!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')) {
  if (count%2 == 0) {
    $(this).css("background-image", "url(./img/o.svg)");
  }
  //otherwise it's player 2's turn
  else {
    $(this).css("background-image", "url(./img/x.svg)");
  }
}
  });
 // take away image on mouseout
$( ".box" ).mouseout(function() {
  $(this).css("background-image", "");
});
$('.box').click(function() {
  //don't adjust boxes with existing state
  if (!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')) {
  // if it's player 1's turn
  if (count%2 == 0) {
    $(this).addClass('box-filled-1');
    $('#player2').addClass('active');
    $('#player1').removeClass('active');
  }
  //otherwise it's player 2's turn
  else {
        $(this).addClass('box-filled-2');
        $('#player1').addClass('active');
        $('#player2').removeClass('active');
  }
  a1o = $('#1').hasClass("box-filled-1");
  a1x = $('#1').hasClass("box-filled-2");
  a2o = $('#2').hasClass("box-filled-1");
  a2x = $('#2').hasClass("box-filled-2");
  a3o = $('#3').hasClass("box-filled-1");
  a3x = $('#3').hasClass("box-filled-2");
  b1o = $('#4').hasClass("box-filled-1");
  b1x = $('#4').hasClass("box-filled-2");
  b2o = $('#5').hasClass("box-filled-1");
  b2x = $('#5').hasClass("box-filled-2");
  b3o = $('#6').hasClass("box-filled-1");
  b3x = $('#6').hasClass("box-filled-2");
  c1o = $('#7').hasClass("box-filled-1");
  c1x = $('#7').hasClass("box-filled-2");
  c2o = $('#8').hasClass("box-filled-1");
  c2x = $('#8').hasClass("box-filled-2");
  c3o = $('#9').hasClass("box-filled-1");
  c3x = $('#9').hasClass("box-filled-2");

  //check if player one won
  var checkWin = function () {
      // row 1
      if ((a1o && a2o && a3o)  ||
      // or row 2
      (b1o && b2o && b3o) ||
      //or row 3
      (c1o && c2o && c3o) ||
      // or column 1
      (a1o && b1o && c1o) ||
      // or column 2
      (a2o && b2o && c2o) ||
      // or column 3
      (a3o && b3o && c3o) ||
      // or diagonal 1
      (a1o && b2o && c3o) ||
      // or diagonal 2
      (a3o && b2o && c1o)
      ){
          player1Win = true;
          winner();
      // check if player two won
      } else {
        // row 1
        if ((a1x && a2x && a3x)  ||
        // row 2
        (b1x && b2x && b3x) ||
        // row 3
        (c1x && c2x && c3x) ||
        // column 1
        (a1x && b1x && c1x) ||
        // column 2
        (a2x && b2x && c2x) ||
        // column 3
        (a3x && b3x && c3x) ||
        // diagonal 1
        (a1x && b2x && c3x) ||
        // diagonal 2
        (a3x && b2x && c1x)
        ) {
              player2Win = true;
              winner();

          }
      }
    }
  checkWin();
  count++;
  console.log(count);
  //if all box full and still no winner
  if (!player1Win && !player2Win && (count == 9)) {
    //it's a tie!
    itsATie();
  }
  //Paying against the computer. If checkbox was ticked
  if (computerPlay) {
    // and if it's X's turn
    if (count%2 == 1) {
      //create a function for the AI to move
      var moveComp = function() {
        //pick a random number
        var ran = Math.floor(Math.random()*9);
        //if it already has been picked
        if ($('.boxes li').eq(ran).hasClass('box-filled-1') || $('.boxes li').eq(ran).hasClass('box-filled-2')) {
          //pick another random number
          moveComp();
        }
        //if the random number is good
        else {
        //take X's turn
        $('.boxes li').eq(ran).addClass('box-filled-2');
        $('#player1').addClass('active');
        $('#player2').removeClass('active');

        //assign checkwin variables

        a1o = $('#1').hasClass("box-filled-1");
        a1x = $('#1').hasClass("box-filled-2");
        a2o = $('#2').hasClass("box-filled-1");
        a2x = $('#2').hasClass("box-filled-2");
        a3o = $('#3').hasClass("box-filled-1");
        a3x = $('#3').hasClass("box-filled-2");
        b1o = $('#4').hasClass("box-filled-1");
        b1x = $('#4').hasClass("box-filled-2");
        b2o = $('#5').hasClass("box-filled-1");
        b2x = $('#5').hasClass("box-filled-2");
        b3o = $('#6').hasClass("box-filled-1");
        b3x = $('#6').hasClass("box-filled-2");
        c1o = $('#7').hasClass("box-filled-1");
        c1x = $('#7').hasClass("box-filled-2");
        c2o = $('#8').hasClass("box-filled-1");
        c2x = $('#8').hasClass("box-filled-2");
        c3o = $('#9').hasClass("box-filled-1");
        c3x = $('#9').hasClass("box-filled-2");
        //check for the win
        checkWin();
        //counter goes up
        count++;
        //if all box full and still no winner
        if (!player1Win && !player2Win && (count == 9)) {
          //it's a tie!
          itsATie();
          //return the count to the global scope
        return count;
        }
      }
    }
    //computer takes turn
    moveComp();
  }}
    return count;
  }
});
//closing module pattern
}());
