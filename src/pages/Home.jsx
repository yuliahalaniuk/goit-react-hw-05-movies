import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { getTrandingMovies } from '../api/api';
import TrandingList from 'components/TrandingList/TrandingList';
import { ErrorText, Title } from './PageElements.styled';
import Loader from '../components/Loader/Loader';
const Home = () => {
  const [trandingList, setTrendingList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);

        const movies = await getTrandingMovies();

        setTrendingList(movies.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

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
        <>
          <Title>Trending today</Title>
          <TrandingList trandingList={trandingList} location={location} />
        </>
      )}
    </>
  );
};

Home.propTypes = {
  trandingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default Home;
