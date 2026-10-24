
import useData from "./useDats";

 export  interface Platform{
  id:number;
  name:string;
  slug:string;

}

 export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform:string;
  metacritic:number;
}

const useGames = () => useData<Game>("/games");

export default useGames;