import { fetchReviews } from "service/movie-service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();


    useEffect(() => {
        if (!movieId) return;
        const reviews = async () => {

            try {
                const reviewsInfo = await fetchReviews(movieId);
                setReviews(reviewsInfo.results);

            } catch (error) { }
        };
        reviews();
    }, [movieId])
    return (
        <div>
            {reviews ? (
                <ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <h3>Author:{author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie</p>
            )}
        </div>
    );
};



export default Reviews;