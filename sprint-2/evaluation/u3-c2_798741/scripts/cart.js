let cart = JSON.parse(localStorage.getItem('cart_items')) || [];
function total() {
    let sum = 0;
    cart.forEach(el => {
        sum += el.price
    })
    document.getElementById("cart_total").innerText = sum
}
total()
append(cart)
function append(data) {
    document.querySelector("#cart").innerHTML = "";
    data.forEach((el,i) => {
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        h4.innerText = el.name
        let h3 = document.createElement('h3');
        h3.innerText = el.price
        let img = document.createElement('img');
        img.src = el.image
        let button = document.createElement("button")
        button.innerText = "Remove"
        button.classList.add("remove")
        button.addEventListener("click", () => {
            data.splice(i, 1)
            localStorage.setItem("cart_items", JSON.stringify(data))
            append(cart)
            total()
        })
        div.append(img, h4, h3, button)
        document.querySelector("#cart").appendChild(div)
    })
}