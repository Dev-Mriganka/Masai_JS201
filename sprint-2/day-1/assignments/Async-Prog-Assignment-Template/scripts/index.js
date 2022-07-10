let images = ["https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-0-1z5156101/cover/1170x658withlogo40a46c3b218b4bcf8947974d6d7c5bb8_free.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-101-10z5145273/cover/1170x6582df54c70231d46be821e840ee96314a4.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/cover/1170x658withlogo39e9b67c713e4044a52d5131b6ccd535351614f22f2b4b71b1c6212b4866e89a_free.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-0-1z5146416/cover/1170x658withlogo7d3b23a5bbeb483298901769ba1e97bb_free.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133622/cover/1170x658withlogof994f29250bc49d1b5c4b7d8df445480_free.jpg"];

function slideshow() {
    let i = 0;
    let slideshow = document.querySelector("#slideshow");

    setInterval(function () {
        if (i === images.length) {
            i = 0;
        }

        let img = document.createElement("img");
        img.src = images[i];
        slideshow.innerHTML = null
        slideshow.appendChild(img);
        i++;
    }, 3000);
}
const movies = [
    {
        "title": "Dangal",
        "year": "2016",
        "genres": [
            "Action",
            "Biography",
            "Drama"
        ],
        "duration": "PT161M",
        "releaseDate": "2016-12-23",
        "actors": [
            "Aamir Khan",
            "Sakshi Tanwar",
            "Fatima Sana Shaikh"
        ],
        "imdbRating": 8.9,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg"
    },
    {
        "title": "Drishyam",
        "year": "2013",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "duration": "PT160M",
        "releaseDate": "2013-12-19",
        "actors": [
            "Mohanlal",
            "Meena",
            "Ansiba"
        ],
        "imdbRating": 8.9,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX330_CR0,0,330,432_AL_.jpg"
    },
    
    {
        "title": "Gol Maal",
        "year": "1979",
        "genres": [
            "Comedy",
            "Romance"
        ],
        "duration": "PT144M",
        "releaseDate": "1979-04-20",
        "actors": [
            "Amol Palekar",
            "Bindiya Goswami",
            "Deven Verma"
        ],
        "imdbRating": 8.7,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4OTczODgxNF5BMl5BanBnXkFtZTgwMDAzMTU2NDE@._V1_SY250_CR0,0,187,250_AL_.jpg"
    },
    {
        "title": "Black Friday",
        "year": "2004",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "duration": "PT143M",
        "releaseDate": "2007-02-09",
        "actors": [
            "Kay Kay Menon",
            "Pavan Malhotra",
            "Aditya Srivastava"
        ],
        "imdbRating": 8.6,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmU1NDhjYTQtYjQxYy00MjlmLWIxMjItMjllMmE2NDRlY2ZhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX400_AL_.jpg"
    },
    {
        "title": "Taare Zameen Par",
        "year": "2007",
        "genres": [
            "Drama",
            "Family",
            "Music"
        ],
        "duration": "PT165M",
        "releaseDate": "2008-12-26",
        "actors": [
            "Darsheel Safary",
            "Aamir Khan",
            "Tanay Chheda"
        ],
        "imdbRating": 8.5,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg"
    },
    {
        "title": "Jaane Bhi Do Yaaro",
        "year": "1983",
        "genres": [
            "Comedy",
            "Drama"
        ],
        "duration": "PT132M",
        "releaseDate": "1983-08-12",
        "actors": [
            "Naseeruddin Shah",
            "Ravi Baswani",
            "Bhakti Barve"
        ],
        "imdbRating": 8.6,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQ0MzA3NDY3Nl5BMl5BanBnXkFtZTcwOTAwMzIzMg@@._V1_SY235_CR0,0,177,235_AL_.jpg"
    },
    {
        "title": "3 Idiots",
        "year": "2009",
        "genres": [
            "Comedy",
            "Drama"
        ],
        "duration": "PT170M",
        "releaseDate": "2009-12-25",
        "actors": [
            "Aamir Khan",
            "Madhavan",
            "Mona Singh"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://i.pinimg.com/originals/f1/c5/93/f1c5930f3e63781f74105dc0c15c6c3d.jpg"
    },
    {
        "title": "Chupke Chupke",
        "year": "1975",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "duration": "PT127M",
        "releaseDate": "1975-04-11",
        "actors": [
            "Dharmendra",
            "Sharmila Tagore",
            "Amitabh Bachchan"
        ],
        "imdbRating": 8.5,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzMjMzMzU2N15BMl5BanBnXkFtZTgwMDkxOTE3NDE@._V1_SY250_CR0,0,187,250_AL_.jpg"
    },
    {
        "title": "Pather Panchali",
        "year": "1955",
        "genres": [
            "Drama"
        ],
        "duration": "PT125M",
        "releaseDate": "1955-08-26",
        "actors": [
            "Kanu Bannerjee",
            "Karuna Bannerjee",
            "Subir Banerjee"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://xl.movieposterdb.com/12_10/1955/48473/xl_48473_df2341ee.jpg"
    },
    {
        "title": "A Wednesday",
        "year": "2008",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "duration": "PT104M",
        "releaseDate": "2008-09-05",
        "actors": [
            "Anupam Kher",
            "Naseeruddin Shah",
            "Jimmy Shergill"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzODEzMjE1MTJeQTJeQWpwZ15BbWU3MDE3NjQ5Mzk@._V1_SY492_SX324_AL_.jpg"
    },
    {
        "title": "Andaz Apna Apna",
        "year": "1994",
        "genres": [
            "Comedy",
            "Family",
            "Romance"
        ],
        "duration": "PT160M",
        "releaseDate": "1994-11-04",
        "actors": [
            "Aamir Khan",
            "Salman Khan",
            "Raveena Tandon"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWE2MjhjMmMtNzQyMS00MmI0LTlkOTUtZDVlZjFlNmZkNDgyL2ltYWdlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY462_CR0,0,331,462_AL_.jpg"
    },
    {
        "title": "Hera Pheri",
        "year": "2000",
        "genres": [
            "Comedy",
            "Crime",
            "Thriller"
        ],
        "duration": "PT156M",
        "releaseDate": "2000-03-31",
        "actors": [
            "Akshay Kumar",
            "Paresh Rawal",
            "Sunil Shetty"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://xl.movieposterdb.com/21_11/2000/242519/xl_242519_ce40b328.jpg?v=2021-11-30%2005:06:54"
    },
    {
        "title": "Drishyam",
        "year": "2015",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "duration": "PT163M",
        "releaseDate": "2015-07-31",
        "actors": [
            "Ajay Devgn",
            "Shriya Saran",
            "Tabu"
        ],
        "imdbRating": 8.5,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyMjgyNDY3N15BMl5BanBnXkFtZTgwOTMzNTE5NTE@._V1_SY500_CR0,0,346,500_AL_.jpg"
    },
    {
        "title": "Sholay",
        "year": "1975",
        "genres": [
            "Action",
            "Adventure",
            "Comedy"
        ],
        "duration": "PT198M",
        "releaseDate": "1975-08-15",
        "actors": [
            "Dharmendra",
            "Sanjeev Kumar",
            "Hema Malini"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOWQ0YTUzYzItYjI0MC00OTZmLWE1MWQtY2EzMzU2MTlmMmJjXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SY383_CR0,0,292,383_AL_.jpg"
    }
]


function display() {
    movies.forEach((el, index) => {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.posterurl;
        let h3 = document.createElement("h3")
        h3.innerText = el.title;
        let p = document.createElement("p")
        p.innerText = el.imdbRating;
        let hb = document.createElement("h3")
        hb.innerText = el.releaseDate;
        div.append(img, h3, p, hb);
        document.querySelector("#movies").appendChild(div)

    })
}
display()
slideshow();