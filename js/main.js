// --------------- Part 1 --------------- 
// //////////////// signUp vars ////////////// //
let emailInp = document.getElementById("email");
let passInp = document.getElementById("pass");
let conPassInp = document.getElementById("conPass");
let phoneInp = document.getElementById("phone");
let signUpBTN = document.getElementById("signUp");
let loginBTN = document.getElementById("login");
let allInputs = document.getElementsByTagName("input");
let errorMsgPage = document.getElementById("cover");
let errorMsg = document.getElementById("layout");
let msgWorinig = document.getElementById("msgWorinig")
let exitIcon = document.getElementById("exit");
let errorEmailMsg = document.getElementById("errorMsg");
// //////////////// inputs Regex ////////////// //
let emailRegex = /^[A-Za-z0-9\-\_\.]+(@)[A-Za-z]+(\.com)$/
let passRegex = /^[A-Z][a-z0-9]+$/
let phoneRegex = /^(01)[01258][0-9]{8}$/
// //////////////// data storage ////////////// //

var usersData ;

if(localStorage.getItem("Users") == null){
    usersData = [];
}else{
    usersData = JSON.parse(localStorage.getItem("Users"));
};

console.log(localStorage.getItem("Users"));

// //////////////// signUp BTN ////////////// //
signUpBTN.addEventListener("click",function(){    
    
    if(validation() === true){
        
        if(isExist() == false){
            user = {
                userEmail : emailInp.value,
                userPass : passInp.value,
                userConPass : conPassInp.value,
                userPhone : phoneInp.value
            };
            usersData.push(user);
            localStorage.setItem("Users",JSON.stringify(usersData));    
            clearInps();
            greenMsg();
        }else{
            console.log("mesh tamam")
            errorEmailMsg.classList.remove("d-none")
        }
    }else{
        redMsg();
    }
});

// //////////////// Is Email Exist? ////////////// //
function isExist(){
    
    if(localStorage.getItem("Users") == null){
        console.log("الذاكرة فارغه")
        return false
    } else if(forLoop() == true){
        console.log("الايميل مكرر سابقا")
        return true
    }else{
        console.log("الايميل جديد")
        return false
    }
};
console.log(isExist())

function forLoop(){
    for(var i=0;i<usersData.length;i++){
        if (emailInp.value === usersData[i].userEmail) {
            return true
        }else{
            return false
        }
    }
};

// //////////////// validation ////////////// //
function emailValidation(){
    if(emailRegex.test(emailInp.value) === true){
        return true
    }else{
        return false
    }
};
function passValidation(){
    if(passRegex.test(passInp.value) === true){
        return true
    }else{
        return false
    }
};
function phoneValidation(){
    if(phoneRegex.test(phoneInp.value) === true){
        signUpBTN.innerHTML="Sign Up"
        return true
    }else{
        return false
    }
};
function confirmationThePass(){
    if(passInp.value === conPassInp.value){
        return true
    }else{
        return false
    }
};
function validation(){
    if(emailValidation() == true && passValidation() == true && phoneValidation() == true && confirmationThePass() == true){
        return true
    }else{
        return false
    }
};
// //////////////// clear forms ////////////// //
function clearInps(){
    for(var i=0 ; i<allInputs.length ; i++){
        allInputs[i].value = ""
    };
};
// //////////////// show & hide (red & green) Msg ////////////// //
function greenMsg(){
    errorMsgPage.style.display = "flex";
    errorMsg.style.display = "flex";
    errorMsg.style.boxShadow = "0px 0px 10px green";
    errorMsg.style.color = "#04aa6d";
    msgWorinig.innerHTML = `Registration Done`;
};
function redMsg(){
    errorMsgPage.style.display = "flex";
    errorMsg.style.display = "flex";
    errorMsg.style.boxShadow = "0px 0px 10px red";
    errorMsg.style.color = "red";
    msgWorinig.innerHTML = `Please Fill All Fields`;
};
// //////////////// closeMsg ////////////// //
exitIcon.addEventListener("click",function(){
    errorMsgPage.style.display = "none"
});
errorMsgPage.addEventListener("click",function(){
    errorMsgPage.style.display = "none"
});
// //////////////// liveCheck ////////////// //
(function liveCheckOnEmailInp(){
    emailInp.addEventListener("keyup",function(){
            if(emailValidation() == true){
                emailInp.classList.remove("is-invalid")
                emailInp.classList.add("is-valid")
            }
            else{
                emailInp.classList.add("is-invalid")
                emailInp.classList.remove("is-valid")
            }
        })
})();
(function liveCheckOnPassInp(){
    passInp.addEventListener("keyup",function(){
            if(passValidation() == true){
                passInp.classList.remove("is-invalid")
                passInp.classList.add("is-valid")
            }
            else{
                passInp.classList.add("is-invalid")
                passInp.classList.remove("is-valid")
            }
        })
})();
(function liveCheckOnConPassInp(){
    conPassInp.addEventListener("keyup",function(){
            if(confirmationThePass() == true){
                conPassInp.classList.remove("is-invalid")
                conPassInp.classList.add("is-valid")
            }
            else{
                conPassInp.classList.add("is-invalid")
                conPassInp.classList.remove("is-valid")
            }
        })
})();
(function liveCheckOnPhoneInp(){
    phoneInp.addEventListener("keyup",function(){
            if(phoneValidation() == true){
                phoneInp.classList.remove("is-invalid")
                phoneInp.classList.add("is-valid")
            }
            else{
                phoneInp.classList.add("is-invalid")
                phoneInp.classList.remove("is-valid")
            }
        })
})();
// //////////////// login vars ////////////// //
let loginBtn = document.getElementById("login");
let loginA = document.getElementById("loginA");

loginBtn.addEventListener("click",function(){
    loginA.setAttribute("href","LoginPage.html")
});
