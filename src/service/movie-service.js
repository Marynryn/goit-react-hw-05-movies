import axios from 'axios';
import { transformMoviesData } from 'helpers';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjM1ZDU0ZGIwZTYzYWUwMTQ3YTVjZTFlYjgxN2M2MCIsInN1YiI6IjY1NmEzZTQzODgwNTUxMDBlMzZlOTA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vW42diD1EHMv5qCPA3pJuLvBTBkvCrVPZu8_GWSoEUk';
axios.defaults.headers.common['Authorization'] = `Bearer  ${API_KEY}`;

export const getMoviesList = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  const movies = transformMoviesData(data);
  return movies;
};
export const fetchMovie = async id => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};
export const fetchByName = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  const movies = transformMoviesData(data);
  return movies;
};
export const fetchCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};
export const fetchReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data;
};
