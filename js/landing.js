/******************************************* GLOBAL VARIABLES ***************************************************/

var counter = 0;
var sum = 0;
var start = document.querySelector('#start-quiz');
start.addEventListener('click', next);


/************************************************* DATA OBJECT *******************************************************/
var questions = {
    qOne: {
        question: "Who is not a royalty from this three?",
        answer1: { ans: "Duke Tristan of Winchester", val: 1 },
        answer2: { ans: "Prince Harry of the house of courts", val: 0 },
        answer3: { ans: "Princess Diana", val: 0 },
    },
    qTwo: {
        question: "What happened first?",
        answer1: { ans: "September 9 2011", val: 1 },
        answer2: { ans: "Boston Marathon Bombing", val: 0 },
        answer3: { ans: "Airplane crashed in the Pentagon", val: 1 }
    },
    qThree: {
        question: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
        answer1: { ans: "Six", val: 1 },
        answer2: { ans: "Five", val: 0 },
        answer3: { ans: "Two", val: 0 }
    },
    qFour: {
        question: "What year was the very first model of the iPhone released?",
        answer1: { ans: "2005", val: 0 },
        answer2: { ans: "2008", val: 0 },
        answer3: { ans: "2007", val: 1 }
    },
    qFive: {
        question: "Who is often called the father of the computer??",
        answer1: { ans: "Charles Babbage", val: 1 },
        answer2: { ans: "Charles Dickens", val: 0 },
        answer3: { ans: "Charles Xavier", val: 0 }
    },
    qSix: {
        question: "Who discovered penicillin?",
        answer1: { ans: "Richard Penci", val: 0 },
        answer2: { ans: "Alexander Thomas", val: 0 },
        answer3: { ans: "Aleaxander Fleming", val: 1 }
    },
    qSeven: {
        question: "What is the symbol for potassium?",
        answer1: { ans: "P", val: 0 },
        answer2: { ans: "PO", val: 0 },
        answer3: { ans: "K", val: 1 }
    }

}
/*****************************************************************************************************************/


/****************************************************************************************************************/
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

    function ground() {

        var tl = new TimelineMax({
            repeat: -1
        });

        tl.to("#ground", 20, {
            backgroundPosition: "1301px 0px",
            force3D: true,
            rotation: 0.01,
            z: 0.01,
            autoRound: false,
            ease: Linear.easeNone
        });

        return tl;
    }

    function clouds() {

        var tl = new TimelineMax({
            repeat: -1
        });

        tl.to("#clouds", 52, {
            backgroundPosition: "-2247px bottom",
            force3D: true,
            rotation: 0.01,
            z: 0.01,
            //autoRound:false,
            ease: Linear.easeNone
        });

        return tl;
    }

    var masterTL = new TimelineMax({
        repeat: -1
    });

    // window load event makes sure image is 
    // loaded before running animation
    window.onload = function () {

        masterTL
            .add(ground(), 0)
            .add(clouds(), 0)
            .timeScale(0.7)
            .progress(1).progress(0)
            .play();

    };

});



    function next() {
        var start_quiz = document.getElementById('signIn-wrapper');
        var header = document.querySelector('.game-header');
        var player_name = document.getElementById('playername').value;
        start_quiz.style.display = "none";
        header.style.display = "none";

        document.getElementById("name").innerHTML = player_name;
        document.getElementById("questionaire-wrapper").style.display = "block";
        document.getElementById("name").style.display = "block";
        document.querySelector('#question').innerText = questions.qOne.question;
        document.querySelector('.one').value = questions.qOne.answer1.ans;
        document.querySelector('.two').value = questions.qOne.answer2.ans;
        document.querySelector('.three').value = questions.qOne.answer3.ans;

    }
