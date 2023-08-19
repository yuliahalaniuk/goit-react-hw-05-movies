const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDIyNGIxMTc5YTdiNTBhMzNlOWFjYTYxMGQ1ZWMxNCIsInN1YiI6IjY0ZGJlMTljMzcxMDk3MDBjNTFjZDQ0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P2nNEngaIWSX92kca460A1AMMOsob711_GmbLfz_0D4',
  },
};

const getInfo = async url => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return await response.json();
};

export const getTrandingMovies = () => {
  return getInfo(
    'https://api.themoviedb.org/3/trending/all/day?api_key=ed224b1179a7b50a33e9aca610d5ec14'
  );
};

export const searchMovies = query => {
  return getInfo(`https://api.themoviedb.org/3/search/movie?query=${query}`);
};

export const getMovieById = id => {
  return getInfo(`https://api.themoviedb.org/3/movie/${id}`);
};

export const getMovieReviews = id => {
  return getInfo(`https://api.themoviedb.org/3/movie/${id}/reviews`);
};

export const getMovieCast = id => {
  return getInfo(`https://api.themoviedb.org/3/movie/${id}/credits`);
};

// export const getTrandingMovies = async () => {
//   const r = await fetch(
//     'https://api.themoviedb.org/3/trending/all/day?api_key=ed224b1179a7b50a33e9aca610d5ec14'
//   );
//   return await r.json();
// };

// export const searchMovies = async query => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/search/movie?query=${query}`,
//     options
//   );
//   return await response.json();
// };

// export const getMovieById = async id => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}`,
//     options
//   );

//   return await response.json();
// };

// export const getMovieReviews = async id => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}/reviews`,
//     options
//   );

//   return await response.json();
// };

// export const getMovieCast = async id => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}/credits`,
//     options
//   );

//   return await response.json();
// };
