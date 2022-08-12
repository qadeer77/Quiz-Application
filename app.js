//login form
function login() {
    // email address in sign-in-form
    var input2 = document.getElementById("input2");
    input2.value = " ";

    // password in sign-in form
    var input3 = document.getElementById("input3");
    input3.value = " ";
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
function icon4(){
       var input3 = document.getElementById("input3");
       input3.setAttribute("type", "text");
   
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
      var input3 = document.getElementById("input3");
      input3.setAttribute("type", "password");
  
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

function signUp(){
        var input2 = document.getElementById("input2");
        input2.value = " ";
    
        var input3 = document.getElementById("input3");
        input3.value = " ";

        var input4 = document.getElementById("input4");
        input4.value = " ";
    
        var input5 = document.getElementById("input5");
        input5.value = " ";
}
