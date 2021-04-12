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

import axios from 'axios'

function fetchMovies() {
	axios
		.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
		.then((response) => {
			console.log(response)
		})
}

fetchMovies()