let email = document.getElementById("email");
let error = document.getElementById("error-msg");
let btn = document.getElementById("email-btn");
let errorIcon = document.querySelector('.error-icon')

function validation(){
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            error.innerHTML = "Please provide a valid email";
            email.style.borderColor = '#ff5263';
            errorIcon.classList.add('show')
            return false
        }

        email.style.borderColor = "lightgray"
        error.innerHTML = ""
        errorIcon.classList.remove('show')
        return true
        
    }



btn.addEventListener("click",()=>{
    if(email.value === ""){
            error.innerHTML = "Whoops! It looks like you forgot to add your email";
    }
    else if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.value = "";
        error.innerHTML = "";
    }
})