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

