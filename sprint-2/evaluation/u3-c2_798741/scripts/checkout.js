document.querySelector("form").addEventListener("submit", function (event) {    
    event.preventDefault();
    let name = document.getElementById("user_name").value
    let number = document.getElementById("user_number").value
    console.log(name, number)
    alert("Your order is confirmed")
    setTimeout(() => {
        alert("Your order is being Packed ")
    }, "3000")
    setTimeout(() => {
        alert("Your order is in transit")
    }, "8000")
    setTimeout(() => {
        alert("Your order is out for delivery")
    }, "10000")
    setTimeout(() => {
        alert("Order delivered")
    }, "12000")
})


