document.querySelector("form").addEventListener("submit", myFunc);
let data = JSON.parse(localStorage.getItem("users")) || [];

function myFunc(event) {
    event.preventDefault();
    let form = document.querySelector("form");
    let userEmail = form.email.value;
    let userNumber = form.number.value;
    let userName = form.name.value;
    let userPass = form.pass.value;
    userEmail = userEmail.trim();
    userNumber = userNumber.trim();
    userName = userName.trim();
    userPass = userPass.trim();

    let flag = false;
    data.filter((el) => {
        if (el.email == userEmail) {
            flag = true;
            return;
        }
    });
    if (flag) {
        alert("Email already Exists!");
        document.querySelector("#email").value = "";
        document.querySelector("#name").value = "";
        document.querySelector("#pass").value = "";
        document.querySelector("#number").value = "";
        return;
    }

    let obj = {
        name: userName,
        number: userNumber,
        email: userEmail,
        password: userPass,
    };

    data.push(obj);
    localStorage.setItem("users", JSON.stringify(data));
    console.log(data);

    window.location.href = "/unit-3/sprint-2/day-1/assignments/Async-Prog-Assignment-Template/login.html";
}