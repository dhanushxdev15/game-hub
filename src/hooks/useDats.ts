import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


// interface FetchGenresResponse{
//     count:number;
//     results:Genre[];
// }

const useData = <T>(endpoint: string) => {

      const [data, setData] = useState<T[]>([]);
      const [error, setError] = useState("");
      const[isLoading, setIsLoading]= useState(false);
    
      useEffect(() => {
         const controller = new AbortController();
         setIsLoading(true);
         setError("");
        apiClient
          .get<T[]>(endpoint, { signal: controller.signal })
  .then((res) => {
        setData(res.data);
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
    
      },[endpoint]);
    
      return { data, error,isLoading };
    };
    


export default useData;