
import { Game } from '../hooks/useGames'
import { Card,Image,CardBody,Heading } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
 interface Props{
      game:Game
 }
const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
       <Image src={game.thumbnail}/>
       <CardBody>
           <Heading fontSize="2xl">{game.title}</Heading>
           <PlatformIconList platform={game.platform} />
       </CardBody>
    </Card>
  )
}

export default GameCard