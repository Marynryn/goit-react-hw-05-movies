import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm'
import MoviesList from 'components/MovieList/MovieList';
import { fetchByName } from './../service/movie-service';

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [params, setParams] = useSearchParams();
    const location = useLocation();
    useEffect(() => {
        const value = params.get('query');

        if (!value) return;
        const getMovie = async () => {
            const movie = await fetchByName(value);
            try {
                setMovies(movie);
            } catch (error) {

            }
        };
        getMovie();
    }, [params]);

    const handleFormSubmit = query => {
        if (query === '') {
            return setParams({});

        }

        setParams({ query });

    };

    return (
        <section>
            <div>
                <SearchForm onSubmit={handleFormSubmit} />
                {movies && <MoviesList movies={movies} location={location} />}
            </div>
        </section>
    );
};
export default Movies;