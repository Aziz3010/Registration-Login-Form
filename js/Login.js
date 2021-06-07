// //////////////// signup vars ////////////// //
let emailInp = document.getElementById("email");
let passInp = document.getElementById("pass");
let signUpBtn = document.getElementById("signUp");
let signUpA = document.getElementById("signUpA");
let login = document.getElementById("login");
let toHomeA = document.getElementById("toHomeA");
let errorMsg = document.getElementById("errorMsg");


// //////////////// data storage ////////////// //
var usersData =[];

if(JSON.parse(localStorage.getItem("Users")) == null){
    usersData =[];
}else{
    usersData = JSON.parse(localStorage.getItem("Users"));
};

// //////////////// click on loginBtn ////////////////

login.addEventListener("click",function(){
    if(isFound() === true){
        toHomeA.setAttribute("href","Home.html");
    }else{
        errorMsg.classList.replace("d-none","d-block");
    }
});




// //////// check inputs data with storage ////// //
function isFound(){
    for(var i=0 ; i<usersData.length ; i++){
        if(usersData[i].userEmail === emailInp.value && usersData[i].userPass === passInp.value)
        {
            localStorage.setItem("theUserNameStorage",usersData[i].userEmail)
            return true
        }
    };
};

// //////////////// Open The Registeration Page ////////////////
signUpBtn.addEventListener("click",function(){
    signUpA.setAttribute("href","index.html")
});