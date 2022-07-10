document.querySelector("form").addEventListener("submit", myFunc)

function myFunc(event) {
    event.preventDefault();
    let temp = JSON.parse(localStorage.getItem('users'));
    let data = {
        email: document.querySelector("#email").value,
        pass: document.querySelector("#pass").value
    }
    let signInLs = false
    let flag = false;
    temp.filter(el => {
        if (el.email == data.email && el.password == data.pass) {
            flag = true;
            signInLs = true;
            localStorage.setItem("signIn", JSON.stringify(data));
            localStorage.setItem("signInLs", JSON.stringify(signInLs));
            window.location.href = "/unit-3/sprint-2/day-1/assignments/Async-Prog-Assignment-Template/index.html"
            alert("Signed in successfully!");
            return;
        }
    })
    if (flag == false) {
        alert("Email or password incorrect")
    }
}