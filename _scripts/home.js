
// Script for Login Form Animation

// Defining constants for all inputs and labels for the create account and login forms
const LOGIN_INPUT_MOBNO = document.querySelector("#LoginMobno");
const LOGIN_INPUT_PASS = document.querySelector("#LoginPass");
const LOGIN_LABEL_MOBNO = document.querySelector(".formDivMobNo label");
const LOGIN_LABEL_PASS = document.querySelector(".formDivPassword label");
const CREACC_INPUT_FNAME = document.querySelector("#createAccountFirstName")
const CREACC_INPUT_LNAME = document.querySelector("#createAccountLastName")
const CREACC_INPUT_MOBNO = document.querySelector("#createAccountMobileNo")
const CREACC_INPUT_OTP = document.querySelector("#createAccountOTP")
const CREACC_INPUT_EPASS = document.querySelector("#createAccountPassword")
const CREACC_INPUT_CPASS = document.querySelector("#createAccountCPassword")
const CREACC_LABEL_FNAME = document.querySelector(".formDivFirstName label")
const CREACC_LABEL_LNAME = document.querySelector(".formDivLasttName label")
const CREACC_LABEL_MOBNO = document.querySelector(".formDivMobileNo label")
const CREACC_LABEL_OTP = document.querySelector(".otp label")
const CREACC_LABEL_EPASS = document.querySelector(".formDivEPassword label")
const CREACC_LABEL_CPASS = document.querySelector(".formDivCPassword label")




//Function to move labels up and hide them if there is text in the input fields
function moveLabelUp(label, caller) {
  label.classList.add("focusLabel");
  if(caller.value === "") {
    label.classList.remove("hidden");
  }else {
    label.classList.add("hidden");
  }
}

//Function to move labels and hide them if there is text in the input fields
function moveLabelDown(label, caller) {
  label.classList.remove( "focusLabel");
  if(caller.value !== "") {
    label.classList.add( "hidden");
  }else {
    label.classList.remove( "hidden");
  }
}

//Function to add event listeners to login form when the the form is opened
function activateEventListenersLogin(){
  LOGIN_INPUT_MOBNO.addEventListener( "focus", function loginMobNoFocus() {
    moveLabelUp( LOGIN_LABEL_MOBNO, this)
  } , false);
  LOGIN_INPUT_MOBNO.addEventListener( "blur", function loginMobNoBlur() {
    moveLabelDown( LOGIN_LABEL_MOBNO, this)
  } , false);
  LOGIN_INPUT_PASS.addEventListener( "focus", function loginPassFocus() {
    moveLabelUp( LOGIN_LABEL_PASS, this)
  } , false);
  LOGIN_INPUT_PASS.addEventListener( "blur", function loginPassBlur() {
    moveLabelDown( LOGIN_LABEL_PASS, this)
  } , false);
}

function activateEventListenersCreAcc(){
  CREACC_INPUT_FNAME.addEventListener( "focus", function() {
    moveLabelUp( CREACC_LABEL_FNAME, this)
  } , false);
  CREACC_INPUT_FNAME.addEventListener( "blur", function() {
    moveLabelDown( CREACC_LABEL_FNAME, this)
  } , false);
  CREACC_INPUT_LNAME.addEventListener( "focus", function() {
    moveLabelUp( CREACC_LABEL_LNAME, this)
  } , false);
  CREACC_INPUT_LNAME.addEventListener( "blur", function() {
    moveLabelDown( CREACC_LABEL_LNAME, this)
  } , false);
  CREACC_INPUT_MOBNO.addEventListener( "focus", function() {
    moveLabelUp( CREACC_LABEL_MOBNO, this)
  } , false);
  CREACC_INPUT_MOBNO.addEventListener( "blur", function() {
    moveLabelDown( CREACC_LABEL_MOBNO, this)
  } , false);
  CREACC_INPUT_OTP.addEventListener( "focus", function() {
    moveLabelUp( CREACC_LABEL_OTP, this)
  } , false);
  CREACC_INPUT_OTP.addEventListener( "blur", function() {
    moveLabelDown( CREACC_LABEL_OTP, this)
  } , false);
  CREACC_INPUT_EPASS.addEventListener( "focus", function() {
    moveLabelUp( CREACC_LABEL_EPASS, this)
  } , false);
  CREACC_INPUT_EPASS.addEventListener( "blur", function() {
    moveLabelDown( CREACC_LABEL_EPASS, this)
  } , false);
  CREACC_INPUT_CPASS.addEventListener( "focus", function() {
    moveLabelUp( CREACC_LABEL_CPASS, this)
  } , false);
  CREACC_INPUT_CPASS.addEventListener( "blur", function() {
    moveLabelDown( CREACC_LABEL_CPASS, this)
  } , false);
}


