// REGEX MAIL 

function Validate(mail) {

    let regx = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (regx.test(mail)) {
        return true 
    } else {
        return false
    }
}

// VALIDATE SUB 

const mail = document.getElementById("email");
const button = document.getElementById("sub");
const error = document.getElementById("error");
const success = document.getElementById("success");
const mainCard = document.getElementById("stay-updated");

button.addEventListener("click", () => {

        mail.classList.remove("error");
        error.style.display = "none";

    if (Validate(mail.value) === false) {
        mail.classList.add("error");
        error.style.display = "block";

    } else {
        mainCard.style.display = "none";
        success.style.display = "block";
    }
})


// CLOSE SUCCESS CARD 

const dissMiss = document.getElementById("dissmiss");

dissMiss.addEventListener("click", () => {
    mainCard.style.display = "flex";
    success.style.display = "none";
})