import { percent } from "helpers";


const MovieInfo = ({ movieInfo }) => {

    const { poster_path, original_title, overview, vote_average, genres } =
        movieInfo;


    return (
        <div>
            <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={original_title}
            />
            <div>
                <h2>{original_title}</h2>
                <p>User Score {percent(vote_average)}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                    {genres.map(({ name, id }) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};



export default MovieInfo;