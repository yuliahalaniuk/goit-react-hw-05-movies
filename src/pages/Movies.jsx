import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { searchMovies } from '../api/api';
import SearchBar from '../components/SearchBar/SearchBar';
import FilteredMovieList from '../components/FilteredMovieList/FilteredMovieList';
import Loader from 'components/Loader/Loader';
import { ErrorText } from './PageElements.styled';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const queryString = searchParams.get('query');

  const handleSearchSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.queryInput.value;

    if (searchQuery.trim() === '') {
      alert('write something');
      return;
    }

    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    if (!queryString) return;

    const getMovies = async () => {
      try {
        setIsLoading(true);

        const movies = await searchMovies(queryString);

        setFoundMovies(movies.results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [queryString]);

  return (
    <>
      <SearchBar
        handleSearchSubmit={handleSearchSubmit}
        queryString={queryString}
      />
      {isError && (
        <ErrorText>
          Oops... Something went wrong, please reload the page
        </ErrorText>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <FilteredMovieList foundMovies={foundMovies} location={location} />
      )}
    </>
  );
};

export default Movies;

//// Controlled input

// const [searchParams, setSearchParams] = useSearchParams();
// const productName = searchParams.get('name') ?? '';

// const handleInputChange = name => {
//   setSearchParams(() => {
//     return name !== '' ? { name } : {};
//   });
// };

//  + useEffect with fetch

// return
//  <input
//   value={productName}
//   onChange={e => {
//     handleInputChange(e.target.value);
//   }}
//  />
