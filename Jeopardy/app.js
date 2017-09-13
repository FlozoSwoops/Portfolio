$(function(){
    alert("Everything is ready, let's do this");
});
let catOneQuestions = {
    Catagory: "Javascript",
    hundredDollarQ: "Let type = [2,3,4] is an example of?",
    twoHundredDollarQ: "Truthy and falsy are examples of this type.",
    threeHundredDollarQ: "This company created Javascript?",
    fourHundredDollarQ: "Javascript was created in a year",
    fiveHundredDollarQ: "Let type = {} is an example of what?",
}

let catOneAnswers = {
    Catagory: "Javascript",
    hundredDollarA: "Array",
    twoHundredDollarA: "Boolean",
    threeHundredDollarA: "Netscape",
    fourHundredDollarA: "False",
    fiveHundredDollarA: "Empty Object?",
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
    $qDisplay.css('display','fit');
}
const $invisible = function() { 
    $qDisplay.css('display','none');
}

$invisible()

const emptyArray = []

//create click funtionality 
const $one = $('.one');
$('.one').click (function () {
    $visible();
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