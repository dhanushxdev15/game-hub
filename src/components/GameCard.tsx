
import { Game } from '../hooks/useGames'
import { Card,Image,CardBody,Heading, HStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import GameRating from './GameRating'
 interface Props{
      game:Game
 }
 const getGameRating = (id: number) => {
  return Number((2.5 + ((id * 7) % 15) / 10).toFixed(1));
};
const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
       <Image src={game.thumbnail}/>
       <CardBody>
           <Heading fontSize="2xl">{game.title}</Heading>
           <HStack justifyContent="space-between">
           <PlatformIconList platform={game.platform} />
           <GameRating rating={getGameRating(game.id)} />
           </HStack>
       </CardBody>
    </Card>
  )
}

export default GameCard