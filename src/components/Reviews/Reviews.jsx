import { fetchReviews } from "service/movie-service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, GridItem, Text, Heading2 } from "./Reviews.styled";


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
                <Grid>
                    {reviews.map(({ id, author, content }) => (
                        <GridItem key={id}>
                            <Heading2>{author}</Heading2>
                            <Text>{content}</Text>
                        </GridItem>
                    ))}
                </Grid>
            ) : (
                <p>We don't have any reviews for this movie</p>
            )}
        </div>
    );
};



export default Reviews;