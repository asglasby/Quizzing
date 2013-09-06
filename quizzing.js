/**
 * Quizzing: A Simple JS Quiz App
 * User: jabbrass
 * Date: 7/11/13
 * Time: 9:09 AM
 */
var allQuestions = [{
        question: "What is the capital of Florida?",
        choices: ["Miami", "Orlando", "Tallahassee", "Cape Canaveral"],
        answer: 3,
        savedAnswer: null}
    ,{
        question: "Where do the Cowboys play football?",
        choices: ["Houston", "Dallas", "Galveston", "The Pan-handle"],
        answer: 2,
        savedAnswer: null}
    ,{
        question: "Where was George Washington before he crossed the Delaware?",
        choices: ["Trenton, NJ", "Philadelphia, PA", "Galveston, TX", "Valley Forge, PA"],
        answer: 1,
        savedAnswer: null}
    ,{
        question: "Where do the Packers play football?",
        choices: ["Madison", "Milwaukee", "Seattle", "Green Bay"],
        answer: 4,
        savedAnswer: null}
    ,{
        question: "What state is closest to the Gulf of Mexico?",
        choices: ["Oregon", "Nevada", "Idaho", "Arizona"],
        answer: 4,
        savedAnswer: null}
    ,{
        question: "Where do the Cowboys play football now?",
        choices: ["Houston", "Dallas", "Galveston", "The Pan-handle"],
        answer: 2,
        savedAnswer: null}
    ,{
        question: "Where do the Cowboys play football now and again?",
        choices: ["Houston", "Dallas", "Galveston", "The Pan-handle"],
        answer: 2,
        savedAnswer: null}
    ,{
        question: "Where do the Cowboys play football every time?",
        choices: ["Houston", "Dallas", "Galveston", "The Pan-handle"],
        answer: 2,
        savedAnswer: null}
];

$(document).ready(function() {
    var numberCorrect = 0;
    var questionNumber = 0;
    var userAnswer;
    var displayQA = function () {
        if (questionNumber > 0) {
            $("#backbutton").show();
        }
        if (questionNumber === allQuestions.length) {
            $("h2").text("You finished the quiz! You scored " + numberCorrect + " points!");
            for (var i = 0; i < 4; i++) { $("#a" + i).remove(); }
        } else {
            $("h2").text(allQuestions[questionNumber].question).fadeIn(500);
            for (i = 0; i < 4; i++) {
                $("#a" + i).html("<input type='radio' name='answer' value='" + i + "'>" + allQuestions[questionNumber].choices[i] + "</input>").fadeIn(500);
            }
            // Restore previously entered answer from savedAnswer in array
            var restoreAnswer = allQuestions[questionNumber].savedAnswer;
            $("#a" + restoreAnswer).html("<input type='radio' name='answer' value='" + restoreAnswer + "' checked>" + allQuestions[questionNumber].choices[restoreAnswer] + "</input>").fadeIn(500);
        }
    };
    displayQA();
    $("#nextbutton").on("click", "#nexttext", function() {
        userAnswer = +$('input[name=answer]:checked').val();
        var fadeText = function () {
            $("h2").fadeOut(500);
            for (var i = 0; i < 4; i++) {
                $("#a" + i).fadeOut(500);
            }
        };
        var correctAnswer = allQuestions[questionNumber].answer - 1; //Grabbing answer from array and correcting number for 0 offset
        if (userAnswer === correctAnswer && userAnswer !== allQuestions[questionNumber].savedAnswer) {
            allQuestions[questionNumber].savedAnswer = userAnswer;
            numberCorrect = numberCorrect + 1;
            fadeText();
            alert("You're right! " + numberCorrect + " points");
            questionNumber = questionNumber + 1;
        } else if (userAnswer === allQuestions[questionNumber].savedAnswer) {
            fadeText();
            questionNumber = questionNumber + 1;
        } else if (isNaN(userAnswer) === true) {
            alert("You forgot to answer the question! Please select an answer.");
        } else {
            allQuestions[questionNumber].savedAnswer = userAnswer;
            fadeText();
            alert("Sorry, you missed it! Still " + numberCorrect + " points");
            questionNumber = questionNumber + 1;
        }
    displayQA();
    });
    $("#backbutton").on("click", "#backtext", function() {
        $("h2").fadeOut(500);
        for (var i = 0; i < 4; i++) {
            $("#a" + i).fadeOut(500);
        }
        questionNumber = questionNumber - 1;
        if (questionNumber === 0) {
            $("#backbutton").hide();
        }
        displayQA();
    });
});