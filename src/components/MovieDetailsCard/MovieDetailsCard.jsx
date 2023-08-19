import {
  CardWrapper,
  ImgWrap,
  MovieTitle,
  Overview,
  GenresWrap,
  CardContent,
} from './MovieDetailsCard.styled';

import PropTypes from 'prop-types';

const MovieDetailsCard = ({ movieDetails }) => {
  const { vote_average, title, overview, genres, poster_path } = movieDetails;

  return (
    <CardWrapper>
      <ImgWrap>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w200/${poster_path}`
              : 'https://cdn.pixabay.com/photo/2012/04/14/15/43/film-34332_1280.png'
          }
          alt="hello"
        />
      </ImgWrap>
      <CardContent>
        <div>
          <MovieTitle>{title}</MovieTitle>
          <p>User score: {vote_average?.toFixed(1)}%</p>

          <Overview>Overview</Overview>
          <p>{overview}</p>
        </div>

        <GenresWrap>
          {genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </GenresWrap>
      </CardContent>
    </CardWrapper>
  );
};

MovieDetailsCard.propTypes = {
  movieDetails: PropTypes.shape({
    vote_average: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieDetailsCard;
