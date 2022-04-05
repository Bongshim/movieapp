const API_KEY = "api_key=02c9912895027076be1f9d532356a15a";

const BASE_URL = "https://api.themoviedb.org/3";

const POPULAR_MOVIES_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const GENRE_MOVIES_URL = BASE_URL + "/genre/movie/list?" + API_KEY;

const UPCOMING_URL = BASE_URL + "/movie/upcoming?" + API_KEY;

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const SEARCH_SINGLEM_URL = BASE_URL + "/search/movie?" + API_KEY;

const TRENDING_TV_SHOWS = BASE_URL + "/trending/tv/week?" + API_KEY;

const ANIMATION = BASE_URL + "/discover/movie?" + API_KEY + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=16&with_watch_monetization_types=flatrate";

const NIGERIAN_MOVIES = BASE_URL + "/search/movie?" + API_KEY + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&query=nigeria";

// console.log(ANIMATION)


// Getting popular movies
getPopularMovies(POPULAR_MOVIES_URL);

getUpcomingMovies(UPCOMING_URL);

getTrendingTVShows(TRENDING_TV_SHOWS);

getAnimationMovies(ANIMATION);

getNigerianMovies(NIGERIAN_MOVIES);

//getting popular movies
function getPopularMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.table(data.results);
      showPopularMovies(data.results);
    });
}

// getting upcoming movies
function getUpcomingMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.table(data.results);
      showUpcomingMovies(data.results);
    });
}

// getting trending tv Shows
function getTrendingTVShows(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.table(data.results);
      showTrendingTVShows(data.results);
    });
}

// getting animation movies 
function getAnimationMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.table(data.results);
      showAnimationMovies(data.results);
    });
}

function getNigerianMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.table(data.results);
      showNigerianMovies(data.results);
    });
}

// getting the genres of movies

// show popular movies
function showPopularMovies(movies) {
  movies.forEach((movie) => {
    // getting the movies
    // console.table(movie)
    const movieTitle = movie.title;
    const movieRating = movie.vote_average;
    const movieGenreID = movie.genre_ids[0];
    const moviePoster = IMG_URL + movie.poster_path;



    // embeding data in html page
    const movieGallery = document.querySelector(".ld-video-data-contain");

    const movieBox = document.createElement("div");
    movieBox.classList.add("ld-video-item");

    movieBox.innerHTML = `
    <a onclick="movieSelected('${movie.original_title}')"><div class="ld-video-cover">
        <img
        src="${moviePoster}"
        alt="Benched" />
        <a href="" class="ld-video-play-btn"></a>
        <span class="ld-video-rating">${movieRating}</span>
    </div>
    <div class="ld-video-content">
        <h3 class="ld-video-title">${movieTitle}</h3>
        <span class="ld-video-category"></span>
    </div></a>
    `;

    movieGallery.appendChild(movieBox);
  });
}

// show upcoming movies
function showUpcomingMovies(movies) {
  movies.forEach((movie) => {
    // getting the movies
    const movieTitle = movie.title;
    const movieRating = movie.vote_average;
    const movieGenreID = movie.genre_ids[0];
    const moviePoster = IMG_URL + movie.poster_path;

    // embeding data in html page
    const movieGallery = document.querySelector(
      ".ld-video-data-contain-coming"
    );

    const movieBox = document.createElement("div");
    movieBox.classList.add("ld-video-item");

    movieBox.innerHTML = `
      <div class="ld-video-cover">
          <img
          src="${moviePoster}"
          alt="Benched" />
          <a href="" class="ld-video-play-btn"></a>
          <span class="ld-video-rating">${movieRating}</span>
      </div>
      <div class="ld-video-content">
          <h3 class="ld-video-title">${movieTitle}</h3>
          <span class="ld-video-category"></span>
      </div>
      `;

    movieGallery.appendChild(movieBox);
  });
}


// show trending tv shows
function showTrendingTVShows(movies) {
  movies.forEach((movie) => {
    // getting the movies
    const movieTitle = movie.name;
    const movieRating = movie.vote_average;
    const movieGenreID = movie.genre_ids[0];
    const moviePoster = IMG_URL + movie.poster_path;

    // embeding data in html page
    const movieGallery = document.querySelector(
      ".ld-video-data-contain-trending-tv"
    );

    const movieBox = document.createElement("div");
    movieBox.classList.add("ld-video-item");

    movieBox.innerHTML = `
      <div class="ld-video-cover">
          <img
          src="${moviePoster}"
          alt="${movieTitle}" />
          <a href="" class="ld-video-play-btn"></a>
          <span class="ld-video-rating">${movieRating}</span>
      </div>
      <div class="ld-video-content">
          <h3 class="ld-video-title">${movieTitle}</h3>
          <span class="ld-video-category"></span>
      </div>
      `;

    movieGallery.appendChild(movieBox);
  });
}

function showAnimationMovies(movies){

  for (let i = 0; i < 10; i++) {


  // movies.forEach((movie) => {
    // getting the movies
    const movieTitle = movies[i].title;
    const movieRating = movies[i].vote_average;
    const movieGenreID = movies[i].genre_ids[0];
    const moviePoster = IMG_URL + movies[i].poster_path;

    // embeding data in html page
    const movieGallery = document.querySelector(
      ".ld-video-data-contain-animation"
    );

    const movieBox = document.createElement("div");
    movieBox.classList.add("ld-video-item");

    movieBox.innerHTML = `
      <div class="ld-video-cover">
          <img
          src="${moviePoster}"
          alt="${movieTitle}" />
          <a href="" class="ld-video-play-btn"></a>
          <span class="ld-video-rating">${movieRating}</span>
      </div>
      <div class="ld-video-content">
          <h3 class="ld-video-title">${movieTitle}</h3>
          <span class="ld-video-category"></span>
      </div>
      `;

    movieGallery.appendChild(movieBox);
  // });
}
}

function showNigerianMovies(movies){

  // for (let i = 0; i < 10; i++) {


  movies.forEach((movie) => {
    // getting the movies
    const movieTitle = movie.title;
    const movieRating = movie.vote_average;
    const movieGenreID = movie.genre_ids[0];
    const moviePoster = IMG_URL + movie.poster_path;

    // embeding data in html page
    const movieGallery = document.querySelector(
      ".ld-video-data-contain-nigeria"
    );

    const movieBox = document.createElement("div");
    movieBox.classList.add("ld-video-item");

    if ( movie.poster_path != null) {

    movieBox.innerHTML = `
      <div class="ld-video-cover">
          <img
          src="${moviePoster}"
          alt="${movieTitle}" />
          <a href="" class="ld-video-play-btn"></a>
          <span class="ld-video-rating">${movieRating}</span>
      </div>
      <div class="ld-video-content">
          <h3 class="ld-video-title">${movieTitle}</h3>
          <span class="ld-video-category"></span>
      </div>
      `;

    movieGallery.appendChild(movieBox);}
  });
// }
}

// function movieSelected(title){
//   sessionStorage.setItem('movieTitle',title);
//   window.location = '/src/movie.html';
//   return false;
// }


