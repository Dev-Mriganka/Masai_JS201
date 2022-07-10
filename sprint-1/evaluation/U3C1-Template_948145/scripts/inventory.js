let data = JSON.parse(localStorage.getItem("data"))
console.log(data)
display()
function display() {
    data.forEach((el,index) => {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.image;
        let h3 = document.createElement("h3")
        h3.innerText = el.brand;
        let p = document.createElement("p")
        p.innerText = el.name;
        console.log(el.name )
        let h2 = document.createElement("h2")
        h2.innerText = "₹ "+el.price;
        let button = document.createElement("button")
        button.innerText = "Remove Product"
        button.setAttribute("id", "remove_product")
        button.addEventListener("click", function () { 
            deleteIt(index)
        })
        div.append(img,h3,p,h2,button);
        document.querySelector("#products_data").appendChild(div)

    })
}

function deleteIt(i) {
    data.splice(i, 1)
    localStorage.setItem("data", JSON.stringify(data));
    window.location.reload();
}