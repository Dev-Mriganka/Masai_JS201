
let data = JSON.parse(localStorage.getItem("students_data_LS"))
let trash = JSON.parse(localStorage.getItem("trash_data_LS")) || [];
let batch = JSON.parse(localStorage.getItem("batch_LS")) || {};
let bag = 0;
displayCart(data)
function displayCart(data) {
    // document.querySelector("tbody").innerHTML = "";
    data.forEach(function (el, index) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.setAttribute("class", "flex_img");
        let img = document.createElement("img");
        img.setAttribute("src", el.image)
        td1.append(img)

        let td2 = document.createElement("td");
        td2.innerText = el.name;


        let td3 = document.createElement("td");
        td3.innerText = el.unit;

        let td4 = document.createElement("td");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        td4.append(p1, p2, p3)        
        p1.innerText = el.coding;
        p2.innerText = el.dsa;
        p3.innerText = el.csbt;

        let td5 = document.createElement("td");
        td5.innerText = el.batch;

        let td6 = document.createElement("td");
        td6.innerText = "Delete";
        td6.addEventListener("click", function () {
            deleteData(index)
        })

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").appendChild(tr);       
    })
    displayNav()
}


function deleteData(index) {

    let a = data.splice(index, 1);
    trash.push(a)
    localStorage.setItem("trash_data_LS", JSON.stringify(trash))
    console.log(a)
    localStorage.setItem("students_data_LS", JSON.stringify(data))
    window.location.reload()
    calculate()
    displayNav()
}

function calculate() {
    let obj = {};
    data.forEach(el => {
        if (!obj[el.batch]) {
            obj[el.batch] = 1;
        } else {
            obj[el.batch]++
        }
    })
    localStorage.setItem("batch_LS", JSON.stringify(obj))
    console.log(obj);    
    
}

function displayNav() {
    
    let nav = document.querySelector("#navbar")
    for (let key in batch) {
        let p = document.createElement("p")
        p.innerText = `${key} - ${batch[key]}`
        nav.appendChild(p)
    }
}


