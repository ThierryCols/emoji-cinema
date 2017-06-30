import React from 'react';

const Carousel = (props) => (
  <div className="carousel">
    {props.movieList.map((movie) => (
      <div className="movie" key={movie.title}>
        <p className="title">{movie.title} - </p>
        <p className="emoji">{movie.emoji}</p>
      </div>
    ))}
  </div>
)

export default Carousel;
