export interface IDiscoverTV {
  id: number;
  backdrop_path: string | null;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
}

export const initialStateMovie: IDiscoverTV = {
  id: 0,
  backdrop_path: null,
  name: '',
  original_name: '',
  overview: '',
  poster_path: '',
};
