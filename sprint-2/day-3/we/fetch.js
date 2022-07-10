// const url = "https://reqres.in/api/users?page=2"

// fetch(url).then(function (res) {
//     res.json().then(function (res) {
//         console.log(res.data);
//     })
// })
//     .catch(function (err) { 
//         console.log(err);
//     })

async function getData() {
    try {
        
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        console.log(data);
    } catch (err) { 
        console.log(err);
    }
}

getData()