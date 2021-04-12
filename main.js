// const user = {
//     name: 'HEROPY',
//     age: 85,
//     emails: [
//         'first@gmail.com',
//         'second@naver.com'
//     ]
// }
// //localStorage.setItem('officeId', 'mclicksystem');
// localStorage.setItem('user', JSON.stringify(user));
// const str = localStorage.getItem('user');
// const obj = JSON.parse(str);
// console.log(obj);

// obj.age = 22;

// console.log(obj);

// //localStorage.removeItem('user');
// //localStorage.removeItem('officeId');

import axios from "axios";

// function fetchMovies() {
//   axios.get("https://www.omdbapi.com/?apikey=7035c60c&s=frozen").then((res) => {
//     console.log(res);
//     const h1El = document.querySelector("h1");
//     const imgEl = document.querySelector("img");
//     h1El.textContent = res.data.Search[0].Title;
//     imgEl.src = res.data.Search[0].Poster;
//   });
// }

//fetchMovies();

const btnEl = document.querySelector(".btn");
//const search = document.querySelector(".search").value;
//console.log(document.querySelector(".search"));
//console.log(document.querySelector(".search").value);
btnEl.addEventListener("click", (event) => {
  const search = document.querySelector(".search").value;
  //const url = "https://www.omdbapi.com/?apikey=7035c60c&s=frozen";
  const url = "https://www.omdbapi.com/?apikey=7035c60c&s=" + search;
  console.log(url);

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const ulEl = document.createElement("ul");
      document.body.appendChild(ulEl);
      //document.body.append(ul);
      console.log(ulEl);
      data.Search.forEach((movie) => {
        //console.log(movie.Title, movie.Poster);
        const liEl = document.createElement("li");
        const imgEl = document.createElement("img");
        //console.log(liEl);
        ulEl.appendChild(liEl);
        liEl.textContent = movie.Title;
        ulEl.appendChild(imgEl);
        imgEl.src = movie.Poster;
      });
    })
    .catch((err) => {
      console.log("Fetch Error", err);
    });
});

// const url = "https://www.omdbapi.com/?apikey=7035c60c&s=frozen";
// fetch(url)
//   .then((res) => {
//     // response 처리
//     //console.log(res);
//     // 응답을 JSON 형태로 파싱
//     return res.json();
//   })
//   .then((data) => {
//     // json 출력
//     console.log(data);
//     const h1El = document.querySelector("h1");
//     const imgEl = document.querySelector("img");
//     //const ulEl = document.querySelector("ul");
//     //h1El.textContent = data.Search[0].Title;
//     //imgEl.src = data.Search[0].Poster;

//     const ulEl = document.createElement("ul");
//     document.body.appendChild(ulEl);
//     //document.body.append(ul);
//     console.log(ulEl);
//     data.Search.forEach((movie) => {
//       //console.log(movie.Title, movie.Poster);
//       const liEl = document.createElement("li");
//       const imgEl = document.createElement("img");
//       //console.log(liEl);
//       ulEl.appendChild(liEl);
//       liEl.textContent = movie.Title;
//       ulEl.appendChild(imgEl);
//       imgEl.src = movie.Poster;
//     });
//   })
//   .catch((err) => {
//     // error 처리
//     console.log("Fetch Error", err);
//   });
