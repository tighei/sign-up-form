/* 

async function check() {
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (password.value.match(reg) && repassed.value.match(reg)) {
        return true;
    } else {
        return false;
    }
}

function passConfirm() {
    if (password.value === "" && repassed.value === "") {
        Message.style.color = "blue";
        Message.textContent = "Password should be matched";
        return false;
    } else if (password.value === repassed.value) {
        Message.style.color = "green";
        Message.textContent = "Passwords match!";
        return true;
    } else {
        Message.style.color = "red";
        Message.textContent = "Passwords do NOT match!";
        return false;
    }
}
function checkMatch() {
    password.addEventListener("input", passConfirm);
    repassed.addEventListener("input", passConfirm);
}
checkMatch();
SubmitBtn.addEventListener("click", (e) => {
    if (check() && passConfirm()) {
        true;
    } else {
        e.preventDefault();
    }
});
 */

const submitBtn = document.getElementById("submit-btn");
const passwordInput = document.querySelector("#password");
const retypePasswordInput = document.querySelector("#password-con");
const messageElement = document.getElementById("Message");

async function isValidPassword(password) {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return reg.test(password);
}

function confirmPasswordMatch() {
    const password = passwordInput.value;
    const retypePassword = retypePasswordInput.value;

    if (password === "" && retypePassword === "") {
        showMessage("Password should be matched", "blue");
        return false;
    } else if (password === retypePassword) {
        showMessage("Passwords match!", "green");
        return true;
    } else {
        showMessage("Passwords do NOT match!", "red");
        return false;
    }
}

function showMessage(message, color) {
    messageElement.textContent = message;
    messageElement.style.color = color;
}

function checkPasswordMatch() {
    passwordInput.addEventListener("input", confirmPasswordMatch);
    retypePasswordInput.addEventListener("input", confirmPasswordMatch);
}
checkPasswordMatch();

submitBtn.addEventListener("click", async (e) => {
    const isPasswordValid = await isValidPassword(passwordInput.value);
    const doPasswordsMatch = confirmPasswordMatch();
    if (!isPasswordValid || !doPasswordsMatch) {
        e.preventDefault();
    }
});
