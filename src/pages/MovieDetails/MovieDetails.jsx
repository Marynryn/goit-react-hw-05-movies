import { useState, useEffect, useRef, Suspense } from "react";
import { useLocation, useParams, Link, Outlet } from "react-router-dom";
import { fetchMovie } from "service/movie-service";
import MovieInfo from "../../components/MovieInfo/MovieInfo"
import { Grid, GridItem, Button, Heading } from "./MovieDetails.styled";
import { Container } from "components/Header/Header.styled";
import styled from "styled-components";


export const LinkStyled = styled(Link)`
  color: black;
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: cubicBezier;
  transform: scale(0.9);
  &:hover,
  &:focus {
    color:grey;
  } 
   &.active {
    color: white;
    background-color: #27ad0c;
    padding: 6px 12px;
    border-radius: 4%;
    transform: scale(1);
    pointer-events: none;
  }
`;

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
                <Container>
                    <Button type="button">
                        {' '}
                        <LinkStyled to={backLinkLocationRef.current}>Go back</LinkStyled>
                    </Button>

                    <MovieInfo movieInfo={movieInfo} />

                    <Heading>Additional information</Heading>
                    <Grid>
                        <GridItem>
                            <LinkStyled to="cast">Cast</LinkStyled>
                        </GridItem>
                        <GridItem>
                            <LinkStyled to='reviews'>Reviews</LinkStyled>
                        </GridItem>
                    </Grid>
                </Container>
            )}
            <Suspense fallback={<div>loading ...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default MovieDetails;

