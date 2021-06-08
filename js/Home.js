// //////////////// Take the name ////////////////
let theUserName = localStorage.getItem("theUserNameStorage");
let indexofAT = theUserName.indexOf("@");
let theName = theUserName.slice(0,indexofAT);
let logoutBtn = document.getElementById("logout");
let logoutA = document.getElementById("logoutA");


// //////////////// Auto Write Name ////////////////
let welcomeMsg = document.getElementById("welcomeMsg");
var i = 0;
var txt = `${theName}`;

(function typeWriter() {
  if (i < txt.length) {
    welcomeMsg.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter,160);
    }
})();


// logout


logoutBtn.addEventListener("click",function(){
    logoutA.setAttribute("href","/index.html")
    console.log("aaaaa")
})