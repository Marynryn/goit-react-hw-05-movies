import { fetchCast } from "service/movie-service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, GridItem, Image, Text } from "./Cast.styled";


const Cast = () => {
    const [castInfo, setCastInfo] = useState(null);
    const { movieId } = useParams();
    const defaultImg =
        'https://via.placeholder.com/185x278.png?text=Image+Not+Found';
    useEffect(() => {

        if (!movieId) return;
        const castInfo = async () => {

            try {
                const cast = await fetchCast(movieId);
                setCastInfo(cast.cast);

            } catch (error) {

            } finally {

            }
        };
        castInfo();
    }, [movieId])
    return (
        <div>
            {castInfo ?
                (<Grid>
                    {castInfo.map(({ original_name, character, profile_path, id }) => (
                        <GridItem key={id}>
                            <Image
                                src={
                                    profile_path
                                        ? `https://image.tmdb.org/t/p/w185${profile_path}`
                                        : defaultImg
                                }
                                width={250}
                                alt={original_name}
                            />
                            <Text>{original_name}</Text>
                            <Text>Character: {character}</Text>
                        </GridItem>
                    ))}
                </Grid>
                ) : (
                    <p>We don't have any cast for this movie</p>
                )
            }
        </div>
    );
};



export default Cast;