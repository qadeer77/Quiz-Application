//login form
function login() {
    // email address in sign-in-form
    var input2 = document.getElementById("input2");
    // if (input2.value.length === 0) {
    //     swal("Please Enter Your Email Address")
    // }
    input2.value = " ";

    // password in sign-in form
    var input3 = document.getElementById("input3");
    // if (input3.value.length === 0) {
    //     swal("Please Enter Your Password");
    // }
    // else if (input3.value.length < 8) {
    //     swal("Password Should Be Must 8 Chracter");
    // }
    input3.value = " ";

    //loader
    var main = document.querySelector(".main");
    main.style.display = "none";

    var loader = document.getElementById("loader");
    loader.style.display = "block";

    setTimeout(function () {
        loader.style.display = "none"
    }, 3000)

    // mobile hybrid div
    var main = document.querySelector(".main");
    main.style.display = "none";

    var quizApp = document.querySelector(".quiz-app");
    setTimeout(function () {
        quizApp.style.display = "block"
    }, 3000)

}

function icon2() {
    // icon-2 in sign-in form
    var input3 = document.getElementById("input3");
    input3.setAttribute("type", "text");

    // icon-1 in sign in form display none
    var icon2 = document.getElementById("icon2");
    icon2.style.display = "none";

    // icon-2 in sign in form display block
    var icon1 = document.getElementById("icon1");
    icon1.style.display = "block";

    // button in sign in form
    var button2 = document.getElementById("button2");
    button2.style.marginTop = "-70px"

    // hedaing in sign-in form
    var heading = document.getElementById("heading");
    heading.style.marginTop = "-27px"
}

function icon1() {
    // icon-1 in sign-in form
    var input3 = document.getElementById("input3");
    input3.setAttribute("type", "password");

    // icon-1 in sign in form display none
    var icon2 = document.getElementById("icon2");
    icon2.style.display = "block";
    icon2.style.marginLeft = "320px"
    icon2.style.marginTop = "-30px"

    // icon-2 in sign in form display block
    var icon1 = document.getElementById("icon1");
    icon1.style.display = "none";

    // button in sign in form
    var button2 = document.getElementById("button2");
    button2.style.marginTop = "-10px"


    // hedaing in sign-in form
    var heading = document.getElementById("heading");
    heading.style.marginTop = "0px";
}


//signup-form
function icon4() {
    var input7 = document.getElementById("input7");
    input7.setAttribute("type", "text");

    var icon2 = document.getElementById("icon2");
    icon2.style.display = "none";

    var icon1 = document.getElementById("icon1");
    icon1.style.display = "block";

    var button2 = document.getElementById("button2");
    button2.style.marginTop = "-70px";

    var heading = document.getElementById("heading");
    heading.style.marginTop = "-27px"
}

function icon3() {
    var input7 = document.getElementById("input7");
    input7.setAttribute("type", "password");

    var icon2 = document.getElementById("icon2");
    icon2.style.display = "block";
    icon2.style.marginLeft = "320px"
    icon2.style.marginTop = "-30px"

    var icon1 = document.getElementById("icon1");
    icon1.style.display = "none";

    var button2 = document.getElementById("button2");
    button2.style.marginTop = "-10px"

    var heading = document.getElementById("heading");
    heading.style.marginTop = "0px"
}

function signUp() {

    var input4 = document.getElementById("input4");
    // if (input4.value.length === 0) {
    //     swal("Please Enter Your First Name");
    // }
    input4.value = " ";

    var input5 = document.getElementById("input5");
    // if (input5.value.length === 0) {
    //     swal("Please Enter Your Last Name");
    // }
    input5.value = " ";

    var input6 = document.getElementById("input6");
    // if (input6.value.length === 0) {
    //     swal("Please Enter Your Email Address");
    // }
    input6.value = " ";

    var input7 = document.getElementById("input7");
    // if (input7.value.length === 0) {
    //     swal("Please Enter Your Password");
    // }
    // else if (input7.value.length < 8) {
    //     swal("Password Should Be Must 8 Chracter")
    // }
    input7.value = " ";

    var main = document.querySelector(".main1");
    main.style.display = "none";

    var loader = document.getElementById("loader");
    loader.style.display = "block";

    setTimeout(function () {
        loader.style.display = "none"
    }, 3000)

    // mobile hybrid div
    var main = document.querySelector(".main1");
    main.style.display = "none";

    var quizApp = document.querySelector(".quiz-app");
    setTimeout(function () {
        quizApp.style.display = "block"
    }, 3000)
}