function showQuestion(current) {
    if (counter == 0) {

        counter++;
    }
    else if (counter == 1) {

        document.querySelector('#question').innerText = questions.qTwo.question;
        document.querySelector('.one').value = questions.qTwo.answer1.ans;
        document.querySelector('.two').value = questions.qTwo.answer2.ans;
        document.querySelector('.three').value = questions.qTwo.answer3.ans;

        if (current == 'one') {
            sum += questions.qOne.answer1.val;
        }
        else if (current == 'two') {
            sum += questions.qOne.answer2.val;
        }
        else {
            sum += questions.qOne.answer3.val;
        }
        console.log(sum + " from counter 1");
        counter++;

    }
    else if (counter == 2) {
        document.querySelector('#question').innerText = questions.qThree.question;
        document.querySelector('.one').value = questions.qThree.answer1.ans;
        document.querySelector('.two').value = questions.qThree.answer2.ans;
        document.querySelector('.three').value = questions.qThree.answer3.ans;
        counter++;
        if (current == 'one') {
            sum += questions.qTwo.answer1.val;
        }
        else if (current == 'two') {
            sum += questions.qTwo.answer2.val;
        }
        else {
            sum += questions.qTwo.answer3.val;
        }
        console.log(sum + "from counter 2");

    }
    else if (counter == 3) {
        document.querySelector('#question').innerText = questions.qFour.question;
        document.querySelector('.one').value = questions.qFour.answer1.ans;
        document.querySelector('.two').value = questions.qFour.answer2.ans;
        document.querySelector('.three').value = questions.qFour.answer3.ans;
        counter++;
        if (current == 'one') {
            sum += questions.qThree.answer1.val;
        }
        else if (current == 'two') {
            sum += questions.qThree.answer2.val;
        }
        else {
            sum += questions.qThree.answer3.val;
        }
        console.log(sum + "from counter 3");

    }
    else if (counter == 4) {
        document.querySelector('#question').innerText = questions.qFive.question;
        document.querySelector('.one').value = questions.qFive.answer1.ans;
        document.querySelector('.two').value = questions.qFive.answer2.ans;
        document.querySelector('.three').value = questions.qFive.answer3.ans;
        counter++;
        if (current == 'one') {
            sum += questions.qFour.answer1.val;
        }
        else if (current == 'two') {
            sum += questions.qFour.answer2.val;
        }
        else {
            sum += questions.qFour.answer3.val;
        }
        console.log(sum);

    }
    else if (counter == 5) {
        document.querySelector('#question').innerText = questions.qSix.question;
        document.querySelector('.one').value = questions.qSix.answer1.ans;
        document.querySelector('.two').value = questions.qSix.answer2.ans;
        document.querySelector('.three').value = questions.qSix.answer3.ans;
        counter++;
        if (current == 'one') {
            sum += questions.qFive.answer1.val;
        }
        else if (current == 'two') {
            sum += questions.qFive.answer2.val;
        }
        else {
            sum += questions.qFive.answer3.val;
        }
        console.log(sum);
    }
    else if (counter == 6) {
        document.querySelector('#question').innerText = questions.qSeven.question;
        document.querySelector('.one').value = questions.qSeven.answer1.ans;
        document.querySelector('.two').value = questions.qSeven.answer2.ans;
        document.querySelector('.three').value = questions.qSeven.answer3.ans;
        counter++;
        if (current == 'one') {
            sum += questions.qSix.answer1.val;
        }
        else if (current == 'two') {
            sum += questions.qSix.answer2.val;
        }
        else {
            sum += questions.qSix.answer3.val;
        }
        console.log(sum);
    }
    else if (counter == 7) {
        counter++;
        if (current == 'one') {
            sum += questions.qSeven.answer1.val;
        }
        else if (current == 'two') {
            sum += questions.qSeven.answer2.val;
        }
        else {
            sum += questions.qSeven.answer3.val;
        }
        console.log(sum);
        showResult(sum);
    }
   


}

function showResult() {
    document.getElementById('questionaire-wrapper').style.display = "none";
    document.getElementById('result-wrapper').style.display = "block";
    var player_name = document.getElementById('playername').value;
    if(sum == 7 ){
        document.getElementById('result').innerHTML = `${player_name} TRIVIA KING`;
    }
    else if(sum >= 5 && sum < 7){
        document.getElementById('result').innerHTML = `${player_name} BARELY PASS`;
    }
    else{
        document.getElementById('result').innerHTML = "I MEAN THIS IS JUST EMBARASSING";
    }
}
