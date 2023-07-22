import axios from 'axios';

const KEY = 'd7c40df4a48287f2f5df2e38e26d9d9d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchTrandMovies = () => {
  return axios.get(`/trending/all/day?api_key=${KEY}`);
};

const fetchMovie = query => {
  return axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${KEY}`
  );
};

const fetchMovieByID = id => {
  return axios.get(`movie/${id}?language=en-US&api_key=${KEY}`);
};

const fetchMovieCredits = id => {
  return axios.get(`/movie/${id}/credits?language=en-US&api_key=${KEY}`);
};

const fetchMovieRewies = id => {
  return axios.get(`movie/${id}/reviews?language=en-US&page=1&api_key=${KEY}`);
};

const fetchCast = id => {
  return axios.get(`movie/${id}/credits?language=en-US&api_key=${KEY}`);
};

export {
  fetchTrandMovies,
  fetchMovie,
  fetchMovieByID,
  fetchMovieCredits,
  fetchMovieRewies,
  fetchCast,
};
