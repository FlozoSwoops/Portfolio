$(function () {
    let username = prompt('Enter Username');
    $('#username').append(username)
});

let catOne = {
    Catagory: "Javascript",
    questions: ["Let type = [2,3,4] is an example of?", "Truthy and falsy are examples of what data type.", "This company created Javascript?", "Javascript was created in a year", "Let type = {} is an example of what?"],
    answers: ["array", "boolean", "netscape", "false", "empty object"],
    score: [100, 200, 300, 400, 500]
}

let catTwo = {
    Catagory: "html",
    questions: ["Which tag allows you to create a button?", "Inline styling is a good way to add changes to elements.", "The default display for a span is _____?", "Prompts require user input.", "By default which h tag has the largest font?"],
    answers: ["button", "False", "inline", "True", "h1"],
    score: [100, 200, 300, 400, 500]
}

let catThree = {
    catagory: "CSS",
    questions: ["A . before a selector indicates?", "In order to activate flexbox, display must be set to what?", "Which CSS selector has the highest specificity?", "Display: none; hides the content but holds the elements place in the browser.", "Where does you CSS link go inside your html dockument?"],
    answers: ["class", "flex", "id", "false", "head"],
    score: [100, 200, 300, 400, 500]
}

let catFour = {
    catagory: "Skydiving",
    questions: ["Above what altitude are you required to have oxygen on the plane?", "What is the device that automatically acctivates your reserve", "What is the number of jumps required to wear a camera?", "What lisence is required to participate in night jumnps?"],
    answers: ["15,000 feet", "RSL", "200", "B"],
    score: [100, 200, 300, 400, 500]
}

let catFive = {
    catagory: "Base Jumping",
    questions: ["What bridge is legal to jump all year?", "What annual base jumping festival is held in", "How many parachutes are in a base rig?", "Who holds the record for most base jumps in one day?", "What is the West Virginia base jumping festival named?"],
    answers: ["Perrine Bridge", "kl tower", "one", "Miles Dasher", "Bridge Day"],
    score: [100, 200, 300, 400, 500]
}
const $qDisplay = $('#qDisplay');

// function disableCatOne () {
//     if($('.one'))
// }



// Calculate Score
const $playerOneScore = $('#playerOneScore');
let playerScore = 0;
//Math
function addCatOne() {
    playerScore = catOne.score[0] + playerScore
    $playerOneScore.text(playerScore);
};

function subtractCatOne() {
    playerScore = playerScore - catOne.score[0] 
        $playerOneScore.text(playerScore)
};

function addCatTwo() {
    playerScore = catTwo.score[0] + playerScore
    $playerOneScore.text(playerScore);
};

function subtractCatTwo() {
    playerScore = playerScore -
        $playerOneScore.text(playerScore)
};

function addCatThree() {
    playerScore = catThree.score[0] + playerScore
    $playerOneScore.text(playerScore);
};

function subtractCatThree() {
    playerScore = playerScore -
        $playerOneScore.text(playerScore)
};

function addCatFour() {
    playerScore = catFour.score[0] + playerScore
    $playerOneScore.text(playerScore);
};

function subtractCatFour() {
    playerScore = playerScore -
        $playerOneScore.text(playerScore)
};

function addCatFive() {
    playerScore = catFive.score[0] + playerScore
    $playerOneScore.text(playerScore);
};

function subtractCatFive() {
    playerScore = playerScore -
        $playerOneScore.text(playerScore)
};

$playerOneScore.append(playerScore)

//create click funtionality 
const $one = $('.one');
$one.click(function () {
    alert(catOne.questions[0]);
    let getAnswer = window.prompt("Enter Answer")
    if (getAnswer === catOne.answers[0]) {
        alert('correct')
        addCatOne();
    }
    else {
        alert('incorrect')
        subtractCatOne()
    }
    catOne.questions.splice(0, 1)
    catOne.answers.splice(0, 1)
    catOne.score.splice(0, 1)
});

const $two = $('.two');
$two.click(function () {
    alert(catTwo.questions[0]);
    getAnswer = window.prompt("Enter Answer")
    if (getAnswer === catTwo.answers[0]) {
        alert('correct')
        addCatTwo();
    }
    else {
        alert('incorrect')
        subtractCatTwo()
    }
    catTwo.questions.splice(0, 1)
    catTwo.answers.splice(0, 1)
    catTwo.score.splice(0, 1)
});

const $three = $('.three');
$three.click(function () {
    alert(catThree.questions[0]);
    getAnswer = window.prompt("Enter Answer")
    if (getAnswer === catThree.answers[0]) {
        alert('correct')
        addCatThree();
    }
    else {
        alert('incorrect')
        subtractCatThree()
    }
    catThree.questions.splice(0, 1)
    catThree.answers.splice(0, 1)
    catThree.score.splice(0, 1)
});

const $four = $('.four');
$four.click(function () {
    getAnswer = window.prompt("Enter Answer")
    if (getAnswer === catFour.answers[0]) {
        alert('correct')
        addCatFour();
    }
    else {
        alert('incorrect')
        subtractCatFour
    }
    catFour.questions.splice(0, 1)
    catFour.answers.splice(0, 1)
    catFour.score.splice(0, 1)
});

const $five = $('.five');
$five.click(function () {
    alert(catFive.questions[0]);
    getAnswer = window.prompt("Enter Answer")
    if (getAnswer === catFive.answers[0]) {
        alert('correct')
        addCatFive();
    }
    else {
        alert('incorrect')
        subtractCatFive()
    }
    catFive.questions.splice(0, 1)
    catFive.answers.splice(0, 1)
    catFive.score.splice(0, 1)
});
//pulls question from  object

//unhides qDisplay
//display question in center
//slide in screen question on a form

//if type in the correct answer given message of correct


// to look up
    // panels and wells


    //make the value on the card as a variable add it in by creating a function then globably calling on it 