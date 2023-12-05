import { useState, useEffect, useRef } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { fetchMovie } from "service/movie-service";
import MovieInfo from "../components/MovieInfo/MovieInfo"

const MovieDetails = () => {

    const [movieInfo, setMovieInfo] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

    const backLinkLocationRef = useRef(location.state?.from ?? '/');
    useEffect(() => {
        if (!movieId) return;
        const movieInfo = async () => {

            try {
                const movie = await fetchMovie(movieId);
                setMovieInfo(movie);

            } catch (error) {

            } finally {

            }
        };
        movieInfo();
    }, [movieId])

    return (
        <>
            {movieInfo && (
                <div>
                    <button type="button">
                        {' '}
                        <Link to={backLinkLocationRef.current}>Go back</Link>
                    </button>

                    <MovieInfo movieInfo={movieInfo} />

                    <h4>Additional information</h4>
                    <ul>
                        <li>
                            <Link to="cast">Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                </div>
            )}
            {/* <Suspense fallback={<div>loading ...</div>}>
                <Outlet />
            </Suspense> */}
        </>
    );
};

export default MovieDetails;

