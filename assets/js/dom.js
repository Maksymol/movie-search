export let moviesList = null;
export let inputSearch = null;
export let triggerMode = false;

const createElement = ({
	type,
	attr,
	container = null,
	position = 'append',
	evt,
	handler
}) => {
	const el = document.createElement(type);

	Object.keys(attr).forEach((key) => {
    if (key !== 'innerHTML') el.setAttribute(key, attr[key]);
    else el.innerHTML = attr[key];
  })

    if (container && position === 'append') container.append(el);
    if (container && position === 'prepend') container.prepend(el);
    if (evt && handler && typeof handler === 'function')	el.addEventListener(evt, handler);

	return el;
}

export const createStyle = () => {


headStyle.innerHTML = `
*{
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  padding: 20px;
}
.movies {
  display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.movie {
  display: flex;
  justify-content: center;
  align-content: center;
}
.movie__image {
  width: 100%;
  object-fit: cover;
}
`;

document.head.append(headStyle);
}

export const createMarkup = () => {
	const container = document.createElement('div');
	const movies = document.createElement('div');

	container.setAttribute('class','container');
	movies.setAttribute('class', 'movies');
	container.append(movies);
	document.body.prepend(container);

	moviesList = document.querySelector('.movies');
};

export const addMovieToList = (movie) => {
	const item = createElement({
		type: 'div',
		attr: {class: 'movie'},
		container: moviesList
	});

	createElement({
		type:'img',
		attr: {
		  class: 'movie__image',
		  src: /(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'assets\img\no-image.jpg',
		  alt: movie.Title,
		  title: movie.Title
		},
		container: item
	});
}