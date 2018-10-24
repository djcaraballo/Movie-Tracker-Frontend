import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../Components/MovieCard';

const MovieContainer = ({movies}) => {
  
  const cards = movies.map((movie) => {
    return <MovieCard key={movie.id} {...movie} />
  })

  return (
    <div className='movie-container'>
      { cards }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MovieContainer);