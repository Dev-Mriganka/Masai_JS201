let book = JSON.parse(localStorage.getItem('book'));
console.log(book)
append(book)
function append(el) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = el.Images.one
    let img2 = document.createElement('img');
    img2.src = el.Images.two
    div.append(img,img2)
    let h1 = document.createElement('h1')
    h1.innerText = el.Title
    let h2 = document.createElement('h2')
    h2.innerText = `Rs. ${el.Price}`
    document.querySelector("#hotel_details").append(div,h1,h2)
}

document.querySelector("#book").addEventListener("click", myFunc)

function myFunc() {
    event.preventDefault()

    let name = document.querySelector("#user_name").value
    console.log(name)

    setTimeout(()=>{
        alert(`${name}, Your booking is successful!`)}
    ,"5000")
}