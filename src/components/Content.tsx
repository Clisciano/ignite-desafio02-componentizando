import React from 'react';

import { MovieCard } from './MovieCard';

interface Movies {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
 movies: Array<Movies>;
 titleGenre: string;
}

export function Content(props: ContentProps) {
    
  return(
    <>
        <header>
          <span className="category">
            Categoria:
              <span> {props.titleGenre}</span>
          </span>
        </header>

        <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard 
                title={movie.Title} 
                poster={movie.Poster} 
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </>
  );
}