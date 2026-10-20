import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id:number;
    name:string;
}

// interface FetchGenresResponse{
//     count:number;
//     results:Genre[];
// }

const useGenres =() => {

      const [genres, setGenres] = useState<Genre[]>([]);
      const [error, setError] = useState("");
      const[isLoading, setIsLoading]= useState(false);
    
      useEffect(() => {
         const controller = new AbortController();
         setIsLoading(true);
        apiClient
          .get("/games", { signal: controller.signal })
         .then((res) => {
        const uniqueGenres = [
          ...new Set<string>(
            res.data.map((game: { genre: string }) => game.genre)
          ),
        ];

        setGenres(
          uniqueGenres.map((name, index) => ({
            id: index + 1,
            name,
          }))
           );
        })
          .catch((err) =>{
           if(err instanceof CanceledError) return;
         setError(err.message);
          })
    .finally(() => {
      setTimeout(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }, 1000);
    });
          return ()=> controller.abort();
    
      }, []);
    
      return { genres, error,isLoading };
    };
    


export default useGenres;