// htmlallquizes
var htmlQuizQuestion = [
    {
        question: "Q1 : What Does HTML Stand For?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "How Text Markup Language",
        ans: "ans1",
    },
    {
        question: "Q2 : Who is making the Web standards?",
        a: "Mozilla",
        b: "Google",
        c: "The World Wide Web Consortium",
        d: "Microsoft",
        ans: "ans3",
    },
    {
        question: "Q3 : Choose the correct HTML element for the largest heading:",
        a: "heading",
        b: "heading2",
        c: "<'h1'>",
        d: "heading6",
        ans: "ans3",
    },
    {
        question: "Q4 : What is the correct HTML element for inserting a line break?",
        a: "<'br'>",
        b: "lb",
        c: "break",
        d: "bra",
        ans: "ans1",
    },
    {
        question: "Q5 : What is the correct HTML for adding a background color?",
        a: "body bg='yellow'",
        b: "<'body style='background-color:yellow;''>",
        c: "yellow",
        d: "<'body background-color='yellow''>",
        ans: "ans2",
    },
    {
        question: "Q6 : Choose the correct HTML element to define important text:",
        a: "i",
        b: "<'strong'>",
        c: "important",
        d: "b",
        ans: "ans2",
    },
    {
        question: "Q7 : Choose the correct HTML element to define emphasized text:",
        a: "<'em'>",
        b: "i",
        c: "italic",
        d: "abr",
        ans: "ans1",
    },
    {
        question: "Q8 : Which character is used to indicate an end tag?",
        a: "/",
        b: "<",
        c: "*",
        d: "^",
        ans: "ans1",
    },
    {
        question: "Q9 : Which of these elements are all <'table'> elements?",
        a: "<'table'> <'tr'> <'td'>",
        b: "<'table'> <'td'> <'tr'>",
        c: "<'table'> <'tr'> <'tt'>",
        d: "<'thead'> <'body'> <'tt'>",
        ans: "ans1",
    },
    {
        question: "Q10 : How can you make a numbered list?",
        a: "<'dl'>",
        b: "<'ol'>",
        c: "<'list'>",
        d: "<'ul'>",
        ans: "ans2",
    },
    {
        question: "Q11 : How can you make a bulleted list?",
        a: "<'list'>",
        b: "<'ol'>",
        c: "<'dl'>",
        d: "<'ul'>",
        ans: "ans4",
    },
    {
        question: "Q12 : What is the correct HTML for making a checkbox?",
        a: "<'input type='checkbox''>",
        b: "<'check'>",
        c: "<'input type='check''>",
        d: "<'checkbox'>",
        ans: "ans1",
    },
    {
        question: "Q13 : What is the correct HTML for making a text input field?",
        a: "<'input type='text''>",
        b: "<'textfield'>",
        c: "<'input type='textfield''>",
        d: "<'text'>",
        ans: "ans1",
    },
    {
        question: "Q14 : What is the correct HTML for making a drop-down list?",
        a: "<'input type='dropdown''>",
        b: "<'select'>",
        c: "<'input type='list''>",
        d: "<'list'>",
        ans: "ans2",
    },
    {
        question: "Q15 : Which HTML element defines the title of a document?",
        a: "<'meta'>",
        b: "<'head'>",
        c: "<'title'>",
        d: "<'body'>",
        ans: "ans3",
    },
    {
        question: "Q16 : Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed",
        a: "title",
        b: "alt",
        c: "longdesc",
        d: "src",
        ans: "ans2",
    },
    {
        question: "Q17 : Which doctype is correct for HTML5?",
        a: "<'!DOCTYPE html'>",
        b: "<'!DOCTYPE HTML5'>",
        c: "<'!DOCTYPE html public'>",
        d: "<'!DOCTYPE html5i'>",
        ans: "ans1",
    },
    {
        question: "Q18 : Which HTML element is used to specify a footer for a document or section?",
        a: "<'footer'>",
        b: "<'bottom'>",
        c: "<'section'>",
        d: "<'margin'>",
        ans: "ans1",
    },
    {
        question: "Q19 : What is the correct HTML element for playing video files?",
        a: "<'vedio'>",
        b: "<'media'>",
        c: "<'movie'>",
        d: "<'film'>",
        ans: "ans1",
    },
    {
        question: "Q20 : What is the correct HTML element for playing audio files?",
        a: "<'sound'>",
        b: "<'audio'>",
        c: "<'mp3'>",
        d: "<'mp4'>",
        ans: "ans2",
    },
    {
        question: "Q21 : In HTML, onblur and onfocus are:",
        a: "HTML Elements",
        b: "Event Attributes",
        c: "Style Attributes",
        d: "Tag Attributes",
        ans: "ans2",
    },
    {
        question: "Q22 : Graphics defined by SVG is in which format?",
        a: "XML",
        b: "CSS",
        c: "HTML",
        d: "SVGS",
        ans: "ans1",
    },
    {
        question: "Q23 : In HTML, which attribute is used to specify that an input field must be filled out?",
        a: "placeholder",
        b: "formvalidate",
        c: "required",
        d: "validate",
        ans: "ans3",
    },
    {
        question: "Q24 : Which input type defines a slider control?",
        a: "slider",
        b: "search",
        c: "range",
        d: "controls",
        ans: "ans3",
    },
    {
        question: "Q25 : Which HTML element is used to specify a header for a document or section?",
        a: "<'section'>",
        b: "<'head'>",
        c: "<'top'>",
        d: "<'header'>",
        ans: "ans4",
    },
]

