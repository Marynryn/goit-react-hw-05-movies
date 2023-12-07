import { useEffect, useState } from "react";
import { getMoviesList } from "service/movie-service";
import MoviesList from "components/MovieList/MovieList";
import { useLocation } from "react-router-dom";
import { Container, Heading } from "./Home.styled";
import { Loader } from "components/Loader/Loader";
const Home = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const movie = async () => {
            setLoader(true);
            try {
                const nameMovie = await getMoviesList();
                setMovie(nameMovie);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoader(false);
            }
        };
        movie();
    }, [])

    return (
        <Container>{movie && <MoviesList movies={movie} location={location} />}
            {error && <Heading>{error}</Heading>}
            {loader && <Loader />}
        </Container>
    )
}
export default Home;