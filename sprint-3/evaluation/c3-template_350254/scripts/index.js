let login = localStorage.getItem('login');
console.log(login);
let input = document.querySelector("#query").addEventListener('keypress', async function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        api = `https://masai-mock-api.herokuapp.com/hotels/search?city=${this.value}`
        let res = await fetch(api)
        let result = await res.json()
        document.querySelector("#sort_lth").addEventListener("click", function () {
            let x = sort_lth(result.hotels)
            append(x)
        })
        document.querySelector("#sort_htl").addEventListener("click", function () {
            let x = sort_htl(result.hotels)
            append(x)
        })
        document.querySelector("#filter_ac").addEventListener("click", function () {
            let x = filter_ac(result.hotels)
            append(x)
        })
        document.querySelector("#filter_nonac").addEventListener("click", function () {
            let x = filter_nonac(result.hotels)
            append(x)
        })


        function sort_lth(data) {
            return data.sort(function (a, b) { return a.Price - b.Price })
        }

        function sort_htl(data) {
            return data.sort(function (a, b) { return b.Price - a.Price })
        }

        function filter_ac(data) {
            console.log(data);
            return data.filter(el => {
                console.log(el.Ac)
                return (el.Ac == true)
            })

        }

        function filter_nonac(data) {
            console.log(data);
            return data.filter(el => {
                console.log(el.Ac)
                return (el.Ac == false)
            })

        }
        await append(result.hotels)
    }
})
temp()
// async function temp() { 
//     api = `https://masai-mock-api.herokuapp.com/hotels/search?city=goa`
//     let res = await fetch(api)
//     let result = await res.json()
//     // console.log(data)
//     document.querySelector("#sort_lth").addEventListener("click", function () {
//         let x = sort_lth(result.hotels)
//         append(x)
//     })
//     document.querySelector("#sort_htl").addEventListener("click", function () {
//         let x = sort_htl(result.hotels)
//         append(x)
//     })
//     document.querySelector("#filter_ac").addEventListener("click", function () {
//         let x = filter_ac(result.hotels)
//         append(x)
//     })
//     document.querySelector("#filter_nonac").addEventListener("click", function () {
//         let x = filter_nonac(result.hotels)
//         append(x)
//     })


//     function sort_lth(data) {
//         return data.sort(function (a, b) { return a.Price - b.Price })
//     }

//     function sort_htl(data) {
//         return data.sort(function(a, b){return b.Price - a.Price})
//     }

//     function filter_ac(data) {
//         console.log(data);
//         return data.filter(el => {
//             console.log(el.Ac)
//             return (el.Ac == true)
//         })
        
//     }

//     function filter_nonac(data) {
//         console.log(data);
//         return data.filter(el => {
//             console.log(el.Ac)
//             return (el.Ac == false)
//         })

//     }
//     await append(result.hotels)
// }


function append(data) {
    document.querySelector('#hotels_list').innerHTML = ""
    data.forEach(el => {
        let div = document.createElement('div')
        div.setAttribute('id', "hotel")
        let img = document.createElement('img')
        img.src = el.Images.one
        let h3 = document.createElement('h3')
        h3.innerText = el.Title
        let h2 = document.createElement('h2')
        h2.innerText = `Rs. ${el.Price}`
        let h4 = document.createElement('h4')
        h4.innerText = `${el.Rating}/5`
        let p2 = document.createElement('p')
        let temp;
        if (el.Ac == true) temp = "AC"
        else temp = "Non AC"
        p2.innerText = temp
        let button = document.createElement("button")
        button.setAttribute('class', "book")
        button.innerText = "Book Now"
        button.onclick = function () { 
            if (login == "true") {
                console.log("Book already Exists!");
                localStorage.setItem("book",JSON.stringify(el))
                location.href = "checkout.html"
            } else {
                alert("Log In to continue!")
            }
        }
        div.append(img, h3, h2, h4, p2, button)
        document.querySelector('#hotels_list').appendChild(div)
    });
}