//Function to remove event listeners to login form when the form is closed
//TODO: Make the remove event listener fuction work
// function removeEventListerersLogin() {
//   LOGIN_INPUT_MOBNO.removeEventListener( "focus", loginMobNoFocus, false);
//   LOGIN_INPUT_MOBNO.removeEventListener( "blur", loginMobNoBlur, false);
//   LOGIN_INPUT_PASS.removeEventListener( "focus", loginPassFocus, false);
//   LOGIN_INPUT_PASS.removeEventListener( "blur", loginPassBlur, false);
//   console.log("Remove Event Listener ran");
// }



// Script for Opening Login Panel

// Defining Constants for Login Button, Create Account Button,
const logInButton = document.querySelector(".loginButton p a");
const creAccButton = document.querySelector(".createAccount p a");
const formWrapper = document.querySelector(".FormWrapper");
const logInForm = document.querySelector(".loginForm")
const creAccForm = document.querySelector(".createAccountForm")
const body = document.querySelector("#homepage")
function showForm( e, form) {
  var formClasses = form.classList;

  e.preventDefault();
  if(formClasses.contains("hidden")) {          //form is hidden and we are displaying it
    form.classList.remove("hidden");
    formWrapper.classList.remove("hidden");
    let interval = window.setTimeout(function(){
    form.classList.remove("zeroOpacity");
    },100);
    if( form === logInForm){
      activateEventListenersLogin();
    }
    if( form === creAccForm){
      activateEventListenersCreAcc();
    }
  } else {                                           //form is visable and we are hiding it
    form.classList.add("zeroOpacity");
    let interval = window.setTimeout(function() {
      formWrapper.classList.add("hidden");
      form.classList.add("hidden");
    }, 500);
    // removeEventListerersLogin();
  }

  body.classList.toggle("hideScrollbars");
}
logInButton.addEventListener("click",function( e) {
  showForm( e, logInForm)
}, false);
creAccButton.addEventListener("click",function( e) {
  showForm( e, creAccForm)
}, false);
// End of Script for Opening Login Panel







// Script for Back on Login/Create Account Panel
const loginBackButton = document.querySelector(".loginForm input[value =Back]");
const creAccbackButton = document.querySelector(".createAccountForm input[value =Back]");

loginBackButton.addEventListener("click",function( e) {
  showForm( e, logInForm)
  }, false)
creAccbackButton.addEventListener("click",function( e) {
  showForm( e, creAccForm)
}, false)
//End of Script for Back on Login/Create Account Panel




// Animating the Calousel
const carouselDivs = document.querySelectorAll(".carouselDiv");
var carouselLength = carouselDivs.length;
var displayDivIndex = 1;
var displayDivIndexNext = 2;
var displayDivIndexPrev = 0;
if (carouselLength == 3) {
  var displayDivIndexNextNext = 0;
} else {
  var displayDivIndexNextNext = 3;
}
//loop to run through all the Divs
for (let eachDiv of carouselDivs) {
  //show the first div and hide others
  if(eachDiv = carouselDivs[displayDivIndex]) {
    eachDiv.classList.add("transitionMain");
  }
  if(eachDiv = carouselDivs[displayDivIndexPrev]) {
    eachDiv.classList.add("transitionCarouselLeft");
  }
  if(eachDiv = carouselDivs[displayDivIndexNext]) {
    eachDiv.classList.add("transitionCarouselRight");
  }
  //TODO: Make the OR statement to work for carousel
  if(eachDiv !== carouselDivs[displayDivIndex] || eachDiv !== carouselDivs[displayDivIndexPrev] || eachDiv !== carouselDivs[displayDivIndexNext]) {
    eachDiv.classList.add("hidden");
    console.log(eachDiv);
  }
}

//fuction to show one Div
function displayDiv() {
  //hide the left div
  carouselDivs[displayDivIndexPrev].classList.remove("transitionCarouselLeft");
  carouselDivs[displayDivIndexPrev].classList.add("hidden");

  //transition the center div to left
  // carouselDivs[displayDivIndex].classList.remove("carouselDiv");
  carouselDivs[displayDivIndex].classList.remove("transitionMain");
  carouselDivs[displayDivIndex].classList.add("transitionCarouselLeft");

  //transition the right div to center
  // carouselDivs[displayDivIndexNext].classList.add("carouselDiv");
  carouselDivs[displayDivIndexNext].classList.remove("transitionCarouselRight");
  carouselDivs[displayDivIndexNext].classList.add("transitionMain");

  //transition the hidden div to left
  carouselDivs[displayDivIndexNextNext].classList.remove("hidden");
  carouselDivs[displayDivIndexNextNext].classList.add("transitionCarouselRight");

  //transition the displayed div

  //increment the displayedDivIndex, displayDivIndexPrev, displayDivIndexNext and displayDivIndexNextNext
  //if index of array is more than its length then reset the index
  displayDivIndexPrev = displayDivIndex;
  displayDivIndex = displayDivIndexNext;
  displayDivIndexNext++;
  if(displayDivIndexNext == carouselDivs.length) {
    displayDivIndexNext = 0;
  }
  displayDivIndexNextNext++
  if(displayDivIndexNextNext == carouselDivs.length) {
    displayDivIndexNextNext = 0;
  }
}

//interval calls function to show one div
var CarouselInterval = setInterval(displayDiv, 5000);
