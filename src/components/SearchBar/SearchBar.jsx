import { SearchInput, SearchForm } from './SearchBar.styled';
import PropTypes from 'prop-types';

const SearchBar = ({ handleSearchSubmit, queryString }) => (
  <SearchForm onSubmit={handleSearchSubmit}>
    <SearchInput name="queryInput" defaultValue={queryString} />
    <button type="submit">Search</button>
  </SearchForm>
);

SearchBar.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  queryString: PropTypes.string,
};

export default SearchBar;
