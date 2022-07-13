let arr = JSON.parse(localStorage.getItem('users')) 

document.querySelector("#log_in").addEventListener("click", myFunc)

function myFunc() {
    event.preventDefault();

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    let flag = false;
    arr.forEach(el => {
        if (el.email == email && el.password == password) {
            flag = true;
            alert("Login successful!");
            return
        } else if (el.email == email) { 
            alert("Wrong credentials");
            return
        } else {
            alert("User doesn't exist, Sign Up")
        }
    })

    if (flag) {        
        localStorage.setItem('login', true)
    }

}