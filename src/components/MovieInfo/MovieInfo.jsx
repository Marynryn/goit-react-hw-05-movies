import { percent } from "helpers";
import { ContainerImg, ContainerInfo, Image, Heading, Text, Heading2, Grid, GridItem } from "./MovieInfo.styled";

const MovieInfo = ({ movieInfo }) => {

    const { poster_path, original_title, overview, vote_average, genres } =
        movieInfo;


    return (
        <ContainerImg>
            <Image
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={original_title}
            />
            <ContainerInfo>
                <Heading>{original_title}</Heading>
                <Text>User Score {percent(vote_average)}%</Text>
                <Heading2>Overview</Heading2>
                <Text>{overview}</Text>
                <Heading2>Genres</Heading2>
                <Grid>
                    {genres.map(({ name, id }) => (
                        <GridItem key={id}>
                            <Text>{name}</Text>
                        </GridItem>
                    ))}
                </Grid>
            </ContainerInfo>
        </ContainerImg>
    );
};



export default MovieInfo;