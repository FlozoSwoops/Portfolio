$(function(){
    let username = prompt('Enter Username');
});
let catOne = {
    Catagory: "Javascript",
    questions: ["Let type = [2,3,4] is an example of?","Truthy and falsy are examples of what data type.", "This company created Javascript?", "Javascript was created in a year", "Let type = {} is an example of what?"],
    answers: ["array", "boolean", "netscape", "false", "empty object"],
    score: [100, 200, 300, 400, 500]
}




 let catTwo = {
     Catagory: "html",
     questions: ["Which tag allows you to create a button?", "Inline styling is a good way to add changes to elements.", "The default display for a span is _____?","Prompts require user input.","By default which h tag has the largest font?"],
     answers: ["button", "False", "inline", "True","h1" ]
     
 }

let catThree = {
    catagory: "CSS",
    questions: ["A . before a selector indicates?", "In order to activate flexbox, display must be set to what?"],
    answers: ["class", "flex", ],
    score: [100, 200, 300, 400, 500]
    }

let catFour = {
    catagory: "Jquery",
    questions: [],
    answers: [],
    score: [100, 200, 300, 400, 500]
     }

let catFive = {
    catagory: "",
    questions: [],
    answers: [],
    score: [100, 200, 300, 400, 500]
}
//creating empty array to push question into
const $qDisplay = $('#qDisplay');

const emptyArray = []
// Calculate Score
const $playerOne = $('#playerOne');
let playerScore = 000;
$playerOne.append('<script> playerOne</script>')

function addScore() {
   playerScore = catOne.score[0] + playerScore;
};

function subtractScore() {
    playerScore = playerScore - catOne.score
};
$playerOne.html(playerScore)

//create click funtionality 
const $one = $('.one');
$one.click (function () {
  alert (catOne.questions[0]);
  let getAnswer = window.prompt("Enter Answer")
    if (getAnswer === catOne.answers[0]) {
      alert ('correct')
      addScore()
    }
    else {
        alert('incorrect')
        subtractScore()
    }
    catOne.questions.splice(0,1)
    catOne.answers.splice(0,1)
    
    });

const $two = $('.two');
$two.click (function () {
    alert("cat two question selected");
    $('qDisplay').css('display', 'visible')
});

const $three = $('.three');
$three.click (function () {
    alert("cat three question selected");
});

const $four = $('.four');
$four.click (function () {
    alert("cat four question selected");
});

const $five = $('.five');
$five.click (function () {
    alert("cat five question selected");
});
//pulls question from  object

//unhides qDisplay
//display question in center
//slide in screen question on a form

//if type in the correct answer given message of correct