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

let cssQuestions = {
    }

let jqueryQuestions = {
    }

//create click funtionality 
const $one = $('.one');
$('.one').click (function () {
    alert(catOneQuestions.hundredDollarQ);
    


});

const $two = $('.two');
$two.click (function () {
    alert("cat two question selected");
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
//pulls question from coresponding object

//slide in screen question on a form

//if type in the correct answer given message of correct