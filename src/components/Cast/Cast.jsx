import { fetchCast } from "service/movie-service";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";


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
        <ul>
            {castInfo &&
                castInfo.map(({ original_name, character, profile_path, id }) => (
                    <li key={id}>
                        <img
                            src={
                                profile_path
                                    ? `https://image.tmdb.org/t/p/w185${profile_path}`
                                    : defaultImg
                            }
                            width={250}
                            alt={original_name}
                        />
                        <p>{original_name}</p>
                        <p>Character: {character}</p>
                    </li>
                ))}
        </ul>
    );
};



export default Cast;