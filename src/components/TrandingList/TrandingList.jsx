import { Link } from 'react-router-dom';
import {
  TrendingList,
  TrendingListItem,
  ImgWrap,
  CardTitle,
} from './TrandingList.styled';
import PropTypes from 'prop-types';

const TrandingList = ({ trandingList, location }) => (
  <TrendingList>
    {trandingList.map(movie => {
      return (
        <TrendingListItem key={movie.id}>
          <Link to={`/movie/${movie.id}`} state={{ from: location }}>
            <ImgWrap>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                    : 'https://cdn.pixabay.com/photo/2012/04/14/15/43/film-34332_1280.png'
                }
                alt="Movie poster"
              />
            </ImgWrap>
            <CardTitle> {movie.title ?? movie.name}</CardTitle>
          </Link>
        </TrendingListItem>
      );
    })}
  </TrendingList>
);

TrandingList.propTypes = {
  trandingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};
export default TrandingList;
