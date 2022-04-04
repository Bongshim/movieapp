const API_KEY = "api_key=02c9912895027076be1f9d532356a15a";

const BASE_URL = "https://api.themoviedb.org/3";

const POPULAR_MOVIES_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const GENRE_MOVIES_URL = BASE_URL + "/genre/movie/list?" + API_KEY;

const UPCOMING_URL = BASE_URL + "/movie/upcoming?" + API_KEY;

const IMG_URL = "https://image.tmdb.org/t/p/w500";

// Getting popular movies
getPopularMovies(POPULAR_MOVIES_URL);

getUpcomingMovies(UPCOMING_URL);

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
//getting the movies
function getUpcomingMovies(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
          console.table(data.results);
        showUpcomingMovies(data.results);
      });
  }


  // getting the genres of movies
   


// show popular movies
function showPopularMovies(movies) {
  movies.forEach((movie) => {
    // getting the movies
    const movieTitle = movie.title;
    const movieRating = movie.vote_average;
    const movieGenreID = movie.genre_ids[0];
    const moviePoster = IMG_URL + movie.poster_path;

  
    // embeding data in html page
    const movieGallery = document.querySelector(".ld-video-data-contain");

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

// show upcoming movies
function showUpcomingMovies(movies) {
    movies.forEach((movie) => {
      // getting the movies
      const movieTitle = movie.title;
      const movieRating = movie.vote_average;
      const movieGenreID = movie.genre_ids[0];
      const moviePoster = IMG_URL + movie.poster_path;
  
    
      // embeding data in html page
      const movieGallery = document.querySelector(".ld-video-data-contain-coming");
  
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