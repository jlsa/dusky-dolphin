import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import './NetflixRow.scss';
import SliderButton from './SliderButton';

type NetflixRowProps = {
  title: string,
  fetchUrl: string,
  id: string
  isLargeRow?: boolean,
}

const NetflixRow = ({ title, fetchUrl, id, isLargeRow }: NetflixRowProps) => {
  const baseUrl: string = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  
  return (
    <section className='row'>
      <h2>{title}</h2>
      <div className='slider'>
        <SliderButton elementId={id} label='<' direction='left' />
        <div id={id} className='row__posters'>
          {movies.map((movie:any) => {
            let imgSrc = `${baseUrl}`
            if (isLargeRow) {
              if (movie.poster_path !== null) {
                imgSrc = `${imgSrc}${movie.poster_path}`;
              } else {
                imgSrc = `${process.env.PUBLIC_URL}/resources/404-poster.png`
              }
            } else {
              if (movie.backdrop_path !== null) {
                imgSrc = `${imgSrc}${movie.backdrop_path}`;
              } else {
                imgSrc = `${process.env.PUBLIC_URL}/resources/404-backdrop.png`
              }
            }
            return (
              <>
                <img
                  key={movie.id}
                  onClick={() => console.log(movie)}
                  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                  src={imgSrc}
                  loading="lazy"
                  alt={movie.name}/>
              </>
            )
          })}
        </div>
        <SliderButton elementId={id} label='>' direction='right' />
      </div>
    </section>
  )
}

export default NetflixRow;