// import { MovieDetails } from "pages/MovieDetails";
import { Link } from "react-router-dom";

const MoviesList = ({ movies, location }) => {


    return (
        <ul>
            {movies.map(({ id, name, image }) => {

                return (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>{name}

                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default MoviesList