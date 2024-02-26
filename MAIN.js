const SubmitBtn = document.getElementById("submit-btn");
const password = document.querySelector("#password");
const repassed = document.querySelector("#password-con");
const Message = document.getElementById("Message");

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
