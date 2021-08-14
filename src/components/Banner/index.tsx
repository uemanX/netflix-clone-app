import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import { trancate } from '../../utils';
import './Banner.css';

interface IDiscoverTV {
  backdrop_path: string | null;
  name: string;
  original_name: string;
  overview: string;
}

const initialStateMovie: IDiscoverTV = {
  backdrop_path: null,
  name: '',
  original_name: '',
  overview: '',
};

type Props = {};

const Banner = (props: Props) => {
  const [movie, setMovie] = useState<IDiscoverTV>(initialStateMovie);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png'
        })`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie.name || movie.original_name}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>{trancate(movie.overview, 150)}</h1>
      </div>

      <div className='banner--fadeBottom' />
    </header>
  );
};

export default Banner;