var question = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var next = document.querySelector("#next");


var answers = document.getElementsByName("answer");

var showScore = document.querySelector("#showScore");
// console.log(showScore);

var qusetionCount = 0;
var score = 0;
var questionBack = 25;

function loadQuestion() {

    var qusetionList = htmlQuizQuestion[qusetionCount];

    question.innerHTML = qusetionList.question;
    option1.innerHTML = qusetionList.a;
    option2.innerHTML = qusetionList.b;
    option3.innerHTML = qusetionList.c;
    option4.innerHTML = qusetionList.d;
}
loadQuestion();

function getCheckAnswer() {
    var answer;

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id;
        }
    }
    return answer;
}

function dselectAll() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false;
    }
}

next.addEventListener("click", () => {
    var checkedAnswer = getCheckAnswer();
    // console.log(checkedAnswer);

    if (checkedAnswer === htmlQuizQuestion[qusetionCount].ans) {
        score++;
    }

    qusetionCount++;

    dselectAll();

    if (qusetionCount < htmlQuizQuestion.length) {
        loadQuestion();
    }
    else if (score > 17) {
        showScore.innerHTML = `
          <h4 id="heading50"> Congratulation You Have Passed ${score}/${htmlQuizQuestion.length} 🏆 </h4>
          <button id="button34" onclick ="location.reload()" type="button" class="btn btn-primary">Play Again</button>
        `
        showScore.classList.remove("scoreArea")
    }
    else {
        showScore.innerHTML = `
          <h4 id="heading50"> You  Are Fail ${score}/${htmlQuizQuestion.length} 😞 </h4>
          <button id="button34" onclick ="location.reload()" type="button" class="btn btn-primary">Play Again</button>
        `
        showScore.classList.remove("scoreArea")
    }
})


// var startingMin = 30;
var startingMin = 30;
var time = startingMin * 60;

var countDowne = document.getElementById("countDowne");

setInterval(updateCountDown, 1000);

function updateCountDown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    // seconds = seconds < 30 ? '0' + seconds : seconds;
    seconds = seconds < 30 ? '0' + seconds : seconds;

    countDowne.innerHTML = `${minutes}:${seconds}`;
    time--;
}



