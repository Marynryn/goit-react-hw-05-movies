import { Route, Routes, NavLink } from "react-router-dom";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import MovieSearch from "pages/Movies";
import Header from "./Header/Header";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="movies" element={<MovieSearch />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path='*' element={<div><NotFound /></div>} /> */}
        </Route>
      </Routes>
    </div>
  );
};
