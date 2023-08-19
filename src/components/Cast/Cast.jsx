import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'api/api';
import {
  WarningText,
  StyledList,
  StyledListItem,
  StyledName,
} from './Cast.styled';
import Loader from 'components/Loader/Loader';
import { ErrorText } from 'pages/PageElements.styled';

const Cast = () => {
  const [castList, setCastList] = useState(null);

  const { id } = useParams();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);

        const movies = await getMovieCast(id);

        setCastList(movies.cast);
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
      ) : castList?.length === 0 ? (
        <WarningText>No cast found</WarningText>
      ) : (
        <StyledList>
          {castList?.map(actor => (
            <StyledListItem key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : 'https://cdn.pixabay.com/photo/2014/05/21/20/17/icon-350225_1280.png'
                }
                alt={`${actor.name}`}
                width="200px"
              />
              <div>
                <StyledName>{actor.name}</StyledName>
                <p>{actor.character}</p>
              </div>
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </>
  );
};

export default Cast;
