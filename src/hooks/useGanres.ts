
import useData from "./useDats";

export interface Genre{
    id:number;
    name:string;
}

interface GameGenre {
  genre: string;
}


const useGenres =() => {

     const { data, error, isLoading } = useData<GameGenre>("/games");

const uniqueGenres = [
  ...new Set(
    data.map((game) => game.genre).filter(Boolean)
  ),
];

const genres: Genre[] = uniqueGenres.map((name, index) => ({
  id: index + 1,
  name,
}));
    
      return { genres, error,isLoading };
    };
    


export default useGenres;