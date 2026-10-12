import React, {useEffect, useState} from 'react'
import apiClient from '../services/api-client';
import {Text} from '@chakra-ui/react'

interface Game{
    id:number;
    title:string;
}

// interface FetchGamesResponse{
//     count:number;
//     results:Game[];

// }

const
 GameGrid = () => {
    const[games,setGames]= useState<Game[]>([]);
    const[error,setError]= useState('');

 
  useEffect(()=> {
    apiClient.get<Game[]>('/games')
    .then(res=> setGames(res.data))
    .catch(err => setError(err.message));
}
)
    return (
        <>
    {error && <Text color='red'>{error}</Text>}
    <ul>
  {games.map(game=> <li key={game.id}>{game.title}</li>)}
  </ul>
  </>
  )
}

export default GameGrid