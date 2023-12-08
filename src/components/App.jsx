import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import Header from "./Header/Header";


const Home = lazy(() => import("../pages/Home/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"))
const Movies = lazy(() => import("../pages/Movies/Movies"))
const Cast = lazy(() => import("../components/Cast/Cast"))
const Reviews = lazy(() => import("../components/Reviews/Reviews"))
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
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path='*' element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </div>
  );
};
