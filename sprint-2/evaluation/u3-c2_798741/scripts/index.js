let api = "https://grocery-masai.herokuapp.com/items"

async function myFunc(url) {
    let res = await fetch(url);
    let data = await res.json();
    append(data.data);
}
let cart = JSON.parse(localStorage.getItem('cart_items')) || [];
function wallet_update() {
    let total = 700;
    let sum = 0;
    cart.forEach(el =>{
        sum+=el.price
    })
    total -= sum
    document.getElementById("wallet").innerText = total
}
wallet_update()
myFunc(api);
function append(data) {
    data.forEach(el => {
        let div = document.createElement('div');
        div.classList.add('items');
        let h4 = document.createElement('h4');
        h4.innerText = el.name
        let h3 = document.createElement('h3');
        h3.innerText = el.price
        let img = document.createElement('img');
        img.src = el.image
        let button = document.createElement("button")
        button.innerText = "Add to Cart"
        button.classList.add("add_to_cart")
        button.addEventListener("click", () => {
            let wallet = document.getElementById("wallet")
            let temp = wallet.innerText
            console.log(temp)
            temp = +(temp)
            if (temp >= el.price) {                
                cart.push(el)
                let x = temp - el.price
                wallet.innerText = x
            } else {
                alert("insufficient balance")   
            }
            localStorage.setItem("cart_items", JSON.stringify(cart))
        })
        div.append(img, h4, h3, button)
        document.querySelector("#groceries").appendChild(div)
    })
}

