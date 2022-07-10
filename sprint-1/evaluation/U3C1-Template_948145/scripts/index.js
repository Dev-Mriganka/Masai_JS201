//store the products array in localstorage as "data"

let data = JSON.parse(localStorage.getItem("data"))||[];
document.querySelector("form").addEventListener("submit", myFunc)

function myFunc(event) { 
    event.preventDefault();

    let form = document.querySelector("#product_form")
    let brand = form.product_brand.value;
    let name = form.product_name.value;
    let price = form.product_price.value;
    let image = form.product_image.value;

    let product = new makeObject(brand, name, price, image)
    data.push(product);
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
}

function makeObject(a, b, c, d) { 
    this.brand = a;
    this.name = b;
    this.price = c;
    this.image = d;
}