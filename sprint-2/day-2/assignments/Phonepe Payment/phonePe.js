function bankServer(a) {
    // Logic
    if (a == 2000) {
        return true;
    } //false;
    else {
        return false;
    }
        
}

function payment_process(bag) {
    let payment_promise = new Promise(function (resolve, reject) {
        let pin = bankServer(bag);

        setTimeout(function () {
            if (pin) {
                resolve("Payment successfull!");
            } else {
                reject("Failed! Try again later.");
            }
        }, 3000);
    });

    let image = document.getElementById("pay_img2");

    payment_promise.then(function (res) {
        console.log(res);
        document.querySelector("#payment>img").src = ""
        document.querySelector("#text_status").innerText = res
        image.src = "./success.gif";
    });

    payment_promise.catch(function (rej) {
        console.log(rej);
        document.querySelector("#payment>img").src = ""
        document.querySelector("#text_status").innerText = rej
        image.src = "https://www.taxi2cardiff.com/images/error.gif";
    });
}



let key = document.querySelectorAll("#keyboard>div")

key.forEach((el, i) => {
    el.addEventListener("click", upiPin)
})

function number(el) {
    num = el.innerText
    display(num)
}
let bag = "";
function upiPin() {
    var targetNumber = event.target.innerText;
    if (targetNumber == "backspace") {
        bag = "";
        document.querySelector("#display").innerText = "_ _ _ _"
    } else if (targetNumber == "check_circle") {
            document.querySelector("#payment>div").innerHTML = ""
            document.querySelector("#payment>img").src = "https://c.tenor.com/K2UGDd4acJUAAAAM/load-loading.gif"
            payment_process(bag)
    } else if (bag.length == 0) {
        bag = bag + targetNumber
        let temp = "• _ _ _"
        document.querySelector("#display").innerText = temp
    }
    else if (bag.length == 1) {
        bag = bag +targetNumber
        let temp = "• • _ _"
        document.querySelector("#display").innerText = temp
    }
    else if (bag.length == 2) {
        bag = bag + targetNumber
        let temp = "• • • _"
        document.querySelector("#display").innerText = temp
    } else if (bag.length == 3) {
        bag = bag + targetNumber
        let temp = "• • • •"
        document.querySelector("#display").innerText = temp
    }
    
}

