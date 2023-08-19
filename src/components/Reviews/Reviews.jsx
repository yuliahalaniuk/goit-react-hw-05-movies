import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/api';

import { StyledList, WarningText, ReviewItem } from './Reviews.styled';
import Loader from 'components/Loader/Loader';
import { ErrorText } from 'pages/PageElements.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);

        const movies = await getMovieReviews(id);

        setReviews(movies.results);
      } catch {
        console.log('trouble');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [id]);

  return (
    <>
      {isError && (
        <ErrorText>
          Oops... Something went wrong, please reload the page
        </ErrorText>
      )}

      {isLoading ? (
        <Loader />
      ) : reviews?.length !== 0 ? (
        <StyledList>
          {reviews?.map(review => (
            <ReviewItem key={review.id}>
              <b>{review.author}</b>
              <p>{review.content}</p>
            </ReviewItem>
          ))}
        </StyledList>
      ) : (
        <WarningText>No reviews</WarningText>
      )}
    </>
  );
};

export default Reviews;
