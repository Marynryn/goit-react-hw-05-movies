import { Route, Routes, NavLink } from "react-router-dom";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import MovieSearch from "pages/Movies";
import Header from "./Header/Header";
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
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>


      </nav>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route index element={<Home />} />
        <Route path="movies" element={<MovieSearch />} />
        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
        {/* <Route path='*' element={<div><NotFound /></div>} /> */}
      </Routes>
    </div>
  );
};
