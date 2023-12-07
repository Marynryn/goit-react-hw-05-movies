
import { Link } from "react-router-dom";
import { Grid, GridItem } from "./MovieList.styled";


const MoviesList = ({ movies, location }) => {


    return (
        <Grid>
            {movies.map(({ id, name, image }) => {

                return (
                    <GridItem key={id}>
                        <Link to={`/movies/${id}`} style={{ textDecoration: "none", color: "black" }} state={{ from: location }}>{name}

                        </Link>
                    </GridItem>
                );
            })}
        </Grid>
    );
};

export default MoviesList