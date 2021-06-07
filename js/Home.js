// //////////////// Take the name ////////////////
let theUserName = localStorage.getItem("theUserNameStorage");
var indexofAT = theUserName.indexOf("@");
var theName = theUserName.slice(0,indexofAT);



// //////////////// Write the name ////////////////
let welcomeMsg = document.getElementById("welcomeMsg");
welcomeMsg.innerHTML = `Welcome ${theName}`