// cssallquizes
var cssQuizQuestion = [
    {
        question: "Q1 : What does CSS stand for?",
        a: "Creative Style Sheet",
        b: "Cascading Style Sheet",
        c: "Computer Style Sheet",
        d: "Colorful Style Sheet",
        ans: "anss2",
    },
    {
        question: "Q2 : What is the correct HTML for referring to an external style sheet?",
        a: "<'stylesheet>mystyle.css</stylesheet'>",
        b: "<'link rel='stylesheet' type='text/css' href='mystyle.css''>",
        c: "<'style src='mystyle.css'>",
        d: "<'style>mystyle.css</style'>",
        ans: "anss2",
    },
    {
        question: "Q3 : Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "In the <'body'> section",
        b: "In the <'head'> section",
        c: "At the end of Document",
        d: "<'body'> and <'head'> section",
        ans: "anss2",
    },
    {
        question: "Q4 : Which HTML tag is used to define an internal style sheet?",
        a: "<'style'>",
        b: "<'script'>",
        c: "<'css'>",
        d: "<'head'>",
        ans: "anss1",
    },
    {
        question: "Q5 : Which HTML attribute is used to define inline styles?",
        a: "styles",
        b: "class",
        c: "font",
        d: "style",
        ans: "anss4",
    },
    {
        question: "Q6 : Which is the correct CSS syntax?",
        a: "{body;color:black;}",
        b: "body {color:black;}",
        c: "{body:color=black;}",
        d: "body:color:black;",
        ans: "anss2",
    },
    {
        question: "Q7 : How do you insert a comment in a CSS file?",
        a: "// this is comment",
        b: "/* this is a commment */",
        c: "// this is a comment //",
        d: "'this is a comment",
        ans: "anss2",
    },
    {
        question: "Q8 : Which property is used to change the background color?",
        a: "background-color",
        b: "bgcolor",
        c: "color",
        d: "backgrounf",
        ans: "anss1",
    },
    {
        question: "Q9 : How do you add a background color for all <h1> elements?",
        a: "h1.all {background-color:white;}",
        b: "all.h1 {background-color:white;}",
        c: "h1 {background-color:white;}",
        d: "h1.background-color:white",
        ans: "anss3",
    },
    {
        question: "Q10 : Which CSS property is used to change the text color of an element?",
        a: "fgcolor",
        b: "text-color",
        c: "color",
        d: "font-color",
        ans: "anss3",
    },
    {
        question: "Q11 : Which CSS property controls the text size?",
        a: "text-size",
        b: "font-style",
        c: "text-style",
        d: "font-size",
        ans: "anss4",
    },
    {
        question: "Q12 : What is the correct CSS syntax for making all the <p> elements bold?",
        a: "p {text-size:bold;}",
        b: "<'p style='font-size:bold;''>",
        c: "p {font-weight:bold;}",
        d: "<'p style='text-size:bold;''>",
        ans: "anss3",
    },
    {
        question: "Q13 : How do you display hyperlinks without an underline?",
        a: "a {text-decoration:none;}",
        b: "a {underline:none;}",
        c: "a {text-decoration:no-underline;}",
        d: "a {decoration:no-underline;}",
        ans: "anss1",
    },
    {
        question: "Q14 : How do you make each word in a text start with a capital letter?",
        a: "text-transform:capitalize",
        b: "transform:capitalize",
        c: "you can't do that with css",
        d: "text-style:capitalize",
        ans: "anss1",
    },
    {
        question: "Q15 : Which property is used to change the font of an element?",
        a: "font-weight",
        b: "font-family",
        c: "font-style",
        d: "font-size",
        ans: "anss2",
    },
    {
        question: "Q16 : How do you make the text bold?",
        a: "style:bold;",
        b: "font:bold;",
        c: "font-weight:bold;",
        d: "font-style:bold",
        ans: "anss3",
    },
    {
        question: "Q17 : Which property is used to change the left margin of an element?",
        a: "padding-left",
        b: "margin-left",
        c: "indent",
        d: "left-margin",
        ans: "anss2",
    },
    {
        question: "Q18 : When using the padding property; are you allowed to use negative values?",
        a: "No",
        b: "Yes",
        c: "negative",
        d: "value",
        ans: "anss1",
    },
    {
        question: "Q19 : How do you make a list that lists its items with squares?",
        a: "list-style-type: square;",
        b: "list-type: square;",
        c: "list: square;",
        d: "list-style: square;",
        ans: "anss1",
    },
    {
        question: "Q20 : How do you select an element with id 'demo'?",
        a: ".demo",
        b: "*demo",
        c: "#demo",
        d: "demo",
        ans: "anss3",
    },
    {
        question: "Q21 : How do you select elements with class name 'test'?",
        a: ".test",
        b: "#test",
        c: "*test",
        d: "test",
        ans: "anss1",
    },
    {
        question: "Q22 : How do you select all p elements inside a div element?",
        a: "div + p",
        b: "div p",
        c: "div.p",
        d: "div.all.p",
        ans: "anss2",
    },
    {
        question: "Q23 : How do you group selectors?",
        a: "Separate each selecter with a comma",
        b: "Separate each selecter with a space",
        c: "Separate each selecter with a plus sign",
        d: "Separate each selecter with a dot",
        ans: "anss1",
    },
    {
        question: "Q24 : What is the default value of the position property?",
        a: "fixed",
        b: "relative",
        c: "absolute",
        d: "static",
        ans: "anss4",
    },
    {
        question: "Q25 : Which property is used to change the left padding of an element?",
        a: "padding-left",
        b: "margin-left",
        c: "indent",
        d: "left-padding",
        ans: "anss1",
    },
]

