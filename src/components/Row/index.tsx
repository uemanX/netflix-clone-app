import './Row.css';
import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { IDiscoverTV } from '../../api/tmdb/type';

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

const Row = ({ title, fetchUrl, isLargeRow = false }: Props) => {
  const [movies, setMovies] = useState<IDiscoverTV[]>([]);

  const base_url = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default Row;
