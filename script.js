let button=document.querySelector(".button");
let password=document.getElementById("password")
let form=document.querySelector("#formelement");

let confirmPassword=document.getElementById("confirmPassword")
let confirmPassworderror=document.querySelector('#confirmPassword + span.error')

let firstname=document.getElementById("firstname");
let firstnameError=document.querySelector('#firstname + span.error');



form.addEventListener('submit', (e)=>{


        if(firstname.validity.valueMissing){

            firstnameError.textContent="This field is required"
            e.preventDefault();
        }
        else {
            firstnameError.textContent="";
        }


    });

function showError(element) {



}

confirmPassword.addEventListener("input", (e)=>{


    if(password.value != confirmPassword.value) {
        error.textContent="password missmtach"
    }
    
    else if (password.value=="" && confirmPassword.value==""){
        error.textContent="";

    }
    
    else {
        error.textContent="";

    }
})

function validateMyForm () {

    if(password.value != confirmPassword.value) {
        confirmPassworderror.textContent="password missmtach"
        confirmPassword.value="";
        confirmPassword.focus();
        return false;
    }
 
    else {
        confirmPassworderror.textContent=""

        return true;
    }
}




