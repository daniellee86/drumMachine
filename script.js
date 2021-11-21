const qKey = document.getElementById("qKey");

qKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
    document.getElementById('qKey').style.boxShadow = "0px 0px"
    document.getElementById("qKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
    document.getElementsByClassName("lights")[0].style.display = "block"
    setTimeout(function() {
        document.getElementById('qKey').style.boxShadow = " 0px 3.5px 3px";
        document.getElementById("qKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
        document.getElementsByClassName("lights")[0].style.display = "none"

      }, 200);
    
})

document.addEventListener("keydown", (event) => {
    if (event.key == 'q') {
        document.getElementById("tom").pause();
        document.getElementById("tom").currentTime = 0;
        document.getElementById("tom").play();
        document.getElementById('qKey').style.boxShadow = "0px 0px"
        document.getElementById("qKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
        document.getElementsByClassName("lights")[0].style.display = "block"
        setTimeout(function() {
            document.getElementById('qKey').style.boxShadow = " 0px 3.5px 3px";
            document.getElementById("qKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
            document.getElementsByClassName("lights")[0].style.display = "none"
          }, 200);
    }
})

// 

const wKey = document.getElementById("wKey");

wKey.addEventListener("click", () => {
    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
    document.getElementById('wKey').style.boxShadow = "0px 0px"
    document.getElementById("wKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
    document.getElementsByClassName("lights")[1].style.display = "block"
    setTimeout(function() {
        document.getElementById('wKey').style.boxShadow = " 0px 3.5px 3px";
        document.getElementById("wKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
        document.getElementsByClassName("lights")[1].style.display = "none"
      }, 200);
    
})

document.addEventListener("keydown", (event) => {
    if (event.key == 'w') {
        document.getElementById("kick").pause();
        document.getElementById("kick").currentTime = 0;
        document.getElementById("kick").play();
        document.getElementById('wKey').style.boxShadow = "0px 0px"
        document.getElementById("wKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
        document.getElementsByClassName("lights")[1].style.display = "block"
        setTimeout(function() {
            document.getElementById('wKey').style.boxShadow = " 0px 3.5px 3px";
            document.getElementById("wKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
            document.getElementsByClassName("lights")[1].style.display = "none"
          }, 200);
        
    }
})

// 

const eKey = document.getElementById("eKey");

eKey.addEventListener("click", () => {
    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
    document.getElementById('eKey').style.boxShadow = "0px 0px"
    document.getElementById("eKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
    document.getElementsByClassName("lights")[2].style.display = "block"
    setTimeout(function() {
        document.getElementById('eKey').style.boxShadow = " 0px 3.5px 3px";
        document.getElementById("eKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
        document.getElementsByClassName("lights")[2].style.display = "none"
      }, 200);
    
})

document.addEventListener("keydown", (event) => {
    if (event.key == 'e') {
        document.getElementById("snare").pause();
        document.getElementById("snare").currentTime = 0;
        document.getElementById("snare").play();
        document.getElementById('eKey').style.boxShadow = "0px 0px"
        document.getElementById("eKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
        document.getElementsByClassName("lights")[2].style.display = "block"
        setTimeout(function() {
            document.getElementById('eKey').style.boxShadow = " 0px 3.5px 3px";
            document.getElementById("eKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
            document.getElementsByClassName("lights")[2].style.display = "none"
          }, 200);
        
    }
})

// 

const rKey = document.getElementById("rKey");

rKey.addEventListener("click", () => {
    document.getElementById("boom").pause();
    document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();
    document.getElementById('rKey').style.boxShadow = "0px 0px"
    document.getElementById("rKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
    setTimeout(function() {
        document.getElementById('rKey').style.boxShadow = " 0px 3.5px 3px";
        document.getElementById("rKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";

      }, 200);
    
})

document.addEventListener("keydown", (event) => {
    if (event.key == 'r') {
        document.getElementById("boom").pause();
        document.getElementById("boom").currentTime = 0;
        document.getElementById("boom").play();
        document.getElementById('rKey').style.boxShadow = "0px 0px"
        document.getElementById("rKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
        setTimeout(function() {
            document.getElementById('rKey').style.boxShadow = " 0px 3.5px 3px";
            document.getElementById("rKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
    
          }, 200);
        
    }
})

//

const tKey = document.getElementById("tKey");

tKey.addEventListener("click", () => {
    document.getElementById("clap").pause();
    document.getElementById("clap").currentTime = 0;
    document.getElementById("clap").play();
    document.getElementById('tKey').style.boxShadow = "0px 0px"
    document.getElementById("tKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
    setTimeout(function() {
        document.getElementById('tKey').style.boxShadow = " 0px 3.5px 3px";
        document.getElementById("tKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";

      }, 200);
    
})

document.addEventListener("keydown", (event) => {
    if (event.key == 't') {
        document.getElementById("clap").pause();
        document.getElementById("clap").currentTime = 0;
        document.getElementById("clap").play();
        document.getElementById('tKey').style.boxShadow = "0px 0px"
        document.getElementById("tKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
        setTimeout(function() {
            document.getElementById('tKey').style.boxShadow = " 0px 3.5px 3px";
            document.getElementById("tKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
    
          }, 200);
        
    }
})

// 

const yKey = document.getElementById("yKey");

yKey.addEventListener("click", () => {
    document.getElementById("ride").pause();
    document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
    document.getElementById('yKey').style.boxShadow = "0px 0px"
    document.getElementById("yKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
    setTimeout(function() {
        document.getElementById('yKey').style.boxShadow = " 0px 3.5px 3px";
        document.getElementById("yKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";

      }, 200);
    
})

document.addEventListener("keydown", (event) => {
    if (event.key == 'y') {
        document.getElementById("ride").pause();
        document.getElementById("ride").currentTime = 0;
        document.getElementById("ride").play();
        document.getElementById('yKey').style.boxShadow = "0px 0px"
        document.getElementById("yKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
        setTimeout(function() {
            document.getElementById('yKey').style.boxShadow = " 0px 3.5px 3px";
            document.getElementById("yKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
    
          }, 200);
        
    }
})

// 

const uKey = document.getElementById("uKey");

uKey.addEventListener("click", () => {
    document.getElementById("tink").pause();
    document.getElementById("tink").currentTime = 0;
    document.getElementById("tink").play();
    document.getElementById('uKey').style.boxShadow = "0px 0px"
    document.getElementById("uKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
    setTimeout(function() {
        document.getElementById('uKey').style.boxShadow = " 0px 3.5px 3px";
        document.getElementById("uKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";

      }, 200);
    
})

document.addEventListener("keydown", (event) => {
    if (event.key == 'u') {
        document.getElementById("tink").pause();
        document.getElementById("tink").currentTime = 0;
        document.getElementById("tink").play();
        document.getElementById('uKey').style.boxShadow = "0px 0px"
        document.getElementById("uKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
        setTimeout(function() {
            document.getElementById('uKey').style.boxShadow = " 0px 3.5px 3px";
            document.getElementById("uKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
    
          }, 200);
        
    }
})

// 

const iKey = document.getElementById("iKey");

iKey.addEventListener("click", () => {
    document.getElementById("hihat").pause();
    document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
    document.getElementById('iKey').style.boxShadow = "0px 0px"
    document.getElementById("iKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
    setTimeout(function() {
        document.getElementById('iKey').style.boxShadow = " 0px 3.5px 3px";
        document.getElementById("iKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";

      }, 200);
    
})

document.addEventListener("keydown", (event) => {
    if (event.key == 'i') {
        document.getElementById("hihat").pause();
        document.getElementById("hihat").currentTime = 0;
        document.getElementById("hihat").play();
        document.getElementById('iKey').style.boxShadow = "0px 0px"
        document.getElementById("iKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
        setTimeout(function() {
            document.getElementById('iKey').style.boxShadow = " 0px 3.5px 3px";
            document.getElementById("iKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
    
          }, 200);
        
    }
})

// 

const oKey = document.getElementById("oKey");

oKey.addEventListener("click", () => {
    document.getElementById("openhat").pause();
    document.getElementById("openhat").currentTime = 0;
    document.getElementById("openhat").play();
    document.getElementById('oKey').style.boxShadow = "0px 0px"
    document.getElementById("oKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
    setTimeout(function() {
        document.getElementById('oKey').style.boxShadow = " 0px 3.5px 3px";
        document.getElementById("oKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";

      }, 200);
    
})

document.addEventListener("keydown", (event) => {
    if (event.key == 'o') {
        document.getElementById("openhat").pause();
        document.getElementById("openhat").currentTime = 0;
        document.getElementById("openhat").play();
        document.getElementById('oKey').style.boxShadow = "0px 0px"
        document.getElementById("oKey").style.background = "linear-gradient(0deg, rgba(60, 60, 60, 1) 0%, rgba(145, 145, 145, 1) 100%)";
        setTimeout(function() {
            document.getElementById('oKey').style.boxShadow = " 0px 3.5px 3px";
            document.getElementById("oKey").style.background = "linear-gradient(0deg, rgba(89, 91, 91, 1) 0%, rgba(153, 151, 148, 1) 100%)";
    
          }, 200);
        
    }
})











// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }

// document.addEventListener("keypress", function(event) {

//   makeSound(event.key);

//   buttonAnimation(event.key);

// });


// function makeSound(key) {

//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;

//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;

//     case "s":
//       var tom3 = new Audio('sounds/tom-3.mp3');
//       tom3.play();
//       break;

//     case "d":
//       var tom4 = new Audio('sounds/tom-4.mp3');
//       tom4.play();
//       break;

//     case "j":
//       var snare = new Audio('sounds/snare.mp3');
//       snare.play();
//       break;

//     case "k":
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//       break;

//     case "l":
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//       break;


//     default: console.log(key);

//   }
// }


// function buttonAnimation(currentKey) {

//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);

// }






