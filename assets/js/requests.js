const getData = (url) => {
	return fetch(url)
	.then((res) => res.json())
	.then((data) => data.Search);
}

const search = 'iron man';

getData(`http://www.omdbapi.com/?i=tt3896198&apikey=4d447f57&s=${search}`)
.then(console.log)
.catch(console.log);