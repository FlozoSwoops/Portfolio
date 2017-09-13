$(function(){
    alert("Everything is ready, let's do this");
});
let catOne = {
    Catagory: "Javascript",
    questions: ["Let type = [2,3,4] is an example of?","Truthy and falsy are examples of this type.", "This company created Javascript?", "Javascript was created in a year", "Let type = {} is an example of what?"],
    answers: ["javascript", "array", "boolean", "netscape", "false", "empty object"]
}


}

// let htmlQuestions = {
//     Catagory:
//     hundredDollarQ: 
//     twoHundredDollarQ: 
//     threeHundredDollarQ: 
//     fourHundredDollarQ: 
//     fiveHundredDollarQ: 
// }

// let cssQuestions = {
//     }

// let jqueryQuestions = {
//     }
//creating empty array to push question into
const $qDisplay = $('#qDisplay');
const $visible = function() {
    $qDisplay.css('display','');
}
const $invisible = function() { 
    $qDisplay.css('display','none');
}

$invisible()

const emptyArray = []

//create click funtionality 
const $one = $('.one');
$one.on('click'(function () {
  for(i=0, i < catOne.questions)

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