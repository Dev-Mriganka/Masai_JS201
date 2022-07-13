let arr = JSON.parse(localStorage.getItem('users')) || [];

document.querySelector("#sign_up").addEventListener("click", myFunc)



function myFunc() {
    event.preventDefault();

    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    let flag = false;
    arr.forEach(el => {
        if (el.email == email) {
            flag = true;
            return
        }
    })

    if (flag) { 
        alert("Email already Exists!");
        return;
    } else {
        alert("User registered successfully")
    }

    let obj = {
        name: name,
        email: email,
        password: password
    }
    arr.push(obj)
    localStorage.setItem('users', JSON.stringify(arr))
}