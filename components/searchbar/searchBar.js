
const input = document.getElementById("searchMoviesButton");
const movieListElement = document.getElementById("searchMoviesList");

const movieDetailRef = "movieDetail" // referencia al modal de detalle de la pelicula

let movies = []
let page = 1
let searchTerm = ""

async function searchMovies(page) {
  
  movies = movies.concat(await getPage("star wars", page ))
  
  populateList(movies)

}

const searchNextPage = () => {
  searchMovies(page += 1)
}

const populateList = (movies) => {
  movieListElement.innerHTML = ""
  for (i = 0; i < movies.length; i++) {

      console.log(movies[i].Title);
      let newLi = SearchMovieElement(movies[i])
      movieListElement.innerHTML += newLi
  }

  movieListElement.appendChild(ViewMoreButton())
} 

const ViewMoreButton = () => {
  let li = document.createElement("LI");
  li.classList.add("viewmore");
  li.addEventListener('click', () => {
    console.log("view More");
    searchNextPage()
  })

  let anchor = document.createElement("A");
  anchor.href= "#"
  anchor.innerHTML = "View More"

  li.appendChild(anchor)

  return li
}

const SearchMovieElement = (movie) => {
  return `<li>
            <a 
              data-toggle="modal"
              data-target="#${movieDetailRef}" 
              href="#${movieDetailRef}"
              onclick="openMovieDetail('${movie.Title}')"
              >
              ${movie.Title}
            </a>
          </li>`
}

const clearSearchMovieList = () => {
  movies = []
  page = 1
}