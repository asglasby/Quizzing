/**
 * Quizzing: A Simple JS Quiz App
 * User: jabbrass
 * Date: 7/3/13
 * Time: 6:09 AM
 * To change this template use File | Settings | File Templates.
 */
var allQuestions = [{
        question: "What is the capital of Florida?",
        choices: ["Miami", "Orlando", "Tallahassee", "Cape Canaveral"],
        answer: 3}
    ,{
        question: "Where do the Cowboys play football?",
        choices: ["Houston", "Dallas", "Galveston", "The Pan-handle"],
        answer: 2}
    ,{
        question: "Where was George Washington before he crossed the Delaware?",
        choices: ["Trenton, NJ", "Philadelphia, PA", "Galveston, TX", "Valley Forge, PA"],
        answer: 1}
    ,{
        question: "Where do the Packers play football?",
        choices: ["Madison", "Milwaukee", "Seattle", "Green Bay"],
        answer: 4}
    ,{
        question: "What state is closest to the Pacific ocean?",
        choices: ["Oregon", "Nevada", "Idaho", "Arizona"],
        answer: 1}
    ,{
        question: "Where do the Cowboys play football now?",
        choices: ["Houston", "Dallas", "Galveston", "The Pan-handle"],
        answer: 2}
    ,{
        question: "Where do the Cowboys play football now and again?",
        choices: ["Houston", "Dallas", "Galveston", "The Pan-handle"],
        answer: 2}
    ,{
        question: "Where do the Cowboys play football every time?",
        choices: ["Houston", "Dallas", "Galveston", "The Pan-handle"],
        answer: 2}
];

$(document).ready(function() {
    var numberCorrect = 0;
    var questionNumber = 0;
    var displayQA = function () {
        if (questionNumber === allQuestions.length) {
            $("h2").text("You finished the quiz! You scored " + numberCorrect + " points!");
            for (i = 0; i < 4; i++) { $("#a" + i).remove(); }
        } else {
            $("h2").text(allQuestions[questionNumber].question);
            for (i = 0; i < 4; i++) {
                $("#a" + i).html("<input type='radio' name='answer' value='" + i + "'>" + allQuestions[questionNumber].choices[i] + "</input>");
            }
        }
    };
    displayQA();
    $("#button").on("click", "#text", function() {
        var userAnswer = +$('input[name=answer]:checked').val();
        var correctAnswer = allQuestions[questionNumber].answer - 1; //Grabbing answer from array and correcting number for 0 offset
        if (userAnswer === correctAnswer) {
            numberCorrect = numberCorrect + 1;
            alert("You're right! " + numberCorrect + " points");
        } else {
            alert("Sorry, you missed it! Still " + numberCorrect + " points");
        }
        questionNumber = questionNumber + 1;
        displayQA();
    });
});