"https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=8c892134735fd105a74fee049db062f6"
function getData() {
    // let city = document.getElementById("query").ariaValueMax;
    let city = "kolkata"
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c892134735fd105a74fee049db062f6`;

    fetch(url).then(function (res) {
        let data = res.json();
        data.then(function (res) { 
            console.log(res);
            append(res);
        })
    });
}
function append(data) {
    let container = document.querySelector("#container");

    let h2 = document.createElement("h2");
    h2.innerText = data.name;

    let temp = document.createElement("p");
    temp.innerText = data.main.temp;

    let min_temp = document.createElement("p");
    min_temp.innerText = data.main.temp_min;

    let max_temp = document.createElement("p");
    max_temp.innerText = data.main.temp_max;

    container.append(h2,temp,min_temp,max_temp);
}    
getData()

function getLocation() {
    
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
        const crd = pos.coords;
    
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }
}

getLocation()

