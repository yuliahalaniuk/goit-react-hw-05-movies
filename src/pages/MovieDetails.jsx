import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { getMovieById } from '../api/api';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';

import Loader from '../components/Loader/Loader';

import {
  AdditionalList,
  Container,
  BackButton,
  ErrorText,
} from './PageElements.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);

        const movies = await getMovieById(id);

        setMovieDetails(movies);
      } catch {
        console.log('trouble');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [id]);

  if (isError) {
    return (
      <ErrorText>
        Oops... Something went wrong, please reload the page
      </ErrorText>
    );
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <BackButton to={backLinkHref.current}>Back</BackButton>
          <MovieDetailsCard movieDetails={movieDetails} />
          <AdditionalList>
            <li key="id-1">
              <Link to="cast" state={{ from: backLinkHref.current }}>
                Cast
              </Link>
            </li>
            <li key="id-2">
              <Link to="reviews" state={{ from: backLinkHref.current }}>
                Reviews
              </Link>
            </li>
          </AdditionalList>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          {/* <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes> */}
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
